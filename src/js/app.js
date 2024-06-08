import { getBuffer } from "./ArrayBufferConverter";
import ArrayBufferConverter from "./ArrayBufferConverter";

console.log('worked');

let converter = new ArrayBufferConverter();
let buffer = new getBuffer();

converter.load(buffer);
console.log(converter.toString());
