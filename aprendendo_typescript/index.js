"use strict";
let id = 5;
let company = 'traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hello'];
let person = [1, 'erivanio', true];
let employee;
employee = [
    [1, 'Brow'],
    [2, 'John'],
    [3, 'Brad']
];
let pid;
pid = '22';
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Dow";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const usuario = {
    id: 12,
    nome: 'Erivanio',
};
//type assertion
let cid = 1;
//let customerId = <number> cid;
let customerId = cid;
customerId = true;
console.log(addNum(1, 2));
//functions 
function addNum(x, y) {
    return x + y;
}
function message(x) {
    console.log(x);
}
const usuario1 = {
    id: 1,
    nome: 'Paulo',
    idade: 39
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, nome) {
        this.id = id,
            this.nome = nome;
    }
    registro() {
        return `${this.nome}`;
    }
}
class Empregado extends Person {
    constructor(id, nome, cargo) {
        super(id, nome);
        this.cargo = cargo;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
const empregadoNew = new Empregado(3, 'Marcos', 'Analista');
console.log(empregadoNew.registro());
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(["ola", 'estou', 'arqui']);
numArray.push('teste');
