let skills: string[] = ["Bash", "Counter", "Healing"]; //Array tipo string

interface Character { 
    name: string,
    hp: number,
    skills: string[],
    hometown?: string //El ? indica que la propiedad es opcional
    }
const Objeto: Character = { //Objeto de tipo Character
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter"],
    hometown: ""
};

Objeto.hometown ='Rivendell'

console.table(Objeto)
export {};
