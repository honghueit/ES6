function f( mouse ) {
    return function( food )
    {
        console.log( ` ${mouse} eating ${food}` )
    }
}
const mouse = f('micky');
console.log(mouse('rice'));
