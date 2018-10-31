function greeting() {
    console.log(`Hi ${this.firstName } . I am ${this.lastName} `);
}

const obj = {
    firstName : 'Hue',
    lastName: 'Tran'
};

greeting.call(obj);