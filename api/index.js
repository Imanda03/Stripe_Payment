import cors from "cors";
import express from "express";
import Stripe from "stripe";
import { uuid } from "uuidv4";

const stripe = new Stripe(
  "sk_test_51Ntuu9F8i2EULDmhJyXf5ojdni05vJXZWkBgbUCchAvsk8H4RYhQWbV5295RMsBrrxKspNIuOjopMCJYTGfa2KcY00PY0cMg05"
);

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("IT WORKS CORRECTILY");
});

app.post("/payment", (req, res) => {
  // const { product, token } = req.body;
  // console.log("PRODUCT", product);
  // // console.log("PRICE", product.price);
  // const idempotencyKey = uuid();

  // return stripe.customers
  //   .create({
  //     email: token.email,
  //     source: token.id,
  //   })
  //   .then((customer) => {
  //     stripe.charges.create(
  //       {
  //         // amount: product.price * 100,
  //         currency: "usd",
  //         customer: customer.id,
  //         receipt_email: token.email,
  //         description: `Thanks for purchaing ${product.name}`,
  //         shipping: {
  //           name: token.card.name,
  //           address: { country: token.card.address_country },
  //         },
  //       },
  //       { idempotencyKey }
  //     );
  //   })
  //   .then((result) => res.status(200).json(result))
  //   .catch((err) => res.status(500).json(err));
  res.status(200).json("success");
});

//listen
const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
