// JavaScript Document
function abrir(){
			
				
			cordova.ThemeableBrowser.open('http://creatactil.com', '_blank', {
    statusbar: {
        color: '#0038a2'
    },
    toolbar: {
        wwwImage: 'recursos/titulo.png',
		height: 54,
        color: '#0038a2',
		align: 'center'
    },
    title: {
        color: '#ffffff',
        showPageTitle: false
    },
    backButton: {
        wwwImage: 'recursos/back.png',
        wwwImagePressed: 'recursos/back_pressed.png',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        wwwImage: 'recursos/forward.png',
        wwwImagePressed: 'recursos/forward_pressed.png',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        wwwImage: 'recursos/close.png',
        wwwImagePressed: 'recursos/close_pressed.png',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            wwwImage: 'recursos/share.png',
            wwwImagePressed: 'recursos/share_pressed.png',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        wwwImage: 'recursos/menu.png',
        wwwImagePressed: 'recursos/menu_pressed.png',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
            {
                event: 'helloPressed',
                label: 'Hello '
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});
			
			
			}