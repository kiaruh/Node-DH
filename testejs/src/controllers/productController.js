let productController = {
    listado: function () {},
    crear: function () {},
    detalle: function (req,res) {
        res.send("Detalle producto :" + req.params.detalle)
    },
    detalleComentario: function () {},

};

module.exports = productController;
