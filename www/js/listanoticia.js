function listanoticia(arg) {
				
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }
 
	var xnumero = localStorage.numero;
	var validado = localStorage.validado;
	
	if (validado != 1){
		
	var xcorreo = 0;
	
	}else{
	var xcorreo = 1;
	}
	
	var argumento=arg;
	$.mobile.changePage("#page1", {transition: "slide", reverse: argumento });
	comprobarcolor();

	$('#listanot').empty();
	$("#carga1").show();          
						
	$.ajax({
		url: 'http://appcoarco.creatactil.com/php/listanoticia.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		data: {numero: xcorreo},
		success: function(data){			
	   	   
	    $.each(data, function(index, item) {
			
			$('#idn'+index).remove();
			
			var tema = "#000000";
			var bordeIzq = "";
			var colorFondo = "background-color: rgba(246, 246, 246, 1);";
			
			if(item.enlace == ''){
				var enlace_logo = "recursos/logo.svg"
			}else{
				var enlace_logo = "http://coarco.creatactil.com/files/"+item.enlace
			}						
									
			if (localStorage.bgcolor) { var bgcolor = localStorage.bgcolor; }else{ var bgcolor = "rgba(224, 224, 224, 0)"; }		
				
			$("#listanot").append(
			'<li class="ui-li-has-alt ui-li-has-thumb" style="height: 80px;border: 2px solid '+bgcolor+'; margin-bottom: -2px;"><a href="#" class="ui-btn" onclick="cambiarPaginaNoticia(idn' + index + '), contador(\''+item.registro+'\');" style="height: 80px; padding:0; margin: 0; border: none; '+colorFondo+'" >'+
			
			//'<img src="recursos/logo.svg" class="ui-li-thumb" style="margin-top: 5px; margin-left: 5px; height: 55px">'+
			'<div style="margin-top: 5px;margin-left: 5px;background-image:url(\''+enlace_logo+'\');width: 70px;height: 70px;background-position: center;background-repeat: no-repeat;background-size: cover;border-radius: 50%;"></div>'+
			
			'<p style="margin-left:60px; margin-top:5px; margin-bottom: 0px; margin-right: 3px; font-weight: bold; color:'+tema+'" >'+item.titulo+'</p>'+		
			'<p style="text-transform: uppercase;margin-left:80px;margin-right:5px;margin-top:-90px;font-weight:bold;font-size:12px;color:'+tema+';white-space: normal;max-height: 56px;" >'+item.titulo+'</p>'+			
			//'<p style="margin-left:60px; margin-top:0px; padding:0; color:#294e85; font-size:0.7em">Nº de Registro: '+item.registro+'<br>'+
			//'Centro:  '+item.nombre_centro+'<br>'+
			'<p style="margin-left:80px; margin-top:-5px; padding:0; color:#000000; font-size: 0.7em ">'+item.fecha2+'</p>'+
			
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
			
			if (localStorage.coloroscuro) { var coloroscuro = localStorage.coloroscuro; }else{ var coloroscuro = "#cacaca"; }		
							
			/*Pagina dinamica*/
			var content = 
			'<div data-role="page"  id="idn' + index + '" data-url="idn' + index + '" data-theme="a">' +
			
			'<div data-role="header" data-theme="a">' + 
			'<a href="#" data-rel="back" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all">Atrás</a>'+
			'<h1><img src="recursos/logo.svg" width="20" height="20" style="margin: -4px;margin-right: 5px;">NOTICIA</h1>' +
			'</div>' +

			'<div data-role="content" id="contenido1" style="padding: 0.5em; min-height: '+altura_contenido+'px;">' +
				
			'<div data-role="fieldcontain" class="result" style="background-color: white; border: 2px solid '+coloroscuro+'; padding: 7px;">'+
			
			'<img src="'+enlace_imagen+'" style="margin-bottom: 1em; max-width: 100%; display: '+ver_imagen+';" onclick="abririmagen(\''+enlace_imagen+'\');">'+

			//'<p style="margin:0; padding:0; color:#294e85; font-size: 0.7em ">Nº de Registro: '+item.registro+'<br>'+
			//item.nombre_centro+'<br>'+
			//'Fecha: '+item.fecha2+'</p>'+
			//'Enviado por: '+item.usuario+'</p>'+
			
			'<p style="margin: auto;"><strong>'+item.titulo+'</strong></p>'+
			'<spam style="font-size: 14px;">'+item.fecha2+'</spam>'+
			'<p>'+ item.texto + '</p>' +

			'<img class="boton-pdf" src="recursos/btn-pdf.svg" width="65" height="65" style="margin-bottom: 1.5em; display: '+ver_pdf+';" onclick="abrirfichero(\''+item.enlace+'\')"  />'+
			
			'</div>' +					  
				
			'</div>';
			
			
			var id_noticia="#idn"+ index;
			$(document).on("pagecreate",id_noticia,function(){
				$(id_noticia).off();
				$(id_noticia).on("swiperight",function(){
					$.mobile.changePage("#page1", {transition: "slide", reverse: true });
				});
			});		
	   
			$('body').append(content).trigger('refresh');
			$(index).page();
		});
		
			$("#carga1").hide();
		}
		
	});
	
	$('#listanot').listview('refresh', true);
	globo();
}


function cambiarPaginaNoticia(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		comprobarcolor();
}