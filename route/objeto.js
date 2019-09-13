var express = require("express");
var router = express.Router();
var Objeto = require("../models/objeto");

router
    .route("/")
    .get((req,res) => {
        User.find((err, objeto) => {
            if(err) throw err;
            res.json(objeto);
        })
    })
    .post((req,res) => {
        // const name = req.body.name;
        const { numeroOrden, tipoObjeto, estadoObjeto, descripcionObjeto, precioBase } = req.body;
        var objeto = new Objeto();
        objeto.numeroOrden = numeroOrden;
        objeto.tipoObjeto = tipoObjeto;
        objeto.estadoObjeto = estadoObjeto;
        objeto.descripcionObjeto = descripcionObjeto;
        objeto.precioBase = precioBase;

        objeto.save((err) => {
            if(err) throw err;
            res.json({message: "Objeto successfully added! :-)"});
        });

    });

module.exports = router;