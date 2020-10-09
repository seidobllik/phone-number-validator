function telephoneCheck(str) {
  let validFormat = /^1{0,1}[-\s]*(\(\d{3}\)|\d{3})[-\s]*\d{3}[-\s]*\d{4}$/;
  console.log(str, validFormat.test(str));
  return validFormat.test(str);
}

telephoneCheck("1 555)555-5555")
telephoneCheck("555-555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("(555)555-5555")
