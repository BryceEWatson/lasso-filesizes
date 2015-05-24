# two compressed marko widgets

Compressing two marko widgets to see the incremental cost.

Command:
```bash
lasso --main main.js --inject-into index.html --plugins lasso-marko lasso-less --production
```

## results

Results were run through [Google's Closure Compiler](https://closure-compiler.appspot.com/home)

Single widget: [./static/index-48505bfd.js](./static/index-48505bfd.js): 14.19KB gzipped (54.3kb unzipped)

Two widgets: [./static/index-d19fa67b.js](./static/index-d19fa67b.js): 14.22KB gzipped (55.3kb unzipped)

After gzip + closure compilation the cost for each additional widget is ~300 bytes.

