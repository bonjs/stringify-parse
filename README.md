
# stringify-parse [![Build Status](https://travis-ci.org/bonjs/stringify-parse.svg?branch=master)](https://travis-ci.org/bonjs/stringify-parse) [![](https://img.shields.io/npm/v/stringify-parse.svg)](https://www.npmjs.com/package/stringify-parse) [![](https://img.shields.io/npm/l/stringify-parse.svg)](https://img.shields.io/npm/l/stringify-parse.svg)
#### A tool like JSON.stringify and JSON.parse but could convert the type Function and RegExp in the js object.

Install
~~~bash
npm install stringify-parse
~~~

eg.
~~~javascript
let o = {
  name: 'stringify-parse',
  method: function() {
    console.log('this is a function');
  },
  reg: /\w+/
}
~~~

Now, I want to convert the object into string, if we use JSON.stringify, it will lost the property method and reg

~~~javascript
{"name":"demo","reg":{}}
~~~

This is not what we want. Now we can use the tool stringify-parse

~~~javascript
const stringifyParse = require('stringify-parse');
console.log(stringifyParse(o));
~~~

output:
~~~javascript
{"name":"demo","method":function() {
    console.log('this is a function');
  },"reg":/\w+/
~~~

Then we can use the method stringifyParse.parse to convert the json string into object.
~~~javascript
let str = `{"name":"demo","method":function() {
    console.log('this is a function');
  },"reg":/\w+/
 `;
console.log(stringifyParse.parse(str));
~~~

And you can use the window variable stringifyParse or jsfull like this:
~~~
<script src="stringify-parse.js"></script>

<script>
  let str = `{"name":"demo","method":function() {
    console.log('this is a function');
  },"reg":/\w+/
 `;
console.log(stringifyParse.parse(str));
console.log(jsfull.parse(str));
</script>
~~~
