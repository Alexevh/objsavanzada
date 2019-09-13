var express = require("express");
var router = express.Router();
var TipoObjeto = require("../models/tipo_objeto");

router
    .route("/")
    .get((req,res) => {
        User.find((err, tipoObjeto) => {
            if(err) throw err;
            res.json(tipoObjeto);
        })
    })
    .post((req,res) => {
        // const name = req.body.name;
        const { nombreTipo, codigoTipo } = req.body;
        var tipoObjeto = new TipoObjeto();
        tipoObjeto.nombreTipo = nombreTipo;
        tipoObjeto.codigoTipo = codigoTipo;
        

        tipoObjeto.save((err) => {
            if(err) throw err;
            res.json({message: "TipoObjeto successfully added! :-)"});
        });

    });

module.exports = router;