var express = require("express");
var router = express.Router();
var TipoObjeto = require("../models/tipo_objeto");

router
    .route("/")
    .get((req,res) => {
        TipoObjeto.find((err, tipoObjeto) => {
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


/** siempre que es u  GET lo ponemos por parametro normalmente */
router
.route("/:id")
.get((req,res) => {
    TipoObjeto.findById(req.params.id,(err, tipoObjeto) => {
        console.log(req.params.id);
        if(err) throw err;
        res.json(tipoObjeto);
    })
})




/** siempre actualiza un objeto con id X */
router
.route("/:id")
.put((req,res) => {
   

     /* cargo el tipoobjeto con el id, quien hace la carga es el TipoObjeto con maysucola que es el elmento del dominio
     y carga en la variable objeto con minuscula el resultado */
     TipoObjeto.findById(req.params.id,(err, tipoObjeto) => {
       console.log(req.params.id);
       if(err) throw err;

       /* actualizamos los datos que vienen en el json */
       const { nombreTipo, codigoTipo } = req.body;     
       tipoObjeto.nombreTipo = nombreTipo;
       tipoObjeto.codigoTipo = codigoTipo;

       /* al guardar vemos si dio error lo damos si no damos ok */
       tipoObjeto.save(function(err)
       {
           if (err)
           {
               res.json(err);
           } else {
               res.json({message: "tipo Objeto se modifico bien)"});
           }
       });
   
   })
})

   /** borrar un tipo objeto con id X */
   router
   .route("/:id")
   .delete((req,res) => {       
        /* cargo el tipo objeto con el id, quien hace la carga es el Objeto con maysucola que es el elmento del dominio
        y carga en la variable objeto con minuscula el resultado */
        TipoObjeto.findById(req.params.id,(err, tipoobjeto) => {
          console.log(req.params.id);
          if(err) throw err;

          /* al guardar vemos si dio error lo damos si no damos ok */
          tipoobjeto.delete(function(err)
          {
              if (err)
              {
                  res.json(err);
              } else {
                  res.json({message: "Tipo Objeto se elimino bien)"});
              }
         });
      
      })
   })
module.exports = router;