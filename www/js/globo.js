function globo(){
  
	globoMen();
	//globoCir();
}

function globoMen(){
  
	var conta1 = "0";  
	var xnumero3 = localStorage.numero;
			
	$.ajax({
		type: "GET",
		url: 'http://appcoarco.creatactil.com/php/containicio.php',
		dataType: "text",
		data: {numero: xnumero3},
		success: function(data){
						  
			var carpeta = "imgportada/";
			var conta1 = data;
	
			if(conta1 <= 5 && conta1 >= 0){				
					
				$(".globo").attr("src", carpeta.concat(conta1+".png"));
			
			}else{
				$(".globo").attr("src", carpeta.concat("5mas.png"));
			}
			  
		}
	});

}

function globoCir(){
  
	var conta1 = "0";  
	var xnumero3 = localStorage.numero;
			
	$.ajax({
		type: "GET",
		url: 'http://appcoarco.creatactil.com/php/containicio2.php',
		dataType: "text",
		data: {numero: xnumero3},
		success: function(data){
						  
			var carpeta = "imgportada/";
			var conta1 = data;
	
			if(conta1 <= 5 && conta1 >= 0){				
					
				$(".globo2").attr("src", carpeta.concat(conta1+".png"));
			
			}else{
				$(".globo2").attr("src", carpeta.concat("5mas.png"));
			}
			  
		}
	});

}