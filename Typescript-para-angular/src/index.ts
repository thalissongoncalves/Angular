// tipos primitivos: boolean, number, string
let ligado:boolean = false;
let nome:string = "thalisson";
let idade:number = 22;
let altura:number = 1.9;

// tipos especiais null, undefined
let nulo:null = null;
let indefinido:undefined = undefined;

// tipos abrangentes: any, void
let retorno:void;
let retornoView:any = "Qualquer coisa";

// objeto - sem previsibilidade
let produto:object = {
    name: "Thalisson",
    cidade: "Três Corações",
    idade: 22,
};

// objeto - com previsibilidade (recomendado essa utilização para objetos)
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto:ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 10,
};

// arrays
let dados:string[] = ["Thalisson", "Ana", "Felipe"];
let dados2:Array<string> = ["Thalisson", "Ana", "Felipe"];
let infos:(string | number)[] = ["felipe", 10, "Alanzoka", 100];

// Tuplas
let boleto:[string, number, number] = ["agua conta", 199.90, 32342342];

// arrays métodos
".map .filter .reduce .some etc"

// Datas
let aniversario:Date = new Date("2024-05-08 08:30");

// funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string) {
    return `Hello ${name}`;
}

let soma:number = addNumber(4, 7);

// funções multi tipos
function callToPhone(phone: number | string): number | string {
    return phone;
}

// funções async
async function getDatabase(id: number): Promise<number | string> {
    return "felipe";
}

// interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot1: robot = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

class Pessoa implements robot2 {
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string) {
        this.id = id
        this.name = name
    }

    sayHello(): string {
        return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "gustman");

// classes
// data modifiers, public, private, protected
class Character {
    protected name?: string;
    protected strength: number;
    readonly skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`)
    }
}

// Character: superclass
// Magician: subclass
class Magician extends Character {
    magicPoints: number;

    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, strength, skill)
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Saitama", 999, 999);
const p2 = new Magician("Mago", 9, 30, 100);
p1.attack();

// generics
function concatArray<T>(...itens: T[]):T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const strArray = concatArray<string[]>(["Felipe", "Goku"], ["Vegeta"]);

console.log(numArray);
console.log(strArray);

// decorators
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "felipe" })
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();

// attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

class Api2 {
    @minLength(10)
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const api2 = new Api2("usuariosar");
console.log(api2.name);