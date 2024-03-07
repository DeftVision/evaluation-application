const evalModel = require("../models/evaluationModel");

exports.getEvals = async (req, res) => {
    try {
        const eval = await evalModel.find({});
        if(!eval) {
            return res.send({
                message: "Evaluations not found"
            })
        }
        if(eval) {
            return res.send({
                evaluationCount: eval.length,
                eval,
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting all evaluations callback error.",
            error,
        })
    }
}

exports.getEval = async (req, res) => {
    try {
        const {id} = req.params;
        const eval = await evalModel.findById(id);
        if(!eval) {
            return res.send({
                message: "Evaluation not found."
            })
        }
        return res.send({
            eval,
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting an evaluation callback error",
            eval,
        })
    }
}

exports.newEval = async (req, res) => {
    try {
        const { visitDateTime, evaluator, location, comments, cashier, image, greeting, nameTag, lobby, patio, food, service, final } = req.body;
        if(!visitDateTime || !evaluator || !location || !comments || !cashier || !image || !food || !service || !final) {
            return res.send({
                message: "Missing values in required fields",
            })
        }

        const eval = new evalModel({visitDateTime, evaluator, location, comments, cashier, image, greeting, nameTag, lobby, patio, food, service, final});
        await eval.save();
        return res.send({
            message: "Evaluation saved successfully",
            eval,
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "new evaluation callback error",
            error,
        })
    }
}

exports.updateEval = async (req, res) => {
    try {
        const {id} = req.params;
        const { visitDateTime, evaluator, location, comments, cashier, image, greeting, nameTag, lobby, patio, food, service, final } = req.body;
        const eval = await evalModel.findByIdAndUpdate(id, req.body, {new: true})
        return res.send({
            eval,
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "updating an evaluation callback error",
            error,
        })
    }
}

exports.deleteEval = async (req, res) => {
    try {
        const {id} = req.params;
        const eval = await evalModel.findByIdAndDelete(id);
        if(!eval) {
            return res.send({
                message: "Evaluation not found"
            })
        }
        if(eval) {
            return res.send({
                message: "Evaluation was deleted successfully",
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "deleting an evaluation callback error",
            eval,
        })
    }
}