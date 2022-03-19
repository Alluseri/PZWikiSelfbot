# PZWikiSelfbot
A small selfbot script for https://pzwiki.net

## Usage
Use in DevTools Console, any pzwiki page(use the main page for most stability)
```js
fullEditCycle(/* page name, e.g. User:Alluseri/Testing or Metal_Crate */, /* full article body */, /* summary, leave "" for empty summary */, /* delay for legitimateness */)
fullEditCycleCallback(/* page name, e.g. User:Alluseri/Testing or Metal_Crate */, /* callback, accepts 1 argument, which is the original article content, returns the modified article content */, /* summary, leave "" for empty summary */, /* delay for legitimateness */)
```
Best docs ever.
### Example usage
```js
(async()=>{await fullEditCycle("VeryCoolPZWikiPage","This is a cool contribution!","This is a cool summary!",4444)}
(async()=>{await fullEditCycleCallback("VeryCoolExistingPZWikiPage",(body)=>body.replace("spam link",""),"Removed spam links!",3333)}
```
## What's been revamped?
Basically nothing.

On a serious note:
- Added reCAPTCHA rendering for external links(2captcha impl. ETA: never, implement yourself, you damn spammer)
- Added fullEditCycleCallback for production
- That's it. Maybe it's actually basically nothing, huh?
## Cry(after revamp)
1. This script is still trash
2. It still uses questionable techniques
3. It is still locked to my useragent and sec-fetch, update them yourself in the source

Code is mostly proof-of-concept and can only be used from the WebKit console(node-fetch version ETA: never), but hey, it works.
