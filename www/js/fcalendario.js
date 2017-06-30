 $.datepicker.regional['es'] = {
 closeText: 'Cerrar',
 prevText: '<Ant',
 nextText: 'Sig>',
 currentText: 'Hoy',
 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
 weekHeader: 'Sm',
 dateFormat: 'dd-mm-yy',
 firstDay: 1,
 isRTL: false,
 showMonthAfterYear: false,
 yearSuffix: ''
 };
 $.datepicker.setDefaults($.datepicker.regional['es']);

//var events = [];

function listafechas(arg) {
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }
	
	var events = [];
	var xcodigo = "F38004164";
	var validado = localStorage.validado;
	
	if (validado != 1){
		alert("ERROR: Usted no ha sido validado. Contacte con COARCO");
		xcodigo = "";
		
	}
	
	$( "#micalendario" ).datepicker("destroy");
	$('#listadeeventos').empty();
	
	var argumento=arg;
	$.mobile.changePage("#page17", {transition: "slide", reverse: argumento });			
	comprobarcolor();
	
	return $.ajax({
    	       url: 'http://appcoarco.creatactil.com/php/fechas.php',
			   dataType: 'jsonp',
			   jsonp: 'jsoncallback',
			   data: {codigo: xcodigo},
			   success: function(data) {        
			   
			       $.each(data, function (index, item) {
			   
			   	       var fechas = item.fecha;
			   		   events.push([fechas]);					   
			           $("#evento").html(events.join(';'));
			   
				   });
				   
				   var loseventos = $("#evento").val();
				   cargatodo(loseventos); 
			   }
		   });
}


function cargatodo(pr){ 
	var eventoscargados = pr;	
	var mievento = eventoscargados.split(";");	
	var currentDate = new Date();     
	$( "#micalendario" ).datepicker({
		selectMultiple:true,
		minDate: -70,
		beforeShowDay:function(date){
			var string = jQuery.datepicker.formatDate('dd-mm-yy', date);			
			//var noWeekend = $.datepicker.noWeekends(date);

			//if (noWeekend[0]) {

				return  [true, $.inArray(string, mievento) >=0?"specialDate":''];	
					
			//}else{
				//return noWeekend;
			//}

			},
        changeMonth: false,
        changeYear: false,
	    firstDay: 1,
		onSelect: function (date) {
		$("#fechasel").val(date);
		listaEventos(date);
		
		},
    });
	
	$("#setDate").click(function () {
		$("#micalendario").datepicker("setDate", currentDate);
	});
	
	listaEventosMes();
}