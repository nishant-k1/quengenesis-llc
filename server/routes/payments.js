var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

const idempotencyKey=uuidv4();
router
  .route('/')
  .post((req, res)=>{
    const paymentMethod=req.body.result.paymentMethod;
    const billingDetails=req.body.result.paymentMethod.billing_details;
    const address=req.body.result.paymentMethod.billing_details.address;
    const amount=req.body.amount;
    const description=req.body.description;
    stripe
      .customers.create({
        address: {
          line1: address.line1,
          city: address.city,
          country: 'US',
          postal_code: address.postal_code,
          state: address.state,
        },
        description: description,
        email: billingDetails.email,
        name: billingDetails.name,
        payment_method: paymentMethod.id,
        phone: billingDetails.phone,
        shipping: {
          address: {
            line1: address.line1,
            city: address.city,
            country: 'US',
            // line2: 'Landmark',
            postal_code: address.postal_code,
            state: address.state,
          },
          name: billingDetails.name,
          phone: billingDetails.phone,
        },
      })
      .then(customer=> 
        stripe
          .paymentIntents.create({
            amount: amount*100,
            currency: 'usd',
            confirm: true,
            customer: customer.id,
            description: description,
            payment_method: paymentMethod.id,
            payment_method_types: ['card'],
            receipt_email: 'support@rentaporta.com',
            shipping: {
              address: {
                line1: address.line1,
                city: address.city,
                country: 'US',
                // line2:'Landmark',
                postal_code: address.postal_code,
                state: address.state,
              },
              name: billingDetails.name,
              phone: billingDetails.phone,
            },
          },))
            .then(()=>{res.send("Congratulations! Your request for the payment of $"+amount+" was processed successfully.")})
            .catch(err=>res.send("There was an error while making the payment. "+err))
  })

module.exports = router;
