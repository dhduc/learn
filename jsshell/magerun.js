#!/usr/bin/env node
var Color = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m"
};

var Helper = {
    toCapitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

var Magerun = {
    param: 0,
    theme: '',
    sections: [],
    folder: '',
    pwd: '',
    initialize: function () {
        var sections = [
            {
                title: 'basic',
                commands: [
                    ['list', 'ls', ''],
                    ['current path', 'pwd', '']
                ]
            },
            {
                title: 'database',
                commands: [
                    ['enable module', 'php bin/magento module:enable', 'module'],
                    ['disable module', 'php bin/magento disable:enable', 'module'],
                    ['setup upgrade schema', 'php bin/magento setup:upgrade', ''],
                    ['compile dependency injection', 'php bin/magento setup:di:compile-multi-tenant', '']
                ]
            },
            {
                title: 'deploy',
                commands: [
                    ['remove generated files in var/ folder', 'rm -rf var/cache var/di var/generation var/page_cache var/tmp var/view_preprocessed', ''],
                    ['remove all pub/static files', 'rm -rf pub/static', ''],
                    ['deploy static content', 'php bin/magento setup:static-content:deploy', 'locale']
                ]
            },
            {
                title: 'grunt',
                commands: [
                    ['remove theme related static files', 'grunt clean:', 'theme'],
                    ['republish theme related static files', 'grunt exec:', 'theme'],
                    ['compile theme less files', 'grunt less:', 'theme']
                ]
            },
            {
                title: 'indexer and cache',
                commands: [
                    ['reindex data', 'php bin/magento indexer:reindex', ''],
                    ['clear cache', 'php bin/magento cache:clean', ''],
                    ['flush cache', 'php bin/magento cache:flush', '']
                ]
            },
            {
                title: 'custom',
                commands: [
                    ['custom command', 'php bin/magento', 'custom command']
                ],
            },
        ];

        this.sections = sections;
    },

    title: function () {
        var version = '2.0';
        var author = 'ducdh';
        console.log(Color.FgGreen, 'Magento 2 Helper ' + version);
        console.log(Color.FgBlue, '@author ' + author);
    },

    run: function () {
        this.initialize();
        this.title();
        this.menu();
        this.setParam();
        
    },

    menu: function () {
        var sections = this.sections;
        var number = 0;
        sections.forEach(function (section) {
            console.log(Color.FgYellow, Helper.toCapitalize(section.title));
            var commands = section.commands;
            commands.forEach(function (command) {
                number += 1;
                console.log(Color.FgGreen, ' ' + number + '.' + command[0]);
            });
        });
        
        // Close program
        console.log(Color.FgYellow, 'Close');
        console.log(Color.FgRed, '0. Exit Program');
    },

    setParam: function () {
        console.log(Color.FgRed, 'You chose: ');
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', function (chunk) {
            var param = chunk.trim();
            try {
                this.param = eval(param); 
            } catch (err) {
                console.log(Color.FgRed, err.message);
            }
            this.execute();
            process.exit();

        }.bind(this));
    },

    execute: function () {
        
        var param = this.param;
        var sections = this.sections;
        var number = 0;
        sections.forEach(function (section) {
            var commands = section.commands;
            commands.forEach(function (command) {
                number += 1;
                if (param == number) {
                    var child_process = require('child_process');
                    var title = command[0];
                    var shell = command[1];
                    console.log(title);
                    console.log(command);
                    var result = child_process.spawn(shell);
                    result.stdout.on('data', function(data) {
                        console.log('Result: \n' + data);
                    });
                    result.on('close', function(code, signal) {
                        console.log(title + ' finished successful');
                    });
                }
            });
        });
    }
};

Magerun.run();

