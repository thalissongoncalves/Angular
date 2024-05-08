"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tipos primitivos: boolean, number, string
let ligado = false;
let nome = "thalisson";
let idade = 22;
let altura = 1.9;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let retorno;
let retornoView = "Qualquer coisa";
// objeto - sem previsibilidade
let produto = {
    name: "Thalisson",
    cidade: "Três Corações",
    idade: 22,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 10,
};
// arrays
let dados = ["Thalisson", "Ana", "Felipe"];
let dados2 = ["Thalisson", "Ana", "Felipe"];
let infos = ["felipe", 10, "Alanzoka", 100];
// Tuplas
let boleto = ["agua conta", 199.90, 32342342];
// arrays métodos
".map .filter .reduce .some etc";
// Datas
let aniversario = new Date("2024-05-08 08:30");
// funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
// funções multi tipos
function callToPhone(phone) {
    return phone;
}
// funções async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
;
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gustman");
// classes
// data modifiers, public, private, protected
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
// Character: superclass
// Magician: subclass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Saitama", 999, 999);
const p2 = new Magician("Mago", 9, 30, 100);
p1.attack();
// generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const strArray = concatArray(["Felipe", "Goku"], ["Vegeta"]);
console.log(numArray);
console.log(strArray);
// decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.10")
], Api);
const api = new Api();
console.log(api.__version);
