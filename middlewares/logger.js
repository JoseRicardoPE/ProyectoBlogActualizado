function logger(req, res, next) {
    console.log('Haciendo pedido...');
    next();
}



module.exports = logger;