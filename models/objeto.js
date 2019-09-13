var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Objeto = new Schema({
    numeroOrden: Number,
    tipoObjeto: String,
    estadoObjeto: String,
    descripcionObjeto: String,
    precioBase: Number
});

module.exports = mongoose.model("Objeto", Objeto);