function init(arg){
	
	//centrarLogin();
	var validado = localStorage.validado;
	var xcorreo = localStorage.correo;
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var xcorreo = localStorage.correo;
	
	if ((typeof xcorreo == 'undefined') || (xcorreo == "")){
		
		$.mobile.changePage("#page0", {transition: "slide"},true,true);
		
		$("#usuario").val(localStorage.correo);
		$("#pa2").focus();	
			
	}else{
		
		var argumento=arg;	
		$.mobile.changePage("#page1", {transition: "slide", reverse: argumento });		
		comprobarcolor();
		
		sumavisita();
		globo();
		onLoad();
		comprobarid();
		listanoticia();
		
	}
	
	portada();
	
	
	//Comprobamos si estamos validado en la base de datos
	$.ajax({
		type: "GET",
		url: 'http://appcoarco.creatactil.com/php/validado.php',
		dataType: "text",
		data: {correo: xcorreo},
		success: function(data){
						  
			
			localStorage.validado = data;
	
		
		}
	});
	

	
	}
	