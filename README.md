# phone-number-validator
Simple regex to validate the format of a phone number. Returns true if valid, false if not valid.

The following are examples of valid formats for US numbers:

* 555-555-5555
* (555)555-5555
* (555) 555-5555
* 555 555 5555
* 5555555555
* 1 555 555 5555

## Explained:
```javascript
function telephoneCheck(str) {
  let validFormat = /^1{0,1}[-\s]{0,1}(\(\d{3}\)|\d{3})[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/;
  console.log(str, validFormat.test(str));
  return validFormat.test(str);
}
```

### `^1{0,1}[-\s]{0,1}`
This chunk of the regex starts at the beginning of the string, and is looking for zero or one number 1, followed by zero or one instances of a dash or space symbol.

### `(\(\d{3}\)|\d{3})`
This chunk is looking for three numbers surrounded by parenthesis, or three numbers alone.

### `[-\s]{0,1}\d{3}`
This chunk is looking for zero or one instance of a dash or space symbol, followed by three numbers.

### `[-\s]{0,1}\d{4}$`
This chunk of the regex is looking for zero or one instance of a dash or space symbol, followed by four numbers at the end of the string.

----
Created as a submission for the [freeCodeCamp.org Telephone Number Validator Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator) toward the JavaScript Algorithms and Data Structures certificate.
