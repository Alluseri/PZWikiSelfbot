# PZWikiSelfbot
A small selfbot script for https://pzwiki.net

## Usage
Use in DevTools Console, any pzwiki page(use the main page for most stability)
```js
fullEditCycle(/* page name, e.g. User:Alluseri/Testing or Metal_Crate */, /* full article body */, /* summary, leave "" for empty summary */, /* delay for legitimateness */)
```
Best docs ever.
### Example usage
```js
(async()=>{await fullEditCycle("VeryCoolPZWikiPage","This is a cool contribution!","This is a cool summary!",4444)}
```
## Cry(after rework)
1. This script is still trash
2. It still uses questionable techniques
3. It is still locked to my useragent and sec-fetch, update them yourself in the source

Code is mostly proof-of-concept and can only be used from the WebKit console(node-fetch version ETA: never), but hey, it works.
