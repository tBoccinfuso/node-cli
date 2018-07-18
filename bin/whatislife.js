#! /usr/bin/env node
var shell = require("shelljs");

var answers = [
    'A joke',
    '42',
    'Ball... ball is life.',
    'Games, Gunz & Glory'
];

shell.echo([Math.floor(Math.random()*answers.length)]);