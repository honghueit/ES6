class Mouse {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(` Hello ${this.name} `)
    }

}

const mouses = new Mouse('micky');
mouses.run();