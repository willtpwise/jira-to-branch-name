#!/usr/bin/env node

const { jiraToBranchName } = require("../index");

const input = process.argv.slice(2, process.argv.length).join();

process.stdout.write(jiraToBranchName(input));
process.exit(0);
