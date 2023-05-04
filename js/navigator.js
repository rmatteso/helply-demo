function getParameters() {
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
        //console.log('home');
        target = url[index];
    }else if (url.length == (index + 2)) {
        //console.log('top-level page');
        target = url[index + 1];
    }else if (url.length == (index + 3)) {
        //console.log('secondary-level page');
        target = url[index + 1];
        secondary_target = url[index + 2];
    }

    let destination = {
        'main': target,
        'secondary': secondary_target
    };

    switch(target) {
        case "#":
            destination.main = 'home';
            break;
        default:
            //do nothing
            break;
    }

    return destination;
}

function navigate() {
    let parameters = getParameters();
    $('#main_box')
        .load(`pages/${parameters.main}.html`, function() {
            if(parameters.secondary != undefined && parameters.secondary.length > 0){
                //console.log(`components/${parameters.main}/${parameters.secondary}.html`);
                $('#secondary_box').load(`components/${parameters.main}/${parameters.secondary}.html`);
            }
    });
    //needs error handling if .load failure at level 1 and 2
    
}