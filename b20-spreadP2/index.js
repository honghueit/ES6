const a = [ 1, 2, 3 ];
const b = [ 0, ...a, 4 ];
console.log( b );

const obj1 = {
    a: 1,
    b: 2,
    c: 3
};

let obj2 = {};

for ( let key in obj1 ) {
    obj2[ key ] = obj1[ key ];
}

console.log( 2 );

obj2.b = 5;
console.log( { obj1, obj2 } );

//deep clone