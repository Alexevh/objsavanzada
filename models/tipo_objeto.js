var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tipoObjeto = new Schema({
    nombreTipo: String,
    codigoTipo: String
});

module.exports = mongoose.model("TipoObjeto", tipoObjeto);