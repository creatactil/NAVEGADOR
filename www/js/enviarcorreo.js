function enviarcorreo() {


               	
				//var xnumero = localStorage.numero;
				var xnombre = localStorage.nombre;
    		  	var xapellidos = localStorage.apellidos;
				var xtelefono = localStorage.telefono;
				var xcorreo = localStorage.correo;
				var xcomentario = $("#fc_mensaje").val();
				
				
		
		if(xcomentario == ""){
		alert("Escriba el mensaje");
		$("#fc_mensaje").focus();
		return false;
		
		}else		
			
						
		   $.ajax({
           type: "POST",
           url: "http://appcoarco.creatactil.com/php/enviarcorreo.php",
           data: ({nombre: xnombre, apellidos: xapellidos, telefono: xtelefono, correo: xcorreo, comentario: xcomentario}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
              		
			
			
				if (data=="OK"){
				alert("Correo enviado");
				
				$("#comentario").val("");
				inicio();
				
				}else{
				alert("ERROR Compruebe su conexión");	
					
				}
			
			
            }
			
		
		
		
  }