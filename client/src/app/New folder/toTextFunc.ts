// REMOVE ME:
let order: Order = {
    city: "Jerusalem",
    street:"247th beer st",
    delieveryDate: new Date(),
    creditCard:"****1234",
    cartId:"604fd7d3b047f80c886138d5",
    userId:"604d32f5df68cc1654342669",
    createdAt:new Date(),
    updatedAt:new Date()
}


interface Order {
    city:string,
    street:string,
    delieveryDate: Date,
    creditCard:string,
    cartId:string,
    userId:string,
    createdAt:Date,
    updatedAt:Date
}

function toReceipt(order: Order): string {
     return "\nThank you for your order!\n\n" + 
     "You should receive your order at:\n" +
     order.street + ", " + order.city + " until " + order.delieveryDate.toLocaleDateString().toString() + "\n\n" +
    
     "Your order: \n" +
// REMOVE ME:
     "TODO add cart details here\n\n" +

     "Credit card used for the transaction: " + order.creditCard + "\n" + 
     order.updatedAt.toLocaleString()
}

// REMOVE ME:
let test: string = toReceipt(order);
console.log(test)