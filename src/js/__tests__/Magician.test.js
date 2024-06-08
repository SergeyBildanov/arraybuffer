import { getBuffer } from "../ArrayBufferConverter";
import ArrayBufferConverter from "../ArrayBufferConverter";

test("ArrayBufferConverter create", ()=>{
  let converter = new ArrayBufferConverter();
  expect('load' in converter ).toEqual(true);
  expect('toString' in converter).toEqual(true);
})
test("ArrayBufferConverter load", ()=>{
  let converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect('buffer' in converter).toEqual(true);
})
test("ArrayBufferConverter toString", ()=>{
  let converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})

