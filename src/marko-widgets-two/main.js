var widget = require('./widget_one')
    .render({
        hello: 'hello'
    })
    .appendTo(document.body)
    .getWidget();

    var widget = require('./widget_two')
    .render({
        hello: 'hello'
    })
    .appendTo(document.body)
    .getWidget();