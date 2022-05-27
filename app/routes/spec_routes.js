const express = require('express')
// const { resetWatchers } = require('nodemon/lib/monitor/watch')
const passport = require('passport')
// const survey = require('./../models/survey')

const router = express.Router()

const requireToken = passport.authenticate('bearer', { session: false })

// const handle404 = require('./../lib/custom_errors')

const Post = require('./../models/post')

router.get('/specs', requireToken, (req, res, next) => {
  Post.find()
  // .populate('owner')
    .then((posts) => {
      // `surveys` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return posts.map((post) => post.toObject())
    })
  // respond with status 200 and JSON of the surveys
    .then((posts) => res.status(200).json({ posts: posts }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

router.post('/specs', requireToken, (req, res, next) => {
  const specData = req.body.spec

  const postId = specData.postId

  Post.findById(postId)
  // .then(handle404)
    .then((post) => {
      post.spec.push(specData)

      return post.save()
    })
    .then((post) => res.status(201).json({ post: post }))
    .catch(next)
})

router.get('/specs/:specID', requireToken, (req, res, next) => {
  const specID = req.params.specID
  const postID = req.body.spec.postId
  // console.log(req.body)

  // req.params.id will be set based on the `:id` in the route
  Post.findById(postID)
    .then((post) => {
      const spec = post.spec.id(specID)

      return spec
    })
  // console.log(responseID, surveyID, survey, responseData)
  // const response = survey.responses.id(responseID)

  // response.get(responseData)

  // return survey.save()
  // .then(handle404)
  // if `findById` is succesful, respond with 200 and "survey" JSON
    .then((spec) => res.status(200).json({ spec: spec.toObject() }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

router.patch('/specs/:specID', requireToken, (req, res, next) => {
  const specID = req.params.specID
  const specData = req.body.spec
  const postID = specData.postId

  Post.findById(postID)
  // .then(handle404)
    .then((post) => {
      const spec = post.spec.id(specID)

      spec.set(specData)

      return post.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.delete('/specs/:specID', requireToken, (req, res, next) => {
  const specID = req.params.specID
  const postID = req.body.spec.postId

  Post.findById(postID)
  // .then(handle404)
    .then((post) => {
      const spec = post.spec.id(specID)

      spec.remove()

      return post.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
