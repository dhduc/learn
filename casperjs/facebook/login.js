var casper = require('casper').create();

//First step is to open Facebook
var url = 'https://www.facebook.com/';
casper.start().thenOpen(url, function() {
    console.log("Facebook website opened");
});


//Now we have to populate username and password, and submit the form
casper.then(function(){
    console.log("Login using username and password");
    this.evaluate(function(){
        document.getElementById("email").value="huuduc.uneti@gmail.com";
        document.getElementById("pass").value="overpasklwe2f";
        document.getElementById("loginbutton").children[0].click();
    });
});

//Wait to be redirected to the Home page, and then make a screenshot
casper.then(function(){
    console.log("Make a screenshot and save it as AfterLogin.png");
    this.wait(6000);//Wait a bit so page loads (there are a lot of ajax calls and that is why we are waiting 6 seconds)
    this.capture('AfterLogin.png');
});

//Get all images greater than 100x100 pixels
casper.then(function(){
    var images = this.evaluate(function(){
        var facebookImages = document.getElementsByTagName('img'); 
        var allSrc = [];
        for(var i = 0; i < facebookImages.length; i++) {
            if(facebookImages[i].height >= 100 && facebookImages[i].width >= 100)
                allSrc.push(facebookImages[i].src);
        }
        return JSON.stringify(allSrc);
    });
    console.log(images);
})

casper.run();