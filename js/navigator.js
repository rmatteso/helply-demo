function getTarget() {
    let here = window.location.href;
    let destination = here.split('/');

    destination = destination[destination.length-1];

    let target;

    switch(destination) {
        case "":
            target = 'home';
            break;
        case "#":
            target = 'home';
            break;
        default:
            target = destination;
            break
    }

    return target;
}

