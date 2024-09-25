export class Order{
    protected company:string;
    protected amount:number;
    protected initialAmount:number;
    protected price:number;
    protected isPurchase: boolean;

    constructor(company:string, amount:number, price:number, isPurchase: boolean){
        this.company = company;
        this.amount = amount;
        this.initialAmount = amount;
        this.price = price;
        this.isPurchase = isPurchase;
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
        return `${this.company}: ${this.initialAmount} x $${this.price}`
    }

}

export class OrderPurchase extends Order{
    constructor(company:string, amount:number, price:number){
        super(company, amount, price, true);
    }
}
export class OrderSale extends Order{
    constructor(company:string, amount:number, price:number){
        super(company, amount, price, false);
    }
}