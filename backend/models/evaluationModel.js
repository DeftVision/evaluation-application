const mongoose = require("mongoose");
const schema = mongoose.Schema;

const evalSchema = new schema({
    visitDateTime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    evaluator: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    cashier: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    greeting: {
        type: Boolean,
        required: false,
    },
    nameTag: {
        type: Boolean,
        required: false,
    },
    lobby: {
        type: Boolean,
        required: false,
    },
    patio: {
        type: Boolean,
        required: false,
    },
    food: {
        type: Number,
        required: true,
    },
    service: {
        type: Number,
        required: true,
    },
    final: {
        type: Number,
        required: false,
    },
})

const evalModel = mongoose.model("Eval", evalSchema);
module.exports = evalModel