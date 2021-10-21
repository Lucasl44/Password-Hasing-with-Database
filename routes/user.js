const router = require("express").Router();
const { register, login } = require("../utils/user");

router.post("/register", async(req, res) => {
    res.status(201).json({data: await register(req.body)});
});

router.patch("/login", async(req, res) => {
    res.status(200).json({data: await login(req.body)})
});

module.exports = router;