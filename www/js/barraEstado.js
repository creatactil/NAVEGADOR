document.addEventListener("deviceready", barraEstado, false);
function barraEstado() {
    
	StatusBar.overlaysWebView(false);
	StatusBar.styleDefault();
	console.log(StatusBar);
}