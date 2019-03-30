module.exports = {
    encode: function encode(input) {
        var encoding = [];
        var prev, count, i;
        for (count = 1, prev = input[0], i = 1; i < input.length; i++) {
            if (input[i] != prev) {
                encoding.push([count, prev]);
                count = 1;
                prev = input[i];
            }
            else
                count++;
        }
        encoding.push([count, prev]);
        return encoding;
    },
    encode_re: function encode_re(input) {
        var encoding = [];
        input.match(/(.)\1*/g).forEach(function (substr) { encoding.push([substr.length, substr[0]]) });
        return encoding;
    },
    decode: function decode(encoded) {
        var output = "";
        encoded.forEach(function (pair) { output += new Array(1 + pair[0]).join(pair[1]) })
        return output;
    }
}
