// const sum1 = function (a, b) {
//     return a + b;
// };
// console.log(sum1(1,2));

const sumAB = ( a, b ) => a + b;

console.log( sumAB( 4, 6 ) );


//function no param
const doSomething = () => Date.now();

console.log( doSomething() );

const arr = [ 1, 2, 3 ];
const newArr = arr.map( x => x * x );
console.log( newArr );


const a = {
    name: 'AAA',
    run: function () {

        let run1 = function () {
            console.log( this.name );
        }.bind( this );

        run1();
    }
};
a.run();

const b = {
    foo: 'bar',
    run: function () {
        setTimeout( function () {
            console.log( this.foo )
        }, 2000 )
    }
};

b.run(); // undefined

const c = {
    foo: 'bar',
    run: function () {
        setTimeout( function () {
            console.log( this.foo )
        }.bind( this ), 2000 ) // bind(a) or var self = this
    }
};

c.run(); // bar

const d = {
    foo: 'bar',
    run: function () {
        setTimeout( () => {
            console.log( this.foo )
        }, 2000 )
    }
};

d.run(); // bar