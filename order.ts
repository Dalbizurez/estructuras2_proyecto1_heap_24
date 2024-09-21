class Orden{
    protected company:string;
    protected amount:number;
    protected initialAmount:number;
    protected price:number;
    protected buy: boolean;

    constructor(company:string, amount:number, price:number, buy: boolean){
        this.company = company;
        this.amount = amount;
        this.initialAmount = amount;
        this.price = price;
        this.buy = buy;
    }

    get getInitialAmount(){
        return this.initialAmount;
    }

    get getAmount(){
        return this.amount;
    }
    set setAmount(amount:number){
        this.amount = amount;
    }

    get getPrice(){
        return this.price;
    }
    set setPrice(price:number){
        this.price = price;
    }

    get getCompany(){
        return this.company;
    }
    set setCompany(company:string){
        this.company = company;
    }

    valueOf(){
        return this.price;
    }

    toString(){
        return `${this.company}: ${this.amount} x $${this.price}`
    }

}

export class OrdenCompra extends Orden{
    constructor(company:string, amount:number, price:number){
        super(company, amount, price, true);
    }
}
export class OrdenVenta extends Orden{
    constructor(company:string, amount:number, price:number){
        super(company, amount, price, false);
    }
}