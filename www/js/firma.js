function firma(){
	
	var xcorreo = localStorage.correo;
	var xregistro = $("#registrofirma").text();
			
	$.ajax({
		url: 'http://appcoarco.creatactil.com/php/firma.php',
		type: 'POST',
		data: {numero: xcorreo, registro: xregistro},
		cache: false,
		dataType: "text",
		success: onSuccess

	});
		
	function onSuccess(data){
             
		mostrarAlert(data);
		globo();
		$('.firmaraqui').css({'display' : 'none'});
		$('.circularfirmada').css({'display' : 'block'});
		$('.circularfirmada').text('Circular Firmada');
	}

}
	
