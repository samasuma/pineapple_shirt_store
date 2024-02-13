
const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_STRIPE_KEY');
const app = express();

app.use(express.static('public'));

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Pineapple Shirt',
                },
                unit_amount: 2000,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'YOUR_SUCCESS_URL',
        cancel_url: 'YOUR_CANCEL_URL',
    });

    res.json({ id: session.id });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
