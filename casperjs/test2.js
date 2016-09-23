casper.test.begin('Page content tests', 3, function suite(test) {
    casper.start('index.html', function() {
        test.assertExists('h1.page-title');
        test.assertSelectorHasText('h1.page-title', 'Hello');
        test.assertVisible('footer1');
    }).run(function() {
        test.done();
    });
})