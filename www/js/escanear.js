function escanear(){
			
	var callback = function(err, contents){
	 
	  if(err){
		console.error(err._message);
	  }
	  alert('The QR Code contains: ' + contents);
	};
	 
	QRScanner.scan(callback);	
	
}