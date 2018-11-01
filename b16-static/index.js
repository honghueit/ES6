class Foo {
    static someMethod() {
        console.log( 'some method!' );
    }

    anotherMethod() {
        console.log( 'another method' );
    }
}

Foo.someMethod();
const foo = new Foo();
foo.anotherMethod();