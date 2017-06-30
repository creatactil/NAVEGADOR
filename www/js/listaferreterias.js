function listaferreterias() {
	
	$.ajax({
		url: 'http://creatactil.com/coarco/app/php/listaferreterias.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		data: {},
		error: function(xhr, status, error) {
			alert(xhr.responseText);
		},
		success: function(data){
				
			$.mobile.changePage("#page16");
			$('#listaferreterias').empty();
			
			$.each(data, function(index, item) {

				$('#listaferreterias').append(		
				'<li class="ui-first-child" style="border-top-right-radius: 0;border-top-left-radius: 0;">'+
				'<a class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="ponerferreteria(\''+item.codigo+'\',\''+item.denominacion+'\')" >'+
				'<h4>'+item.denominacion+'</h4>'+
				'</a>'+
				'</li>'
				);
			});
		}
	});
}

function ponerferreteria(id, ferreteria) {

	$.mobile.changePage("#page2");
	$("#boxferreteria").val(id);
	$("#btnferreteria").prop('value', ferreteria);
	$("#btnferreteria").button('refresh'); 
}





			