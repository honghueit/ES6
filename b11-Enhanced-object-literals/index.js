const name = 'Hue';
const obj = {
    name,  // name: name
    run() {
        console.log(` Hello ${this.name} `)
    }
};

console.log(obj.run());