// JavaScript Document
function abrir(){
			
			alert("Hola");
			
			cordova.ThemeableBrowser.open('http://creatactil.com', '_blank', {
    statusbar: {
        color: '#ffffff'
    },
    toolbar: {
        height: 54,
        color: '#1C20A6'
    },
    title: {
        color: '#ffffff',
        showPageTitle: false
    },
    backButton: {
        image: 'www/recursos/back.png',
        imagePressed: 'recursos/back_pressed.png',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        image: 'recusrsos/forward.png',
        imagePressed: 'recursos/forward_pressed.png',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        image: 'recursos/close.png',
        imagePressed: 'recursos/close_pressed.png',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            image: 'recursos/share.png',
            imagePressed: 'recursos/share_pressed.png',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'recursos/menu.png',
        imagePressed: 'recursos/menu_pressed.png',
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