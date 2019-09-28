let animalService = require('../service/animal')

exports.animalList = function (req, res) {
  let id = req.query.id || '';

  return animalService.getAnimalList(id)
    .then(result => {
      res.json(result)
    }).catch(e => {
      console.log('controller animalList error', e)
      res.json({
        data: {},
        code: -1,
        msg: 'animalList interface error'
      })
    })
}
