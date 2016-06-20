(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}})()

var inputs = document.querySelectorAll( '.custom-file-ui' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = "Vybráno několik souborů";
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

$(".counter-up").click(function() {
	value = parseInt($("#counter-input").val());
	if(value <= 1)
		value = 1
	if(isNaN(value)) value = 1
	$("#counter-input").val(value + 1)
});
$(".counter-down").click(function() {
	value = parseInt($("#counter-input").val());
	if(value <= 1) {
		value = 1
	} else {
		value -= 1
	}
	if(isNaN(value)) value = 1
	$("#counter-input").val(value)
});
$(".menu-icon").click(function(ev) {
	$("body").toggleClass("menu-open");
});

