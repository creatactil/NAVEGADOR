// JavaScript Document
function abrir(){
			
			alert("Hola");
			
			cordova.ThemeableBrowser.open('http://apache.org', '_blank', {
    statusbar: {
        color: '#ffffffff'
    },
    toolbar: {
        height: 44,
        color: '#f0f0f0ff'
    },
    title: {
        color: '#003264ff',
        showPageTitle: true
    },
    backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        image: 'forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
            {
                event: 'helloPressed',
                label: 'Hello World!'
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