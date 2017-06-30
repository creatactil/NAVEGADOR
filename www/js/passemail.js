function passEmail(){
	
	var xusuario = $("#usuario").val();
	
	if(document.form2.usuario.value.length == ""){
		mostrarAlert("Escriba su correo eléctronico y presione He olvidado mi contraseña");
		document.form2.usuario.focus();
		return false;
		
	}else{
	
		$.ajax({
			url: 'http://appcoarco.creatactil.com/php/passemail.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data: {usuario: xusuario},
			error: function() {
				mostrarAlert("Correo incorrecto");
			},
			success: function(data, response){
	
				if (response == 'success'){
		
					$.each(data, function(i,item){
						
						mostrarAlert("Se le han enviado los datos a su correo electrónico");
					});
				}
			
			},
			
		});	
	}

}

function activarEmail(){
	
	mostrarAlert("Escriba su correo eléctronico y presione Enviar código");
	$('#email').css({'display' : 'block'});
	$('#btn_enviar_codigo').css({'display' : 'block'});
	$("#email").focus();	
}

function passEmail2(){
	
	var xemail = $("#email").val();
	
	if(xemail == ""){
		mostrarAlert("Escriba su correo eléctronico y presione Enviar código");
		$("#email").focus();
		return false;
		
	}else{
	
		$.ajax({
			url: 'http://appcoarco.creatactil.com/php/passemail2.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data: {email: xemail},
			error: function() {
				mostrarAlert("Correo incorrecto");
			},
			success: function(data, response){
	
				if (response == 'success'){
		
					$.each(data, function(i,item){
						
						mostrarAlert("Se le han enviado los datos a su correo electrónico");
					});
				}
			}
		});	
	}
}