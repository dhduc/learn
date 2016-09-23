casper.start('http://bookstore.local/')
    .then(function() {
        phantomcss.screenshot('html', 'site');
    })
;    