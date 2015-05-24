# single compressed marko widget

Compressing a single marko widget to find the initial cost.

Command:
```bash
lasso --main main.js --inject-into index.html --plugins lasso-marko lasso-less --production
```

## results

Results were compiled with [Google's closure compiler](https://closure-compiler.appspot.com/home)

[./static/index-48505bfd.js](./static/index-48505bfd.js): 14.19KB gzipped (54.3kb unzipped)

Initial cost of using marko widgets: ~14kb
