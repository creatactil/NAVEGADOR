function listaEventos(date) {
				
    
	$('#listadeeventos').empty();
	var xfechaevento = date;		
	var xcodigo = "F38004164";
	
	
	if (validado != 1){
		xcodigo = "";
		$.mobile.changePage("#page1", {transition: "slide", reverse: argumento });
	}
	
	
					
	$.ajax({
	url: 'http://appcoarco.creatactil.com/php/listaeventos.php',
	dataType: 'jsonp',
	jsonp: 'jsoncallback',
	timeout: 5000,
	data: {fecha: xfechaevento, codigo: xcodigo},
	success: function(data){
		
		if(data == "No"){
			
			$('#listadeeventos').append("No hay eventos para ésta fecha.");								
							
		}else{			
	 
			$.each(data, function(index, item) {

				$('#idev_'+index).remove();

				var verde = "#000000";
				var tema = "#000000";
				
				$('#listadeeventos').append(			
			
       	'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" style="height: 58px; margin-left:2%; "><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="cambiarPaginaEvento(idev_' + index + ')" style="height: 60px; padding:0; background-color:#ffffff; margin-right:2%; padding-left: .35em;">'+
		'<h2 style="left:60px; margin-top:10px; margin-right: inherit; font-size: 0.8em;  color:'+tema+'" >'+item.titulo+'</h2>'+
		'<p style="left:60px; padding:0; color:'+verde+'; font-size: 0.8em ; margin-top:0px;">'+'Date: '+item.fecha+' ('+item.hora+')'+
		'</li>'
	
				);
		
		var altura_contenido = $(window).height();
		
		if (localStorage.coloroscuro) { var coloroscuro = localStorage.coloroscuro; }else{ var coloroscuro = "#cacaca"; }
				
		if(item.firma != ""){
			var ver_firma = "block";
		}else{
			var ver_firma = "none";
		}			
			
		/*Pagina dinamica*/
		content = 
		'<div data-role="page"  id="idev_' + index + '" data-url="idev_' + index + '" data-theme="a">' +
		
		'<div data-role="header" data-theme="a">' +
		'<a href="#page17" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" data-rel="back">Atrás</a>'+
		'<h1><img src="recursos/logo.svg" width="20" height="20" style="margin: -4px;margin-right: 5px;">EVENTO</h1>'+
		'</div>'+
		
		'<div data-role="content" id="contenido" style="padding: 0.5em; min-height: '+altura_contenido+'px;">' +

        '<div data-role="fieldcontain" class="result" style="background-color: white; border: 2px solid '+coloroscuro+'; padding: 7px;">' +
        '<p style="margin:0; padding:0; color:#000000; font-size: 0.9em "><strong>Evento: </strong>'+item.titulo+'<br>'+
        '<strong>Fecha: </strong>'+item.fecha+'<br>'+
		'<strong>Hora: </strong>'+item.hora+'<br>'+
		'</p>'+
                    
		'<p>'+ item.texto + '</p>' +
						
		'<center>'+
		'<a style="width: 50%;min-width:11em; display: '+ver_firma+';" data-role="button" data-icon="check" data-theme="b" onClick="confirmar(\''+item.id+'\')">'+item.firma+'</a>'+
		'</center>'+
		
        '</div>' +						  

		'</div>';
		
		
		var id_evento="#idev_"+ index;
		$(document).on("pagecreate",id_evento,function(){
			$(id_evento).off();
			$(id_evento).on("swiperight",function(){
				$.mobile.changePage("#page17", {transition: "slide", reverse: true });
			});
		});		
	   
			
		$('body').append(content).trigger('refresh');
		$(index).page();
			
			
		});
		
		}
			$("#carga23").hide(); 
		}
		
		});
			
		globo();
			
} 
	 
	 
function cambiarPaginaEvento(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		comprobarcolor();
}
	
