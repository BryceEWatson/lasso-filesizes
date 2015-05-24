# two compressed marko templates

Compressing two marko templates to judge the overhead of each template.

Command:
```bash
lasso --main main.js --inject-into index.html --plugins lasso-marko lasso-less --production
```

## results

Results were compiled with [Google's Closure Compiler](https://closure-compiler.appspot.com/home)

- Single template: [./static/index-932e1e1c.js](../marko-single/static/index-932e1e1c.js): 5.51KB gzipped (20.3kb unzipped)
- Two templates: [./static/index-d4a38759.js](../marko-single/static/index-d4a38759.js): 5.57KB gzipped
- Each marko template adds ~60bytes of overhead.
