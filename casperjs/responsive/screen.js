var casper = require("casper").create(),
    viewportSizes = [
    [320,1000],
    [320,1000],
    [360,1000],
    [600,1024],
    [768,1024],
    [800,1280],
    [980,1280],
    [1280,1000],
    [1280,1000],
    [1440,1000],
    [1920,1000]
],
    url = casper.cli.args[0],
    //saveDir = url.replace(/[^a-zA-Z0-9]/gi, '-').replace(/^https?-+/, '');
    saveDir = casper.cli.args[1];
 
casper.start();
 
casper.each(viewportSizes, function(self, viewportSize, i) {
 
    // set two vars for the viewport height and width as we loop through each item in the viewport array
    var width = viewportSize[0],
        height = viewportSize[1];
 
    //give some time for the page to load
    casper.wait(5000, function() {
 
        //set the viewport to the desired height and width
        this.viewport(width, height);
 
        casper.thenOpen(url, function() {
            this.echo('Opening at ' + width);
            //this.mouse.move(".header-cart");
 
            //Set up two vars, one for the fullpage save, one for the actual viewport save
            var FPfilename = saveDir + '/fullpage-' + width + ".png";
            var ACfilename = saveDir + '/' + width + '-' + height + ".png";
 
            //Capture selector captures the whole body
            this.captureSelector(FPfilename, 'body');
 
            //capture snaps a defined selection of the page
            this.capture(ACfilename,{top: 0,left: 0,width: width, height: height});
            this.echo('snapshot taken');
        });
    });
});
 
casper.run(function() {
    this.echo('Finished captures for ' + url).exit();
});