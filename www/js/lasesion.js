function lasesion(){
	
	var xnumero = localStorage.numero;

	if (typeof xnumero == 'undefined'){
	
		mostrarAlert("Regístrese, su dispositivo no tiene datos de registro.");
		$.mobile.changePage("#page2", {transition: "slide"},true,true);
	
	}else{
		crearLista();
		comprobarid();
	}
}