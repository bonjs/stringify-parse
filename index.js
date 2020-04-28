/**
 * 
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.stringifyParse = root.jsfull = factory();
	}
})(this, function () {

	function hashCode(str) {
		var hash = 0;
		if (str.length == 0) return hash;
		for (i = 0; i < str.length; i++) {
			char = str.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash;
		}
		return hash;
	}

	function stringify(o, replacer, space) {

		var refs = {};
	
		var str = JSON.stringify(o, function (key, value) {
			if(replacer) {
				return replacer.call(this, key, value)
			}
			if(value) {
				if(value.constructor == RegExp || value.constructor == Function) {
					var id = hashCode(value.constructor.prototype.toString.call(value))
					if(!refs.hasOwnProperty(id)) {
						refs[id] = value;
					}
					return "__" + id + "__";
				}
			}
			return value;
		}, space);

		return str.replace(/"__(-?[a-z0-9]+)__"/g, function(x, hash) {
			if(!refs.hasOwnProperty(hash)) {
				return x;
			}
			var v = refs[hash];
			if(v.constructor == RegExp) {
				return v;
			}
			if(v.constructor == Function) {
				return Function.prototype.toString.call(v);
			}
		});
	}

	function parse(str) {
		return eval('(' + str + ')');
	}

	return {
		stringify: stringify,
		parse: parse
	};
});

