export function classDecorator<T extends {new(...args: any[]):{}}>(
    constructor: T){
   return class extends constructor{
    newProperty = 'New Property';
    hello = "override";
   }
}


@classDecorator
export class SuperClass {
    public myProperty: string ='Atributo';

    print(){
        console.log(this.myProperty);
    }
}

console.log(SuperClass)

const myClass = new SuperClass();
myClass.print() 

