function listaweb(data) {
			
	var xnumero = localStorage.numero;
			
	$.mobile.changePage("#page6", {transition: "slide"},true,true);
	comprobarcolor();
		
	$('#listaweb').empty();
	$("#carga35").show();
			
	$.ajax({
		url: 'http://appcoarco.creatactil.com/php/listaweb.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		data: {numero: xnumero},
		success: function(data){			
	   	   
	    $.each(data, function(index, item) {
			
			if (localStorage.bgcolor) { var bgcolor = localStorage.bgcolor; }else{ var bgcolor = "#e0e0e0"; }
			
			if(item.facebook == ""){
				var li_facebook = ""
			} else {
				
				var li_facebook = "<li id=\"borde-bgcolor\" class=\"ui-li-has-thumb\" style=\"border: 2px solid "+bgcolor+";margin-bottom: -2px;\"><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" onclick=\"abrirweb('"+item.facebook+"')\" style=\"height: 55px; padding:0; border: none;\"><img src=\"recursos/facebook.svg\" class=\"ui-li-thumb\" style=\"margin-top: 0.4em;margin-left: 0.4em;height: 45px;width: 45px;\"><h3 style=\"margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;\">Facebook</h3></a></li>";				
				
			}
			
			if(item.twitter == ""){
				var li_twitter = "";
			} else {
			
				var li_twitter = "<li id=\"borde-bgcolor\" class=\"ui-li-has-thumb\" style=\"border: 2px solid "+bgcolor+";margin-bottom: -2px;\"><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" onclick=\"abrirweb('"+item.twitter+"')\" style=\"height: 55px; padding:0; border: none;\"><img src=\"recursos/twitter.svg\" class=\"ui-li-thumb\" style=\"margin-top: 0.4em;margin-left: 0.4em;height: 45px;width: 45px;\"><h3 style=\"margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;\">Twitter</h3></a></li>";			
					
			}
			
			if(item.youtube == ""){
				var li_youtube = "";
			} else {
			
				var li_youtube = "<li id=\"borde-bgcolor\" class=\"ui-li-has-thumb\" style=\"border: 2px solid "+bgcolor+";margin-bottom: -2px;\"><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" onclick=\"abrirweb('"+item.youtube+"')\" style=\"height: 55px; padding:0; border: none;\"><img src=\"http://appcoarco.creatactil.com/recursos/youtube.svg\" class=\"ui-li-thumb\" style=\"margin-top: 0.4em;margin-left: 0.4em;height: 45px;width: 45px;\"><h3 style=\"margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;\">Youtube</h3></a></li>";			
					
			}

				var ruta = "https://es.linkedin.com/company/coarcocooperativadeferreter%C3%ADasdecanarias";
				var li_linkedin = "<li id=\"borde-bgcolor\" class=\"ui-li-has-thumb\" style=\"border: 2px solid "+bgcolor+";margin-bottom: -2px;\"><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" onclick=\"abrirweb('"+ruta+"')\" style=\"height: 55px; padding:0; border: none;\"><img src=\"http://appcoarco.creatactil.com/recursos/linkedin.svg\" class=\"ui-li-thumb\" style=\"margin-top: 0.4em;margin-left: 0.4em;height: 45px;width: 45px;\"><h3 style=\"margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;\">Linkedin</h3></a></li>";
				
				
				
				var cliente = "<li id=\"borde-bgcolor\" class=\"ui-li-has-thumb\" style=\"border: 2px solid "+bgcolor+";margin-bottom: -2px;\"><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" onclick=\"irApage20()\" style=\"height: 55px; padding:0; border: none;\"><img src=\"recursos/contacto.svg\" class=\"ui-li-thumb\" style=\"margin-top: 0.4em;margin-left: 0.4em;height: 45px;width: 45px;\"><h3 style=\"margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;\">Atención al Socio</h3></a></li>";			
				
										
			$('#listaweb').append(			
			
			'<li id="borde-bgcolor" class="ui-li-has-thumb" style="border: 2px solid '+bgcolor+';margin-bottom: -2px;"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="abrirweb(\''+item.web+'\')" style="height: 55px; padding:0; border: none;">'+
			'<img src="recursos/logo.svg" class="ui-li-thumb" style="margin-top: 0.4em;margin-left: 0.4em;height: 45px;">'+
			'<h3 style="margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;">Web</h3></a></li>'+
			
			li_facebook+
			li_twitter+
			li_youtube+
			li_linkedin+
			cliente
			
			);
			
			if(esPC() == false){
			
				$('#listaweb').append(		
	
				'<li id="compartirapp" class="ui-li-has-thumb" style="border: 2px solid '+bgcolor+';margin-bottom: -2px;"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="window.plugins.socialsharing.shareViaWhatsApp(\'Descarga la app de COARCO para ANDROID en https://play.google.com/store/apps/details?id=com.creatactil.coarco para IOS en https://itunes.apple.com/us/app/\', null /* img */, null /* url */, function() {console.log(\'share ok\')}, function(errormsg){alert(errormsg)})" style="height: 55px; padding:0; border: none;">'+
				'<img src="recursos/whatsapp.svg" class="ui-li-thumb" style="margin-top: 0.4em;margin-left: 0.4em;height: 45px;width: 45px;">'+
				'<h3 style="margin-top: 1.5em;margin-left: 5em;font-size: 0.9em;color: #004a87;">Comparte tu APP</h3>'+			
				'</a>'+
				'</li>'
				
				);		
			}			
			
			$("#carga35").hide();
			 
		});
			
		}
		
		});
		
		globo();	
}

 
function changePage(id) {
	$.mobile.changePage($(id), {transition : "slide"});	
}

function abrirweb(ruta){
	
	

	// Para iOS utilizamos _blank y para Android y Navegador Web utilizamos _system
	if(isPhoneGap() && esIOS()){		
		window.open(ruta,'_blank','location=no,closebuttoncaption=< Salir,enableViewportScale=yes,toolbarposition=top'); 
		}else{
		window.open(ruta,'_system','location=no,closebuttoncaption=< Salir,enableViewportScale=yes,toolbarposition=top');
	}
}