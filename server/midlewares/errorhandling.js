module.exports = (err, req, res, next) => {
    if (err.name === "invalid account") {
        res.status(401).json({msg: "invalid account"})
    }
}