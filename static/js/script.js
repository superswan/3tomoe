window.onload = function() {
    //rotate logo on load
    document.getElementById('logo').classList.add('rotate');

    // Set a tags to open in new tab
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
            links[i].target = '_blank';
    }
};