var casper = require('casper').create();

casper.on('http.status.404', function(resource) {
    this.echo('wait, this url is 404: ' + resource.url, "ERROR");
});

casper.on('http.status.500', function(resource) {
    this.echo('woops, 500 errors: ' + resource.url, "WARNING");
});

casper.start('http://web/404', function() {
    this.echo('web 404');
})

casper.thenOpen('http://web/500', function() {
    this.echo('web 500');
});

casper.run(function() {
    this.echo('Done').exit();
})