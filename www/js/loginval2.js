function loginVal2(){
	
	var xmail = $("#mail").val();	
	var xpa2 = $("#pa2").val();
	
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	
		
	if($("#mail").val() == ""){
		mostrarAlert("Introduzca su correo");
		$("#mail").focus();
		return false;
	
	}else if(regex.test($("#mail").val().trim()) == false){
		mostrarAlert("La direccón de correo no es valida");
		$("#mail").focus();
		return false;
		
	}else if($("#pa2").val()== ""){
		mostrarAlert("Escriba su contraseña");
		$("#pa2").focus();
		return false;	
	
	}else{
	
		$.ajax({
			url: 'http://appcoarco.creatactil.com/php/login2.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data: {mail: xmail, pa2: xpa2},
			error: function() {
				mostrarAlert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el código de acceso.");
				$.mobile.changePage("#page0");
			},
			success: function(data, response){

				if (response != 'error'){
		
					$.each(data, function(index,item){
				
						//localStorage.numero = item.numero;
						localStorage.nombre = item.nombre;
						localStorage.apellidos = item.apellidos;
						localStorage.telefono = item.telefono;
						localStorage.correo = item.numero;
						localStorage.validado = item.validado;
						//localStorage.pass = xpa2;
					});
					
					init();
					
				}
			}
		});//fin ajax
	}//fin else
}

function comprobarid(){
	
	var xregid = $("#regId").val();
	var xcorreo = localStorage.correo;
	
	if ((xregid != "") && (xcorreo != "")){
		
		$.ajax({
			url: 'http://appcoarco.creatactil.com/php/comprobarid.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data: {regid: xregid, numero: xcorreo},
		});
	}
}