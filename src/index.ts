#!/usr/bin/env node

import owo from '@zuzak/owo';

export function doOwo(string: String) {
  return owo.translate(string);
}

const toOwo = process.argv.slice(2)[0];

if (toOwo) {
  console.log(doOwo(toOwo));
  process.exit(0);
}
console.log('Nothing to OwO.');
