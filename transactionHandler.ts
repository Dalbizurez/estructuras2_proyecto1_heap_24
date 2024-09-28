import { MaxHeap } from "./maxHeap"
import { MinHeap } from "./minHeap"

import { Order } from "./order"
import { OrderPurchase } from "./order"
import { OrderSale } from "./order"

import { Transaction } from "./transaction"


export function pair(order:Order, heap:MaxHeap<OrderPurchase>|MinHeap<OrderSale>){
    let transactions:Transaction[] = [];

    let company:string = order.getCompany;
    let value = order.getAmount * order.getPrice;
    if (order.getAmount == 0) return;
    
    for (let heapOrder of heap.getData()){
        if (!heapOrder) continue;
        if (heapOrder.getCompany == company && heapOrder.getPrice <= order.getPrice){
            let transactionAmount:number;
            if (order.getAmount <= heapOrder.getAmount){
                heapOrder.setAmount = heapOrder.getAmount - order.getAmount;
                transactionAmount = order.getAmount;
                order.setAmount = 0;
            } else{
                order.setAmount = order.getAmount - heapOrder.getAmount;
                transactionAmount = heapOrder.getAmount;
                heapOrder.setAmount = 0;
            }
            transactions.push(new Transaction(order, heapOrder, transactionAmount, heapOrder.getPrice));
//            console.log(order, heapOrder);
        }
    }
    for (let transaction of transactions){
        console.log(transaction.toString())
    }
}
