export interface Passenger{
    name: string;
    children?: string[];
}
const passenger1: Passenger = {
    name: 'Santiago'
}
const passenger2: Passenger = {
    name: 'Kath',
    children: ['Marco', 'Nicole']
}

const printChildren =(passenger: Passenger)=>{
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);