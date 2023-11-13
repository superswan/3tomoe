window.onload = function() {
    //rotate logo on load
    document.getElementById('logo').classList.add('rotate');

    // Remove class on animation end    
    logo.addEventListener('animationend', function() {
        logo.classList.remove('rotate');
    });

    // Event listener for click
    logo.addEventListener('click', function() {
        this.classList.add('rotate');

    // Remove class on animation end    
        this.addEventListener('animationend', function() {
            this.classList.remove('rotate');
        });
    });

    // Set a tags to open in new tab
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
            links[i].target = '_blank';
    }
};

