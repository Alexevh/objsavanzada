var express = require("express");
var router = express.Router();
var Objeto = require("../models/objeto");

router
    .route("/")
    .get((req,res) => {
        Objeto.find((err, objeto) => {
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


    /** siempre que es u  GET lo ponemos por parametro normalmente */
    router
    .route("/:id")
    .get((req,res) => {
        Objeto.findById(req.params.id,(err, objeto) => {
            console.log(req.params.id);
            if(err) throw err;
            res.json(objeto);
        })
    })

     /** siempre actualiza un objeto con id X */
     router
     .route("/:id")
     .put((req,res) => {
        
          // const name = req.body.name;
          const {numeroOrden, tipoObjeto, estadoObjeto, descripcionObjeto, precioBase } = req.body;
          
          /* cargo el objeto con el id, quien hace la carga es el Objeto con maysucola que es el elmento del dominio
          y carga en la variable objeto con minuscula el resultado */
          Objeto.findById(req.params.id,(err, objeto) => {
            console.log(req.params.id);
            if(err) throw err;

            /* actualizamos los datos que vienen en el json */
            objeto.numeroOrden = numeroOrden;
            objeto.tipoObjeto = tipoObjeto;
            objeto.estadoObjeto = estadoObjeto;
            objeto.descripcionObjeto = descripcionObjeto;
            objeto.precioBase = precioBase;

            /* al guardar vemos si dio error lo damos si no damos ok */
            objeto.save(function(err)
            {
                if (err)
                {
                    res.json(err);
                } else {
                    res.json({message: "Objeto se modifico bien)"});
                }
            });
        
        })
        
        


     })


        /** borrar un objeto con id X */
        router
        .route("/:id")
        .delete((req,res) => {       
             /* cargo el objeto con el id, quien hace la carga es el Objeto con maysucola que es el elmento del dominio
             y carga en la variable objeto con minuscula el resultado */
             Objeto.findById(req.params.id,(err, objeto) => {
               console.log(req.params.id);
               if(err) throw err;
   
               /* al guardar vemos si dio error lo damos si no damos ok */
               objeto.delete(function(err)
               {
                   if (err)
                   {
                       res.json(err);
                   } else {
                       res.json({message: "Objeto se elimino bien)"});
                   }
              });
           
           })
        })
     

          /** siempre que es u  GET lo ponemos por parametro normalmente */
    router
    .route("/orden/:id")
    .get((req,res) => {
        Objeto.find({numeroOrden: req.params.id},(err, objeto) =>      
        {
            console.log(req.params.id);
            if(err) throw err;
            res.json(objeto);
        })
    })
    

module.exports = router;