
const router = require('express').Router()
const db = require('../models')

// Get
router.get('/', (req, res) => {
    db.Place.find(req.body)
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


// post
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
 
if (err && err.name == 'ValidationError') {
  let message = 'Validation Error: '
  for (var field in err.errors) {
      message += `${field} was ${err.errors[field].value}. `
      message += `${err.errors[field].message}`
  }
  console.log('Validation error message', message)
  res.render('places/new', { message })
}
else {
  res.render('error404')
}
  })
})

// Add places Route
router.get('/new', (req, res) => {
  res.render('places/new')
})


// show page
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

// update route
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// delete Route
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// edit route
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router




































// const express = require('express')
// const router = express.Router()
// const places = require('../models/places')

// // GET /places
// router.get('/', (req, res) => {
//     let places = [{
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: 'http://placekitten.com/250/250'
//       }, {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: 'http://placekitten.com/250/250'
//       }]
//     res.render('places/index',{places})
//   })
// //   post route
//   router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//       req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//       req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
//   })
// // New Route
// router.get('/new', (req,res)=>{
//     res.render('places/new')
// })
// // Edit
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id] })
//   }
// })
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })
// // show

// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id })
//     }
//   })
//   // delete route
//   router.delete('/places/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id, 1)
//       res.redirect('/places')
//     }
//   })
//   // put route
//   // router.put('/:id', (req, res) => {
//   //   let id = Number(req.params.id)
//   //   if (isNaN(id)) {
//   //       res.render('error404')
//   //   }
//   //   else if (!places[id]) {
//   //       res.render('error404')
//   //   }
//   //   else {
//   //       // Dig into req.body and make sure data is valid
//   //       if (!req.body.pic) {
//   //           // Default image if one is not provided
//   //           req.body.pic = 'http://placekitten.com/400/400'
//   //       }
//   //       if (!req.body.city) {
//   //           req.body.city = 'Anytown'
//   //       }
//   //       if (!req.body.state) {
//   //           req.body.state = 'USA'
//   //       }
  
//   //       // Save the new data into places[id]
//   //       places[id] = req.body
//   //       res.redirect(`/places/${id}`)
//   //   }
//   // })
// module.exports = router