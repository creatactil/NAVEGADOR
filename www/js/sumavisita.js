function sumavisita() {
	
	$.ajax({
		type: "GET",
		url: 'http://appcoarco.creatactil.com/php/pruebacuenta.php',
		dataType: "text",
		data: {},
		success: dato
	});
	
		
	function dato(data){
				
	}

} 
	