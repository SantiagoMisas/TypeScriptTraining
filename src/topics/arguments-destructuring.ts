export interface Product {
  description: string;
  price: number;
}
const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const table: Product = {
  description: "Ipad Air",
  price: 250.0,
};

interface TaxCalculationsOptions {
  tax: number;
  products: Product[];
}

const shoppingCart = [phone, table];
const taxRate = 0.18;

export function taxCalculation(options: TaxCalculationsOptions): [number, number] {

const {tax, products} = options;
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });

  return [total, total * tax];
}

const result = taxCalculation({
    products: shoppingCart,
    tax: taxRate
})
const [total, totalTaxes] = taxCalculation({
    products: shoppingCart,
    tax: taxRate
})

console.log('Total', result[0]);
console.log('Taxes', result[1]);
console.log('Total', total);
console.log('Taxes', totalTaxes);

