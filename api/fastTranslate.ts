import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Configuration, OpenAIApi } from 'openai'
import { extractYML } from "./utils/utils.js";
import * as dotenv from 'dotenv';
dotenv.config();
function matchJSON (str: string) {
    let start = 0;
    let end = 0;
    let stack: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[') {
            if (stack.length === 0) {
                start = i;
            }
            stack.push('[');
        }
        if (str[i] === ']') {
            stack.pop();
            if (stack.length === 0) {
                end = i;
                break;
            }
        }
    }
    return str.slice(start, end + 1);
}
export default async function handler(request: VercelRequest, response: VercelResponse) {
    const params = request.body;
    const { content, targetLang } = params;
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const content1 = JSON.parse(content);
        const { keys, values } = extractYML(content1);
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are a great translate bot. Translate a i18n locale array content to ${targetLang}. It's a array structure, contains many strings, translate each of them and make a new array of translated strings. Consider all the string as a context to make better translation. Do not translate the text within the square brackets [].\n`,
                },
                {
                    role: "user",
                    content: JSON.stringify(values)
                }
            ]
        });
        const translatedRaw = matchJSON(`${completion.data.choices[0].message?.content}`);
        const translated = JSON.parse(translatedRaw) as string[];
        
        const result = keys.map((key, index) => key + " \"" + translated[index] + "\"");
        response.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.log(error)
        response.status(500).json({
            success: false,
            message: '[/translate] Translating services failed',
            info: `${error}`
        })
    }
}
