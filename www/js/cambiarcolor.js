function cambiarcolor(){
	
	var bgcolor = $("#bg-color").val();
	localStorage.bgcolor = bgcolor;
	
	var coloroscuro = oscurecerColor(bgcolor, 30);
	localStorage.coloroscuro = coloroscuro;
	
	$('.ui-overlay-a').css({'background-color' : bgcolor});
							
	$('.ui-page-theme-a').css({'background-color' : bgcolor});

	$('.ui-page-theme-a .ui-panel-wrapper').css({'background-color' : bgcolor});

	$('#overlayPanel').css({'background-color' : bgcolor});
																					
}

function comprobarcolor(){

	if (localStorage.bgcolor) {
		
		var bgcolor = localStorage.bgcolor;
		var coloroscuro = localStorage.coloroscuro;
		
		$('.ui-overlay-a').css({'background-color' : bgcolor});
								
		$('.ui-page-theme-a').css({'background-color' : bgcolor});

		$('.ui-page-theme-a .ui-panel-wrapper').css({'background-color' : bgcolor});
								
		$('#overlayPanel').css({'background-color' : bgcolor});																

	}	

}

function resetcolor(){
	
	localStorage.removeItem("bgcolor");
	localStorage.removeItem("coloroscuro");
	
	var bgcolor = "#e0e0e0";

	$('.ui-overlay-a').css({'background-color' : bgcolor});
							
	$('.ui-page-theme-a').css({'background-color' : bgcolor});

	$('.ui-page-theme-a .ui-panel-wrapper').css({'background-color' : bgcolor});

	$('#overlayPanel').css({'background-color' : bgcolor});
	
}


function oscurecerColor(color, cant){
	//voy a extraer las tres partes del color
	var rojo = color.substr(1,2);
	var verd = color.substr(3,2);
	var azul = color.substr(5,2);
	
	//voy a convertir a enteros los string, que tengo en hexadecimal
	var introjo = parseInt(rojo,16);
	var intverd = parseInt(verd,16);
	var intazul = parseInt(azul,16);
	
	//ahora verifico que no quede como negativo y resto
	if (introjo-cant>=0) introjo = introjo-cant;
	if (intverd-cant>=0) intverd = intverd-cant;
	if (intazul-cant>=0) intazul = intazul-cant;
	
	//voy a convertir a hexadecimal, lo que tengo en enteros
	rojo = introjo.toString(16);
	verd = intverd.toString(16);
	azul = intazul.toString(16);
	
	//voy a validar que los string hexadecimales tengan dos caracteres
	if (rojo.length<2) rojo = "0"+rojo;
	if (verd.length<2) verd = "0"+verd;
	if (azul.length<2) azul = "0"+azul;
	
	//voy a construir el color hexadecimal
	var oscuridad = "#"+rojo+verd+azul;
	
	//la función devuelve el valor del color hexadecimal resultante
	return oscuridad;
}

