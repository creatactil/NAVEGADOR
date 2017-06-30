$(document).on("pagecreate","#page1",function(){
	
	comprobarcolor();
	iframePdf();
	  
	$("#page1").on("swipeleft",function(){
	   lasesion();
	});
	
	$("#page1").on("swiperight",function(){
	   $( "#overlayPanel" ).panel( "open" );
	});                         

	$("#page4").on("swiperight",function(){
	   irAhome(true);
	}); 

	$("#page4").on("swipeleft",function(){
	   listafavorito();
	});
	  
	$("#page14").on("swiperight",function(){
	   crearLista(true);
	});
	

	$("#page14").on("swipeleft",function(){
	   listafechas();
	});
	  
	$("#page17").on("swiperight",function(){
	   listafavorito(true);
	});
	

	$("#page17").on("swipeleft",function(){
	   listaweb();
    });	
	  
	$("#page6").on("swiperight",function(){
	   listafechas(true);
	});
	
	$("#page6").on("swipeleft",function(){
	   irAhome();
	});
	
	$("#page5").on("swiperight",function(){
	   irAhome(true);
	});	
	
	$("#page18").on("swiperight",function(){
	   irAhome(true);
	});
	
	$("#page2").on("swiperight",function(){
	   init(true);
	});		
	  
	$("#micalendario").on("click", function(){
		$('#listadeeventos').empty();
	});	

});