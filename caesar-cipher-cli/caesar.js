function caesar(text, shift) {
  let res = '';

  for (let i = 0; i < text.length; i++) {
    let delta = 0;
    let sigma = shift < 0 ? 26 * (Math.abs(shift - shift % 26) / 26 + 1) : 0;
    sigma = Math.abs(sigma);

    if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91)
      delta = 65;
    else if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123)
      delta = 97;
    else {
      res += text[i];
      continue;
    }

    res += String.fromCharCode((text.charCodeAt(i) - delta + sigma + shift) % 26 + delta);
  }
  return res;
}

module.exports = {
  encode: (text, shift) => caesar(text, shift),
  decode: (text, shift) => caesar(text, -shift)
}
