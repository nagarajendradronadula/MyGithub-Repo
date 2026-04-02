const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("Pre MiddleWare");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    // console.log("Post MidleWare");
    // console.log(data);
    if(customer.orders.length){
      let res = await Order.deleteMany({_id: {$in: customer.orders}});
      console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    let cust1 = new Customer({
        name: "rahul Kumar",
    });

    let order1 = await Order.findOne({item: "Chips"});
    let order2 = await Order.findOne({item: "Cake"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
}

// addCustomer();

//Functions
const findCustomer = async () => {
    let result1 = await Customer.findOne({}).populate("orders");
    let result2 = await Customer.findOne({});
    console.log(result1);
    console.log(result2);
};

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 250,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("Added new customer");
};

// addCust();

const delCust = async () => {
  let data = await Customer.findByIdAndDelete('66aae89b8b30cd5a5acb4973');
  console.log(data);
}

delCust();

const addOrders = async () => {
    let res = await Order.insertMany([
        {item: "Samosa", price: 12},
        {item: "Chips", price: 10},
        {item: "Cake", price: 40},
    ]);
    console.log(res);
};

// addOrders();