function confirmar(id){
	
	var xid = id.toString();
	
	var almacen = localStorage.getItem(xid);
	
	if (almacen == "1"){
		
		mostrarAlert("Este Evento ya ha sido confirmado anteriormente"); 
	}else{
		
		$.ajax({
			url: 'http://appcoarco.creatactil.com/php/sumasistencia.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			data: {id: xid},
			success: function(){}
			
		});
		
		mostrarAlert("Gracias por su participación"); 
		localStorage.setItem(xid, 1);
	}
	
}

function listaEventosMes() {
	
	$('#listadeeventos').empty();
	//var xfechaevento = date;		
	var xcodigo = "F38004164";
	var validado = localStorage.validado;
	
	if (validado != 1){
	var	xcodigo = 0;
		
	}
					
	$.ajax({
	url: 'http://appcoarco.creatactil.com/php/listaeventosmes.php',
	dataType: 'jsonp',
	jsonp: 'jsoncallback',
	timeout: 5000,
	data: {codigo: xcodigo},
	success: function(data){
		
		if(data == "No"){
			
			$('#listadeeventos').append("No hay eventos en éste mes.");								
							
		}else{			
	 
			$.each(data, function(index, item) {

				$('#idev_'+index).remove();

				var verde = "#000000";
				var tema = "#000000";
				
				$('#listadeeventos').append(			
			
       	'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" style="height: 58px; margin-left:2%; "><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="cambiarPaginaEvento(idev_' + index + ')" style="height: 60px; padding:0; background-color:#ffffff; margin-right:2%; padding-left: .35em;">'+
		'<h2 style="left:60px; margin-top:10px; margin-right: inherit; font-size: 0.8em;  color:'+tema+'" >'+item.titulo+'</h2>'+
		'<p style="left:60px; padding:0; color:'+verde+'; font-size: 0.8em ; margin-top:0px;">'+'Fecha: '+item.fecha2+' ('+item.hora+')'+
		'</li>'
	
				);
		
				var altura_contenido = $(window).height();
		
				if (localStorage.coloroscuro) { var coloroscuro = localStorage.coloroscuro; }else{ var coloroscuro = "#cacaca"; }
			
		if(item.firma != ""){
			var ver_firma = "block";
		}else{
			var ver_firma = "none";
		}		
		
		/*Pagina dinamica*/
		content = 
		'<div data-role="page"  id="idev_' + index + '" data-url="idev_' + index + '" data-theme="a">' +
		
		'<div data-role="header" data-theme="a">' +
		'<a href="#page17" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" data-rel="back">Atrás</a>'+
		'<h1>EVENTO</h1>'+
		'</div>'+
		
		'<div data-role="content" id="contenido" style="padding: 0.5em; min-height: '+altura_contenido+'px;">' +

        '<div data-role="fieldcontain" class="result" style="background-color: white; border: 2px solid '+coloroscuro+'; padding: 7px;">' +
        '<p style="margin:0; padding:0; color:#000000; font-size: 0.9em "><strong>Evento: </strong>'+item.titulo+'<br>'+
        '<strong>Fecha: </strong>'+item.fecha2+'<br>'+
		'<strong>Hora: </strong>'+item.hora+'<br>'+
		'</p>'+
                    
		'<p>'+ item.texto + '</p>' +
						
		'<center>'+
		'<a style="width: 50%;min-width:11em;display: '+ver_firma+';" data-role="button" data-icon="check" data-theme="b" onClick="confirmar(\''+item.id+'\')">'+item.firma+'</a>'+
		'</center>'+
		
        '</div>' +						  

		'</div>';
		
		
		var id_evento="#idev_"+ index;
		$(document).on("pagecreate",id_evento,function(){
			$(id_evento).off();
			$(id_evento).on("swiperight",function(){
				$.mobile.changePage("#page17", {transition: "slide", reverse: true });
			});
		});		
	   
			
		$('body').append(content).trigger('refresh');
		$(index).page();
			
			
		});
		
		}
			$("#carga23").hide(); 
		}
		
		});
			
		globo();
			
} 