function registrarsocio() {
         	
	//var xnumero = $("#numero").val().toLowerCase();
	var xnombre = $("#nombre").val().toUpperCase();
	var xapellidos = $("#apellidos").val().toUpperCase();
	var xtelefono = $("#telefono").val();
	var xcorreo = $("#correo").val();
	var xpa1 = $("#pa1").val();
	var xrol = $("#rol").val();
	var xcod_ferreteria = $("#boxferreteria").val();
	var xregid = $("#regId").val();
	
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	
	
	if($("#nombre").val() == ""){
		mostrarAlert("Escriba su nombre");
		$("#nombre").focus();
		return false;
	
	}else if($("#apellidos").val() ==  ""){
		mostrarAlert("Escriba sus apellidos ");
		$("#apellidos").focus();
		return false;	
	
	}else if($("#telefono").val() ==  ""){
		mostrarAlert("Escriba su teléfono móvil ");
		$("#telefono").focus();
		return false;
	
	}else if($("#correo").val() ==  ""){
		mostrarAlert("Escriba su correo electrónico");
		$("#correo").focus();
		return false;
		
	}else if(regex.test($("#correo").val().trim()) == false){
		mostrarAlert("La dirección de correo no es valida");
		$("#correo").focus();
		return false;
	
	}else if($("#pa1").val() ==  ""){
		mostrarAlert("Escriba su contraseña");
		$("#pa1").focus();
		return false;
		
	}else if($("#rol").val() ==  ""){
		mostrarAlert("Elija su Rol");
		$("#rol").focus();
		return false;
	
	}else if($("#boxferreteria").val() ==  ""){
		mostrarAlert("Seleccione su ferretería");
		$("#ferreteria").focus();
		return false;
	
	}else{	
				
		$.ajax({
	    	type: "POST",
	   		url: "http://appcoarco.creatactil.com/php/registrosocio.php",
	   		data: ({nombre: xnombre, apellidos: xapellidos, telefono: xtelefono, correo: xcorreo, pa1: xpa1, rol: xrol, cod_ferreteria: xcod_ferreteria, regid: xregid }),
			cache: false,
			dataType: "text",
			success: onSuccess
	  
		});
		
		function onSuccess(data){
				
			mostrarAlert(data);
		
			if (data=="Datos guardados"){
					
				//localStorage.numero = xnumero;
				
				localStorage.nombre = xnombre;
				localStorage.apellidos = xapellidos;
				localStorage.telefono = xtelefono;
				localStorage.correo = xcorreo;
				//localStorage.pass = xpa1;
				localStorage.rol = xrol;
				localStorage.validado = 0;
				//localStorage.ferreteria = xferreteria;
				
				inicio();
				globo();
			}
		
		}//fin onSuccess
	}
}