class Hero {
    constructor( name, hd, damage ) {
        this.name = name;
        this.hd = hd;
        this.damage = damage;
    }

    applyDamage( damage ) {
        this.hd -= damage;
    }

    attack( enemy ) {
        enemy.applyDamage( this.damage );
    }
}

const heroA = new Hero( 'A', 100, 10 );
const heroB = new Hero( 'B', 200, 5 );
console.log( { heroA, heroB } );
heroA.attack( heroB );
console.log( { heroA, heroB } );

class RangedHero extends Hero {
    constructor( name, hd, damage, range ) {
        super( name, hd, damage );
        this.range = range;
    }

    attack( enemy ) {
        super.attack( enemy );
        this.hd += this.damage;
    }
}

const RangedHeroA = new RangedHero( 'A', 100, 10 );
const RangedHeroB = new Hero( 'B', 200, 5 );
console.log( { RangedHeroA, RangedHeroB } );
heroA.attack( heroB );
console.log( { heroA, heroB } );