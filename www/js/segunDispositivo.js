function quitarCompartirapp(){
	
    var dispositivo = navigator.userAgent.toLowerCase();
	
	// variable.search(/hola|mundo/) nos devuelve -1 si en el texto contenido en variable no encuentra la secuencia de caracteres hola, ni
	// mundo. Si la encuentra, entonces nos devuelve la posición en la que empieza la primera secuencia de caracteres coincidentes.
	// para variable = "hola mundo" nos devolvería 0 y para variable = "El mundo, hola." nos devolvería 3.
	
	if( dispositivo.search(/iphone|ipod|ipad|android/) > -1 ){
		//No hago nada (se muestra el boton de compartir app)
	}else{
		// Sólo en el navegador de PC (en el del móvil no) quitamos compartirapp
		$('#compartirapp').css({'display' : 'none'});
	}

}

function esPC(){
	
    var dispositivo = navigator.userAgent.toLowerCase();

	if( dispositivo.search(/iphone|ipod|ipad|android/) > -1 ){
		return false
	}else{
		return true
	}
}

function esIOS(){
	
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	return iOS;
}

function portada(){
	
    var dispositivo = navigator.userAgent.toLowerCase();
	
	if( dispositivo.search(/iphone|ipod|ipad|android/) > -1 ){
		
		$("#portada").attr("src", "imgportada/portada1.png");
		$("#portada").hide();
    	$("#portada").fadeIn(5000);
		
	}else{
		
		$("#portada").attr("src", "imgportada/portadaPC.png");
		$('#portada').css({'width': '70%',
						   'max-width': '300px',
						   'position': 'relative',
						   'margin': 'auto'});
		$("#portada").hide();
    	$("#portada").fadeIn(5000);
	}

}

function isPhoneGap(){

	var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
	if ( app ) {
		// PhoneGap application
		return true
	} else {
		// Web page
		return false
	}

}

function mostrarAlert(mensaje){

	if(isPhoneGap()){
		navigator.notification.alert(mensaje);
	}else{
		alert(mensaje);
	}
}

function alConfirmar(button) { 
	if(button==1){ 
    	alert(true);
    } else {
		alert(false);
	}
}

function mostrarConfirm(mensaje){

	if(isPhoneGap()){
		navigator.notification.confirm(mensaje,alConfirmar,"Confirmación",'Aceptar,Cancelar');
	}else{
		return confirm(mensaje);
	}
}

function centrarLogin(){
	
	var altura_ventana = $(window).height();
	$('#login').css({'margin-top': (altura_ventana-450)/2});
	$('#login').css({'display': 'block'});
}

