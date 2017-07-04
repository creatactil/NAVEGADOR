function escanear(){
		
	$.mobile.changePage("#page01");
			
	var callback = function(err, contents){
	 
	  if(err){
		console.error(err._message);
	  }
	  alert('The QR Code contains: ' + contents);
	};
	 
	QRScanner.scan(callback);	
	
	QRScanner.show(function(status){
  		console.log(status);
	});
	
}