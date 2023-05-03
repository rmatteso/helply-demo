function getTarget() {
    let here = window.location.href;
    let url = here.split('/');
    
    let index = url.indexOf('#');
    // in case there's no url parameter at all
    if (index == -1) {
        return 'home';
    }

    let target;
    let secondary_target;

    if (url.length == (index + 1)) {
        console.log('home');
        
        target = url[index];
    }else if (url.length == (index + 2)) {
        console.log('top-level page');
        
        target = url[index + 1];
    }else if (url.length == (index + 3)) {
        console.log('secondary-level page');
        
        target = url[index + 1];
        secondary_target = url[index + 2];
    }

    let destination;

    switch(target) {
        case "#":
            destination = 'home';
            break;
        default:
            destination = target;
            break
    }

    return destination;
}

