
var {stringify} = require("../");
var assert  = require("assert");

describe('test index.js', function() {

	let o = {
		name: 'stringify-parse',
		method: function() {
			console.log('this is a function');
		},
		reg: /\w+/
	};

	let expactOut = `{"name":"stringify-parse","method":function() {
		console.log('this is a function');
	},"reg":/\w+/}`

	var output = stringify(o);
	console.log(output)
    it('output should equals ' + expactOut, function() {
       if(!output == expactOut){
         throw new Error("the ouput is not what we expacted !");
       }
    });
});

