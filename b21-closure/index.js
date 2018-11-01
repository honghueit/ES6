function sum( a, b ) {
    const c = a + b;
    return function () {
        console.log( c );
    }
}

sum( 1, 3 )();