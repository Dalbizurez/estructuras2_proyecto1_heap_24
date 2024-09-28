import { MaxHeap } from "./maxHeap";
import { MinHeap } from "./minHeap";

import { OrderPurchase } from "./order";
import { OrderSale } from "./order";

import { pair } from "./pairingTest";

let purchaseOrders = new MaxHeap<OrderPurchase>();
let saleOrders = new MinHeap<OrderSale>();

let pOrders:OrderPurchase[] = []
pOrders[0] = new OrderPurchase("DIS", 5, 151.20);
pOrders[1] = new OrderPurchase("CC", 10, 50.5);
pOrders[2] = new OrderPurchase("HBO", 7, 210);
pOrders[3] = new OrderPurchase("NTX", 2, 350.8);
pOrders[4] = new OrderPurchase("LIB", 1, 1000);
pOrders[5] = new OrderPurchase("LIB", 1, 1200);

let sOrders:OrderSale[] = []
sOrders[0] = new OrderSale("DIS", 8, 150.20);
sOrders[1] = new OrderSale("CC", 11, 50.5);
sOrders[2] = new OrderSale("HBO", 4, 200);
sOrders[5] = new OrderSale("HBO", 4, 150);
sOrders[3] = new OrderSale("NTX", 1, 352.8);
sOrders[4] = new OrderSale("LIB", 2, 1000);

for (let pOrder of pOrders){
    purchaseOrders.insert(pOrder);
} 
for (let sOrder of sOrders){
    saleOrders.insert(sOrder);
} 

for (let purchaseOrder of purchaseOrders.getData().slice(1)){
    pair(purchaseOrder, saleOrders)
}