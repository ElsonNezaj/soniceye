const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((prod) => ({
    price_data: {
      currency: "eur",
      product_data: { name: prod.name },
      unit_amount: prod.price,
    },
    quantity: prod.quantity,
  }));

  const session = await stripe.checkout.session.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "",
    cancel_url: "",
  });

  res.json({ id: session.id });
});

app.listen(5000, () => {
  console.log("server started on 5000");
});
