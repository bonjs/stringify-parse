
# js-full
### A tool like JSON.stringify and JSON.parse but can convert the type Function and RegExp in the js object.

.eg
~~~javascript

let o = {
  name: 'js-full',
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

This is not what we want. Now we can use the tool js-full

~~~javascript
const jsfull = require('js-full');
console.log(jsfull(o));
~~~

output:
~~~javascript
{"name":"demo","method":function() {
    console.log('this is a function');
  },"reg":/\w+/
~~~

Then we can use the method jsfull.parse to convert the json string into object.
~~~javascript
let str = `{"name":"demo","method":function() {
    console.log('this is a function');
  },"reg":/\w+/
 `;
console.log(jsfull.parse(str));
~~~
