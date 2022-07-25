#!/usr/bin/env node

const fs = require('fs')
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv
const filename = `${__dirname}/commands/${argv._[0]}.js`;

// check if exists file name
if (fs.existsSync(filename)) require(filename)