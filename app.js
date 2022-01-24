class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Describe() {
        return (this.name + ", " + this.age + " old");
    }
}

let myData = new Person("Sofia", 23);
console.log(myData.Describe());


var nombre = prompt("Ingresa tu nombre: ");
var edad = prompt("Ingresa tu edad: ");

let ourData = new Person(nombre,edad);

document.getElementById("person").innerHTML = ourData.Describe();