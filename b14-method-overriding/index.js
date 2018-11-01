class CoffeeMachine {
    makeCoffee() {
        console.log( 'making coffee!' )
    }
}

class CoffeeMachineSpecial extends CoffeeMachine {
    makeCoffee() {
        console.log( 'made coffee!' )
    }
}

const coffeeMachineSpecial = new CoffeeMachineSpecial();
coffeeMachineSpecial.makeCoffee( function () {
    console.log( 'ok!' )
} );