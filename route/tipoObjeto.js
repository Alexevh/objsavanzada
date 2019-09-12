var express = require("express");
var router = express.Router();
var tipoObjeto = require("../models/tipoObjeto");

router
    .route("/tipoobjetos")
    .get((req,res) => {
        User.find((err, tipoObjeto) => {
            if(err) throw err;
            res.json(tipoObjeto);
        })
    })
    .post((req,res) => {
        // const name = req.body.name;
        const { nombreTipo, codigoTipo } = req.body;
        var tipoObjeto = new tipoObjeto();
        objeto.nombreTipo = nombreTipo;
        objeto.codigoTipo = codigoTipo;
        

        user.save((err) => {
            if(err) throw err;
            res.json({message: "TipoObjeto successfully added! :-)"});
        });

    });

module.exports = router;