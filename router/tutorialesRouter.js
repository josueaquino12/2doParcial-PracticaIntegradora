
const express = require('express');
const router = express.Router();
const tutorialesController = require('../controller/tutorialesController.js');


//obtener informacion
router.get("/", async (req, res, next) => {
    try {
        const tutoriales = await tutorialesController.getTutoriales();
        res.status(200).json(tutoriales);
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }
});


router.get("/:id", async (req, res, next) => {

    const id = req.params.id;
    try {
        const tutoriales = await tutorialesController.getTutorial(id);
        if (tutoriales !==undefined)
          res.status(200).json(tutoriales);
        else
          res.status(404).json("Not Found")
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }
  });

router.post("/", async(req, res, next) => {
    try {
        const tutorialAdd = await tutorialesController.addTutorial(req.body);
        res.status(201).json({ status: 'success', message: `${tutorialAdd} Tutorial agregado.`, tutorial: req.body })
    } catch (e) {
      res.status(500).json(e);
      next(e);
    }
  })


  router.put("/:id", async (req, res, next) => {

    const id = req.params.id;
    try {
        const updateTutorial = await tutorialesController.updateTutorial(id);
        if (updateTutorial === 1)
          res.status(200).json({status: 'success', message: `${removeTutorial} Tutorial actualizado.`});
        else
          res.status(404).json("Not Found")
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }
  });
  
  
  router.delete("/:id", async (req, res, next) => {

    const id = req.params.id;
    try {
        const removeTutorial = await tutorialesController.removeTutorial(id);
        if (removeTutorial === 1)
          res.status(200).json({status: 'success', message: `${removeTutorial} Tutorial eliminado.`});
        else
          res.status(404).json("Not Found")
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }
  });


  router.delete("/", async (req, res, next) => {

    try {
      const resp = await tutorialesController.removeTutoriales();
  
      if (resp !== 0)
        res.status(200).json({
          status: 'success',
          message: "Tutoriales borrados.",
        });
      else res.status(200).json({ message: "No hay tutoriales." });
    } catch (e) {
      res.status(500).json(e);
      next(e);
    }

  });

  module.exports = router