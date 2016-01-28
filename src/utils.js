export function debounce(func, wait, immediate) {
    let timeout = 0;           

    return function() {
        const context = this, 
            args = arguments;

        const callNow = immediate && !timeout;

        clearTimeout(timeout);   

        timeout = setTimeout(function(){
             timeout = null;

             if (!immediate) {
               func.apply(context, args);
             }
        }, wait);

        if (callNow) func.apply(context, args);  
     }; 
}

export function once(fn, context) { 
	var result;

	return function() { 
		if (fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}