import { useState } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function App() {
  const REACT_APP_KEY =
    "pk_test_51Ntuu9F8i2EULDmhhCnM3EeW7Y9HzllrMvSX2Khq5mhLbDYwrta2guVtFWwbQsiZLZ1uNDfDjrJMpwHdh53lHGKb00mUZKURQp";

  const [product, setProduct] = useState({
    name: "React from facebook",
    price: 10,
    productBy: "Facebook",
  });
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const header = {
      "Content-Type": "application/json",
    };

    return axios
      .post(`http://localhost:5000/payment`, {
        header,
        body: JSON.stringify(body),
      })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log(("STATUS", status));
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <StripeCheckout
        stripeKey={REACT_APP_KEY}
        token={makePayment}
        name="Buy React"
        amount={product.price * 100}
      >
        <button className="btn-large pink">Buy react</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
