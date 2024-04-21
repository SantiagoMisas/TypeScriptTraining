export class Person {
  public name?: string;
  public lastname: string;
  private address: string;



  constructor(name: string, lastName: string, address: string) {
    this.name = name;
    this.address = address;
    this.lastname = lastName;
  }
/*   get name() {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  } */
}

/* export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York');
    }

} */
export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    /*     this.person = new Person(realName, "New York"); */
  }
}


const tony = new Person("Tony", "Stark", "New York");
const ironman = new Hero("IronMan", 45, "Tony", tony);
const persons: Person[] = [tony];

console.log({ ironman });

for (const person of persons){
 console.log(person.name)
}

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i].name)
  
}
