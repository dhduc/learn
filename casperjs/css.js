var casper = require('casper').create();
casper.options.waitTimeout = 1;

casper.start('index.html', function() {
    if (this.exists("h1.page-title")) {
        this.echo('the heading exists', 'ERROR');
    }
})

casper.run();