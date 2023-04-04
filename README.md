# chatgpt-i18n-paradox

![](https://img.shields.io/github/actions/workflow/status/wzp21142/Paradox-i18n-chatgpt/auto-build.yml)
![](https://img.shields.io/github/license/wzp21142/Paradox-i18n-chatgpt?color=black)

Translate paradox-style yml locale files with AI Assistance, enjoy your mods and games with all text localized!

This repo is based on [chatgpt-i18n](https://github.com/ObservedObserver/chatgpt-i18n/). Thanks to ObservedObserver!
## Demo


translate

![chatgpt-i18n demo](https://user-images.githubusercontent.com/22167673/224185217-a32406fd-740c-4ced-b86c-55b2b895dc12.png)


download multi locale files

![export-locale-files](https://user-images.githubusercontent.com/22167673/224073592-77bffd43-7422-40d2-984d-cfe95079ceb0.png)


## Deploy

Step 1. Create .env file with openai key
```bash
OPENAI_API_KEY=<your key>
```

Step 2. Install dependencies
```bash
npm install
```


Step 3. Build App

```bash
# forntend
npm run build
# backend
npm run server
```

## Usage

Open .yml files in the localization folders and copy the content into translator, wait and replace the file content with output.