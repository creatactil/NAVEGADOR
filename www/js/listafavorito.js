function listafavorito(arg) {
				
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }
 
	var xcorreo = localStorage.correo;
	var validado = localStorage.validado;
	
	if (validado != 1){
		alert("ERROR: Usted no ha sido validado. Contacte con COARCO");
		xcorreo = "";
		
	}
	
	
	var argumento=arg;
	$.mobile.changePage("#page14", {transition: "slide", reverse: argumento });
	comprobarcolor();

	$('#page14 ul').empty();
	$("#carga14").show();
		                 
						
	$.ajax({
		url: 'http://appcoarco.creatactil.com/php/listafavorito.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		data: {numero: xcorreo},
		success: function(data){			
	   	   
	    $.each(data, function(index, item) {
			
			$('#id'+index).remove();
			
			if(item.estado==0){
				var tema = "#000000";
				var bordeIzq = "border-left: 2px solid #294e85;";
				var colorFondo = "";
				var listo2 = "#listafav";
			}else{	
				var tema = "#808080";
				var bordeIzq = "";
				var colorFondo = "background-color: #ffffff;";
				var listo2 = "#listafav";
			}
			
			if(item.tipo == 'M'){
				
				var tipo = "Información Corporativa";
				var logo = "inf_corporativa.svg";
			}else{
					
				var tipo = "Información Comercial";
				var logo = "inf_comercial.svg";
			}								
									
		if (localStorage.bgcolor) { var bgcolor = localStorage.bgcolor; }else{ var bgcolor = "#e0e0e0"; }		
			
		$(listo2).append(
       	'<li class="ui-li-has-alt ui-li-has-thumb" style="border: 2px solid '+bgcolor+'; margin-bottom: -2px;"><a href="#" class="ui-btn" onclick="cambiarPaginaFavorito(id' + index + '), contador(\''+item.registro+'\');" style="height: 55px; padding:0; border: none; '+colorFondo+'" >'+
		'<img src="recursos/'+logo+'" class="ui-li-thumb" style="margin-top: 5px; margin-left: 5px; height: 48px">'+
			
		'<p style="margin-left:65px; margin-top:5px; margin-bottom: 0px; margin-right: 3px; font-weight: bold; color:'+tema+'" >'+item.titulo+'</p>'+
		'<p style="margin-left:65px; margin-top:0px; padding:0; color:#294e85; font-size:0.7em">'+
    	//'Centro:  '+item.nombre_centro+'<br>'+
		''+tipo+'<br>'+
    	'Fecha: '+item.fecha+'</p>'+
		
		'<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-b" onClick="borrafavorito(\''+item.id_aux+'\' )" style="border: none; border-left:2px solid '+bgcolor+'; '+colorFondo+'">'+
		'</a>'+
		'</li>'
		);
		
		
		var altura_contenido = $(window).height();
		
		var fileName = item.enlace;
		var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
		
		if (isPdf(fileExtension)) {
			var ver_pdf = "block";
		}else{
			var ver_pdf = "none";
		}
		
		if (isImage(fileExtension)) {
			var enlace_imagen = "http://coarco.creatactil.com/files/"+item.enlace;
			var ver_imagen = "block";
			
		}else{
			var enlace_imagen = "";
			var ver_imagen = "none";
		}
		
		if(item.firmada == 0){
			var ver_firmar = "block";
			var firmada = "";
		}else{
			var ver_firmar = "none";
			var firmada = "Circular firmada";
		}
		
		if (localStorage.coloroscuro) { var coloroscuro = localStorage.coloroscuro; }else{ var coloroscuro = "#cacaca"; }		
						
		/*Pagina dinamica*/
		var content = 
		'<div data-role="page"  id="id' + index + '" data-url="id' + index + '" data-theme="a">' +
		
		'<div data-role="header" data-theme="a">' + 
		'<a href="#page14" data-transition="slide" data-direction="reverse" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all">Atrás</a>'+
		'<h1><img src="recursos/logo.svg" width="20" height="20" style="margin: -4px;margin-right: 5px;">CIRCULAR</h1>' +
		'</div>' +

		'<div data-role="content" id="contenido14" style="padding: 0.5em; min-height: '+altura_contenido+'px;">' +
			
		'<div data-role="fieldcontain" class="result" style="background-color: white; border: 2px solid '+coloroscuro+'; padding: 7px;">'+
		
		'<img src="'+enlace_imagen+'" style="margin-bottom: 1em; max-width: 100%; display: '+ver_imagen+';" onclick="abririmagen(\''+enlace_imagen+'\');">'+

		'<p style="margin:0; padding:0; color:#294e85; font-size: 0.7em ">Nº de Registro: '+item.registro+'<br>'+
		//item.nombre_centro+'<br>'+
		'Fecha: '+item.fecha+'</p>'+
		//'Enviado por: '+item.usuario+'</p>'+
		
		'<p><strong>'+item.titulo+'</strong></p>'+
		'<p>'+ item.texto + '</p>' +
		'<p><strong>'+item.nombre+'</strong></p>'+

		'<img class="boton-pdf" src="recursos/btn-pdf.svg" width="65" height="65" style="margin-bottom: 1.5em; display: '+ver_pdf+';" onclick="abrirfichero(\''+item.enlace+'\')"  />'+
		//'<a href="" onclick="abrirfichero(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
		
		'<a class="firmaraqui" style="margin-top: 1em; margin-bottom: 1em; color:#294e85; display: '+ver_firmar+';" data-transition="pop" onClick="irApage11();textofirma(\''+item.registro+'\' );textofirma2(\''+item.titulo+'\' )">'+item.firma+'</a>'+
		
		'<a class="circularfirmada" href="" style="margin-top: 1em; margin-bottom: 1em; color:green;">'+firmada+'</a>'+
		
		'</div>' +					  
			
		'</div>';
		
		
		var id_favorito="#id"+ index;
		$(document).on("pagecreate",id_favorito,function(){
			$(id_favorito).off();
			$(id_favorito).on("swiperight",function(){
				$.mobile.changePage("#page14", {transition: "slide", reverse: true });
			});
		});		
	   
			
			$('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga14").hide(); 
			
		}
		
		});

			
		  	$('#listafav').listview('refresh', true);
			globo();
} 


function cambiarPaginaFavorito(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		comprobarcolor();
}
	
	
function borrar2(id_aux2){
	var elidaux2 = id_aux2; 
	$("#id_aux4").val(elidaux2);	
}
