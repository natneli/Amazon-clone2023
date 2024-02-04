const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Ny5X4GMcCnZL1gSHxCjp7MD8OObUmAcYHh43gPwU0XQZa5JjnzKk5VhJEFu4RqPGcFsXAswbzQIB0Men8fEiTmp00hTOe1EUJ", // eslint-disable-line max-len
);

// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
