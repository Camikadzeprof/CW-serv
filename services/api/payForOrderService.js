let Order = require('../../models/order.model');

const stripe = require('stripe')(
    "sk_test_51N8mqbLjk9pqEiZIgCysOxnusFprMCUBO32NRHZEvPZPULMzUlBhhhCluOVdeOHWn7Xp3nPoTM4ZJOgpydt7VvKR00pSy0HCvd"
);

module.exports = async (req, res) => {
    const { id, amount, orderId } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            payment_method: id,
            amount,
            currency: "byn",
            description: `Order №${orderId}`,
            confirm: true,
        })
        await Order.updateOne({_id: orderId}, {
            $set: {
                paid: true,
                status: 'Принят'
            }
        })
        res.status(200).json({ status: payment.status })
    } catch (e) {
        res.status(400).send(e.message)
    }
}