let id:number = 5
let company:string = 'traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'


let ids: number[] = [1,2,3,4]
let arr: any[] = [1, true, 'Hello']

let person: [number, string, boolean] = [1, 'erivanio', true]

let employee:[number, string][]

employee=[
    [1, 'Brow'],
    [2, 'John'],
    [3, 'Brad']
]

let pid:string | number
pid = '22'

//enum
enum Direction1{
    Up=1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up='Up',
    Down='Dow',
    Left='Left',
    Right='Right'
}

//object
type Usuario = {
    id: number,
    nome:string
}

const usuario: Usuario = {
    id:12,
    nome:'Erivanio',    
}

//type assertion
let cid:any=1

//let customerId = <number> cid;
let customerId = cid as boolean;
customerId = true


console.log(addNum(1,2))
//functions 
function addNum(x:number,y:number): number{
    return x+y
}

function message(x: string | number): void{
    console.log(x)
}


//interfaces
interface UsuarioI{
    id:number
    nome: string
    readonly idade?:number //opcional
}
const usuario1: UsuarioI = {
    id:1,
    nome: 'Paulo',
    idade:39
    
}


interface MathFunc {
    (x: number, y:number) : number
}

const add : MathFunc =(x:number, y:number): number => x + y
const sub : MathFunc =(x:number, y:number): number => x - y

interface PersonInterface {
    id:number,
    nome:string,
    registro():string
}
//classes
class Person implements PersonInterface {
    id:number
    nome:string

    constructor(id:number, nome:string){
        this.id=id,
        this.nome=nome
    }

    registro(): string {
        return `${this.nome}`
    }
}

class Empregado extends Person {
    cargo: string

    constructor(id:number, nome:string, cargo:string){
        super(id, nome)
        this.cargo = cargo
    }
}

const brad  = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan')

const empregadoNew = new Empregado(3, 'Marcos', 'Analista')

console.log(empregadoNew.registro())

//generics
function getArray<T> (items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3])
let strArray = getArray<string>(["ola",'estou','arqui'])

numArray.push('teste')