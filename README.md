# RLE Compression for node and browser

## Intall via NPM

Install rle-compression using npm , `npm install rle-compression`

## API
All available functions are :

- encode() : encoding method that walks the input string character by character.
- encode_re() : encoding method that uses a regular expression to grab the character runs, uses `forEach` Method
- decode() : decoding method that uses forEach method to package array of arrays to the original string.

## Usage and Example

``` js

var RLE = require("rle-compression");

var originalMessage = "aaaaabbbbccccccccccccc";
console.log(originalMessage);

// using encode method of RLE compression
var encoded = RLE.encode(originalMessage);
// capture the encoded data and log on console
console.log(encoded);

// use the encoded data to get original message
var decoded = RLE.decode(encoded);
// capture the decoded data and log on console
console.log(decoded);

console.log(decoded == originalMessage);


```

## License

Unless stated elsewhere, file headers or otherwise, the license as stated in the LICENSE file.
