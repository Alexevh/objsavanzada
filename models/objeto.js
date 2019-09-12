var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Objeto = new Schema({
    numeroOrden: int,
    tipoObjeto: String,
    estadoObjeto: String,
    descripcionObjeto: String,
    precioBase: int
});

module.exports = mongoose.model("Objeto", Objeto);