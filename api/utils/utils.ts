
// this is an non-accurate way to estimate token numbers;
// content is a json string
// estimate the word count in content and return the word count
export function estimateTokenCount(content: any): number {
    if (typeof content === 'string') {
        return content.split(' ').length;
    }
    if (content instanceof Array) {
        let count = 0;
        for (let item of content) {
            count += estimateTokenCount(item);
        }
        return count;
    }
    if (typeof content === 'object') {
        let count = 0;
        for (let key in content) {
            count += estimateTokenCount(content[key]);
        }
        return count;
    }
    return 1
}

export function extractYML(text: string) {
    const lines = text.split('\n');
    const reg = /^l_\w+:$/;
    if (reg.test(lines[0])){
        lines.shift();
    }
    const keys = [];
    const values = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.length <= 5) {
        continue;
      }
      const index = line.indexOf(" ");
      const [key, value] = [line.slice(0, index), line.slice(index + 1)];
      const trimmedKey = key.trim();
      const trimmedValue = value.trim().slice(1, -1); 
      
      keys.push(trimmedKey);
      values.push(trimmedValue);
    }
    
    return { keys, values };
  }
