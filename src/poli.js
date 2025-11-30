class Animal {
    sonar() {}
}

class Perro extends Animal {
    sonar() {
        return "Guau"
    }
}

class Gato extends Animal {
    sonar() {
        return "Miau"
    }
}

const animales = [new Perro(), new Gato()]
animales.forEach(a => console.log(a.sonar()))