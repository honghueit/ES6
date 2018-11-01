function f( mouse ) {
    return function( food )
    {
        console.log( ` ${mouse} eating ${food}` )
    }
}

//console.log(f('mouse'));
const mouse = f('micky');
console.log(mouse('rice'));
