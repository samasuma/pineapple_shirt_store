
const stripe = Stripe('YOUR_PUBLIC_STRIPE_KEY');

const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    fetch('/create-checkout-session', { method: 'POST' })
        .then(response => response.json())
        .then(session => {
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(result => {
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
