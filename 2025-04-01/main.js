class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
    greet() {
        console.log(
            `Hello, my name is ${this.#name} and I am ${this.#age} years old.`,
        );
    }
}
const barbara = new Person("Barbara", 15);
const anton = new Person("Anton", 16);
barbara.greet();
anton.greet();
console.log(`Gemeinsames Alter: ${barbara.age + anton.age}`);

const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("fragen.json");
const fragenJsonArray = JSON.parse(decoder.decode(data));
const fragenArray = fragenJsonArray.map(f =>
new Frage(f.frage, f.optionen, f.antwort)
);

console.log(fragenArray);

class Frage {
    constructor(frage, optionen, antwort) {
        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }
}
