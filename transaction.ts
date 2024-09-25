import { OrderPurchase,OrderSale } from "./order";


export class Transaction{
    private purchaseOrder:OrderPurchase;
    private saleOrder:OrderSale;

    private company:string;
    private amountExchanged:number;
    private transactionPrice:number;
    private purchasePrice:number;
    private salePrice:number;

    constructor(purchaseOrder:OrderPurchase, saleOrder:OrderSale, amountExchanged:number, price:number){
        this.purchaseOrder = purchaseOrder;
        this.saleOrder = saleOrder;
        this.company = purchaseOrder.getCompany;
        this.amountExchanged = amountExchanged;
        this.transactionPrice = price;
        this.purchasePrice = purchaseOrder.getPrice;
        this.salePrice = saleOrder.getPrice;
    }

    toString(){
        let txt = `Compañía: ${this.company}
            Número de acciones: ${this.amountExchanged}
            Precio: ${this.transactionPrice}
            Total ${this.transactionPrice*this.amountExchanged}
            
            Orden de compra:
                ${this.purchaseOrder}
            Orden de venta:
                ${this.saleOrder}`;
        return txt;
    }
}