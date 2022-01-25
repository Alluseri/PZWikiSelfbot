# PZWikiSelfbot
A small selfbot script for https://pzwiki.net

## Usage
```js
fullEditCycle(/* page name, e.g. User:Alluseri/Testing or Metal_Crate */, /* full article body */, /* summary, leave "" for empty summary */, /* delay for legitimateness */)
```
Best docs ever.
### Example usage
```js
(async()=>{await fullEditCycle("VeryCoolPZWikiPage","This is a cool contribution!","This is a cool summary!",4444)}
```
## Cry
1. This script is trash
2. It uses questionable techniques
3. Locked to my useragent and sec-fetch, because do I look like I care???
4. Yes let's parse html when we can invoke directly

Code is mostly proof-of-concept, written in about 2 hours. Not really to be used, unless you want to pull some spam attacks(absolutely despised by me).
