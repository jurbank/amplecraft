$('#contact-toggle').on('click', function(e){
	e.preventDefault();
	$(this).parent().toggleClass('active');
});