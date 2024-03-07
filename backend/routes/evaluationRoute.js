const express = require("express");
const router = express.Router();
const { getEval, getEvals, deleteEval, newEval, updateEval } = require("../controllers/evaluationController")


router.get("/evals", getEvals )
router.get("/eval/:id", getEval )

router.post("/new", newEval);

router.patch("/update/:id", updateEval);

router.delete("/delete/:id", deleteEval);

module.exports = router;