function log( a, ...numbers ) {
    console.log( a );
    console.log( numbers );
}

log( 1, 2, 5, 7, 10 );

function sum( ...numbers ) {
    return numbers.reduce( ( a, b ) => {
        return a + b
    }, 0 )
}

console.log( sum(1, 4, 6, 8) );

