/*
 * jQuery Word Count plug-in 0.1
 *
 * Copyright (c) 2010 - Matthieu Aussaguel
 *
 */

(function($){
 $.fn.wordcount = function(options) {
	
	// if nothing is selected, return nothing; can't chain anyway
	if (!this.length) {
		options && options.debug && window.console && console.warn( "nothing selected, can't count, returning nothing" );
		return;
	}
	
	// check if a wordcount for this input was already created
	if ( $.data(this[0], 'wordcount') ) {
		alert('already');
		return;
	}
	
	$.data(this[0], 'wordcount', true);
	// set varables
	var defaults = {  
	    maxWords: 30,  
	    msg: "words",  
	    erMsg: "words",
		erCl: "error",
		counter: "counter"		
	   };
 	
	options = $.extend(defaults, options);
	
	var $this = $(this), //input
	    $wordcount = $('#' + options.counter),
	    dif;

	//display counter
	$wordcount.text(cMsg());
	$this.bind('click focus keyup blur change pase', function () {
			$wordcount.text(cMsg());
	})
 
	//count the number of words
	function count() ($this.val() != '' ? $.trim($this.val()).split(/[\s\.\?]+/).length: 0)
	
	//create the message
	function cMsg() {
		dif = options.maxWords - count();
		if (dif >= 0) {
			if ($wordcount.hasClass(options.erCl)) $wordcount.removeClass(options.erCl);
			return (options.maxWords - count()) + ' ' + options.msg;
		} else {
			if (!$wordcount.hasClass(options.erCl)) $wordcount.addClass(options.erCl);
			return (options.maxWords - count()) + ' ' + options.erMsg;
		}	
	}
 };
})(jQuery);