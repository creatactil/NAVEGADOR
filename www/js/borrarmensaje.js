function borrarMensaje(id_aux){
	
	var zid_aux = id_aux;       

	var r=confirm("¿Quiere borrar la circular?")
		
	if (r==true){
	
		$.ajax({
			type: "GET",
			url: "http://appcoarco.creatactil.com/php/borrarmensaje.php",
			data: ({id_aux: zid_aux }),
			cache: false,
			dataType: "text"          
		});
	}

	$('#page4 ul').empty();
	$('#lista').empty();
	$('#lista1').empty();
	
	$('#lista').listview('refresh', true);
	$('#lista1').listview('refresh', true);
	crearLista();	
}

function borrarCurso(id_aux){
	
	var zid_aux = id_aux;       

	var r=confirm("¿Quiere borrar el mensaje?")
		
	if (r==true){
	
		$.ajax({
			type: "GET",
			url: "http://appcoarco.creatactil.com/php/borrarmensaje.php",
			data: ({id_aux: zid_aux }),
			cache: false,
			dataType: "text"          
		});
	}

	$('#page22 ul').empty();
	$('#listacur').empty();	
	$('#listacur').listview('refresh', true);
	//listacurso();	
}