# compressed jquery file size

jQuery is compressed as the only JS resource on the page.

Command:
```bash
lasso --main main.js --inject-into index.html --plugins lasso-less --production
```

## results

Results were compiled with [Google's Closure Compiler](https://closure-compiler.appspot.com/home)

[./static/index-f595d703.js](./static/index-f595d703.js): 29.89KB gzipped (96.4kb unzipped)
