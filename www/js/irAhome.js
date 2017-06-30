function irAhome(arg) {

	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page1", {transition: "slide", reverse: argumento });
	comprobarcolor();
	globo();
	listanoticia();					
}

function irApage2(arg) {
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page2", {transition: "slide", reverse: argumento });
	comprobarcolor();					
}

function irApage5(arg) {
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page5", {transition: "slide", reverse: argumento });
	comprobarcolor();					
}

function irApage20(arg) {
	var vnombre = localStorage.nombre;
	var vapellidos = localStorage.apellidos;
	vnombre = vapellidos + ", " + vnombre
	var vcorreo = localStorage.correo;

	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page20", {transition: "slide", reverse: argumento });
	comprobarcolor();
		$("#fc_nombre").val(vnombre);
		$("#fc_email").val(vcorreo);
}

function irApage21(arg) {
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page21", {transition: "slide", reverse: argumento });
	comprobarcolor();					
}

function irApage18(arg) {
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page18", {transition: "slide", reverse: argumento });
	comprobarcolor();				
}

function irApage11(arg) {
	
	if ((typeof arg == 'undefined') || (arg == "")){ var arg = false }

	var argumento=arg;	
	$.mobile.changePage("#page11", {transition: "slide", reverse: argumento });
	comprobarcolor();				
}
