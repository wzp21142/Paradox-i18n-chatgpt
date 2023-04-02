export function compressJson(content: string): string {
    try {
        return JSON.stringify(content)
    } catch (error) {
        throw new Error('json is not valid')
    }
}

export function prettierJson(content: string): string {
    try {
        return JSON.stringify(content, null, 1)
    } catch (error) {
        throw new Error('json is not valid')
    }
}

// copy content to clipboard
export function copy2Clipboard(content: string) {
    navigator.clipboard.writeText(content)
}