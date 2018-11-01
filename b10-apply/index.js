function greeting() {
    console.log( `Hi ${this.firstName } . I am ${this.lastName} ` );
}

const obj = {
    firstName: 'Hue',
    lastName: 'Tran'
};

greeting.apply( obj );

function sum() {
    const number = Array.from( arguments );
    return number.reduce( ( sum, num ) => sum + num );
}

function average() {
    // const number = Array.from(arguments);
    // return number.reduce(function (sum, num) {
    //     return sum * num;
    // });

    return sum.apply( null, arguments ) / arguments.length;
}

console.log( average( 1, 3, 2, 6 ) );