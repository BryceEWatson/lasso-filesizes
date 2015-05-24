var widget = require('./widget_one')
    .render({
        hello: 'hello'
    })
    .appendTo(document.body)
    .getWidget();