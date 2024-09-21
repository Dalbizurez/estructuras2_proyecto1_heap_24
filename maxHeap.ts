export class MaxHeap<T extends Object>{
    private length:number;
    private data:T[];

    constructor(size:number=0){
        this.data = Array(size+1);
        this.length = 0;
    }

    public getLength():number{
        return this.length;
    }

    public isEmpty():boolean{
        return this.length == 0;
    }

    public getMax():T{
        let max:T = this.data[1];
        this.data[1] = this.data[this.length];
        delete this.data[this.length];
        this.length--;
        this.sink(1);
        return max
    }

    public peek():T{
        return this.data[0]
    }

    public getData():T[]{
        return this.data;
    }

    public insert(val:T):void{
        this.length++;
        this.data[this.length] = val;
        this.reorder(this.length);
    }

    private reorder(index:number):void{
        let parent:number = Math.floor(index/2);
        while (index > 1 && this.data[index] > this.data[parent]){
            let temp:T = this.data[parent];
            this.data[parent] = this.data[index];
            this.data[index] = temp;
            index = parent;
            parent = Math.floor(index/2); 
        }
    }

    private sink(index:number):void{
        while (index*2 <= this.length){
            let j:number = index*2;
            if (this.data[j]<this.data[j+1]) j++;
            if (this.data[index] >= this.data[j]) break;

            let temp: T = this.data[index];
            this.data[index] = this.data[j];
            this.data[j] = temp;

            index = j;
        }
    }
}


let maxHeap = new MaxHeap(2);
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(9);
maxHeap.insert(16);
maxHeap.insert(1);
console.log(maxHeap.getData())
console.log(maxHeap.getMax())
console.log(maxHeap.getData())