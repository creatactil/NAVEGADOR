function favorito(id_aux){
	
	var hid_aux = id_aux;       

	var r=confirm("¿Quiere añadir a Favoritas la circular?")
		
	if (r==true){
	
		$.ajax({
			type: "GET",
			url: "http://appcoarco.creatactil.com/php/favorito.php",
			data: ({id_aux: hid_aux }),
			cache: false,
			dataType: "text"			 
		});
	}
		
	$('#page4 ul').empty();
	$('#lista').listview('refresh', true);
	crearLista();
		
}