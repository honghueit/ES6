let person = {
    name : 'Hue',
    point: 10
};

let person2 = {} ;


//returns 0 if empty or an integer > 0 if non-empty
function isEmpty1( obj ) {
    return Object.keys(obj).length === 0;
}

isEmpty1( person );

function isEmpty2(obj) {
    for(var i in obj) { return false; }
    return true;
}
isEmpty2( person2 );