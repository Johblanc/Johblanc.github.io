


function mod() {
    let urlString = document.location.href; 
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let mode = "Space";
    for (let pair of queryString.entries()) {
        if (pair[0] == "mode") {
           mode = pair[1];
        }
    }
    return mode;
}

function url_next_mod( mode){
    let urlString = document.location.href; 
    let adressString = urlString.split('?')[0];
    if (mode == "Space"){
        return adressString + "?mode=Sand"
    } 
    else if (mode == "Sand"){
        return adressString + "?mode=NsurB"
    } 
    else if (mode == "NsurB"){
        return adressString + "?mode=BsurN"
    } 
    else {
        return adressString + "?mode=Space"
    }
}

document.write('<link href="../Styles/' + mod() + '.css" rel="stylesheet" type="text/css" />');