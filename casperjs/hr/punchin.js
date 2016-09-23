var casper = require('casper').create({
     clientScripts: ["js/jquery-1.12.4.min.js"]
});

//First step is to open site
var url = 'http://hr.smartosc.com/login.php';
casper.start().thenOpen(url, function() {
    console.log("Website opened");
    //this.wait(6000);
    //this.capture('AfterOpen.png');
});


//Now we have to populate username and password, and submit the form
casper.then(function(){
    console.log("Login using username and password");
    this.evaluate(function(){
        document.getElementsByName("txtUserName")[0].value="ducdh1";
        document.getElementsByName("txtPassword")[0].value="micheal2107";
        document.getElementsByName("Submit")[0].click();
    });
});

// Click to time tab
casper.then(function(){
    console.log("Click to time tab");
    this.evaluate(function(){
        document.getElementsByTagName("a")[2].click();
    });
});

//Wait to be redirected to the Home page, and then make a screenshot
casper.then(function(){
    console.log("Make a screenshot and save it as AfterLogin.png");
    this.wait(6000);//Wait a bit so page loads (there are a lot of ajax calls and that is why we are waiting 6 seconds)
    this.capture('AfterLogin.png');
});

casper.run();