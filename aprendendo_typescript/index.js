var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var company = 'traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4];
var arr = [1, true, 'Hello'];
var person = [1, 'erivanio', true];
var employee;
employee = [
    [1, 'Brow'],
    [2, 'John'],
    [3, 'Brad']
];
var pid;
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
var usuario = {
    id: 12,
    nome: 'Erivanio'
};
//type assertion
var cid = 1;
//let customerId = <number> cid;
var customerId = cid;
customerId = true;
console.log(addNum(1, 2));
//functions 
function addNum(x, y) {
    return x + y;
}
function message(x) {
    console.log(x);
}
var usuario1 = {
    id: 1,
    nome: 'Paulo',
    idade: 39
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
//classes
var Person = /** @class */ (function () {
    function Person(id, nome) {
        this.id = id,
            this.nome = nome;
    }
    Person.prototype.registro = function () {
        return "".concat(this.nome);
    };
    return Person;
}());
var Empregado = /** @class */ (function (_super) {
    __extends(Empregado, _super);
    function Empregado(id, nome, cargo) {
        var _this = _super.call(this, id, nome) || this;
        _this.cargo = cargo;
        return _this;
    }
    return Empregado;
}(Person));
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordan');
var empregadoNew = new Empregado(3, 'Marcos', 'Analista');
console.log(empregadoNew.registro());
//generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(["ola", 'estou', 'arqui']);
numArray.push('teste');
