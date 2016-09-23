var casper = require('casper').create();

// casper.echo("Casper CLI passed args:");
// require("utils").dump(casper.cli.args);

// casper.echo("Casper CLI passed options:");
// require("utils").dump(casper.cli.options);

// casper.echo(casper.cli.has(0));
// casper.echo(casper.cli.get(0));
// casper.echo(casper.cli.has('foo'));
// casper.echo(casper.cli.get('foo'));

casper.cli.drop("cli");
casper.cli.drop("casper-path");

if (casper.cli.args.length === 0 && Object.keys(casper.cli.options).length === 0) {
    casper.echo("No arg nor option passed").exit();
}


casper.exit();