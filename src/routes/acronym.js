let AcronymModel = require('../models/acronym.model')
let express = require('express')
let router = express.Router()

// Create a new acronym
// POST localhost:3000/acronym
router.post('/acronym', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  if(!req.body.acronym) {
    // ...
  }

  // let user = {
  //   acronym: 'FSKK',
  //   fullname: 'FIL Securities Kabushiki Kaisha'
  // }

  let model = new AcronymModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.get('/acronym', (req, res) => {
  if(!req.query.acronym) {
    return res.status(400).send('Missing URL parameter: acronym')
  }

  AcronymModel.findOne({
    acronym: req.query.acronym
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/acronym', (req, res) => {
  if(!req.query.acronym) {
    return res.status(400).send('Missing URL parameter: acronym')
  }

  AcronymModel.findOneAndUpdate({
    acronym: req.query.acronym
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/acronym', (req, res) => {
  if(!req.query.acronym) {
    return res.status(400).send('Missing URL parameter: acronym')
  }

  AcronymModel.findOneAndRemove({
    acronym: req.query.acronym
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router