casper.test.begin('the heading exists', 1, function suite(test) {
    casper.start('index.html', function() {
        test.assertExists('h1.page-title');
    }).run(function() {
        test.done();
    });
});