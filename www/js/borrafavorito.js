function borrafavorito(id_aux){
	
	var zid_aux = id_aux;

	var r=confirm("¿Quiere quitar ésta circular de circulares favoritas?")
		
	if (r==true){
	
		$.ajax({
			type: "GET",
			url: "http://appcoarco.creatactil.com/php/borrafavorito.php",
			data: ({id_aux: zid_aux }),
			cache: false,
			dataType: "text"             
		});
	}
		
		
	$('#page14 ul').empty();
	$('#listafav').empty();
	
	$('#listafav').listview('refresh', true);
	listafavorito();
}