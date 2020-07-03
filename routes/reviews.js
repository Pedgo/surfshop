const express = require('express'),
      router  = express.Router({ mergeParams: true });

// Get reviews index /posts/:postId/reviews 
// Index
router.get('/', (req, res) => {
  res.send(`/posts/${req.params.postId}/reviews get Index`)
});
// Create
router.post('/', (req, res) => {
  res.send(`/posts/${req.params.postId}/reviews post Create`)
});
// Edit
router.get('/:reviewId/edit', (req, res) => {
res.send(`/posts/${req.params.postId}/reviews/${req.params.reviewId}/edit get Edit`)
});
// Update
router.put('/:reviewId', (req, res) => {
  res.send(`/posts/${req.params.postId}/reviews/${req.params.reviewId} put Update`)
});
// Destroy
router.delete('/:reviewId', (req, res) => {
  res.send(`/posts/${req.params.postId}/reviews/${req.params.reviewId} delete Destroy`)
});

module.exports = router;

/* 
INDEX   GET    /reviews/
NEW     GET    /reviews/new
CREATE  review   /reviews/
SHOW    GET    /reviews/:reviewId
EDIT    GET    /reviews/:reviewId/edit
UPDATE  PUT    /reviews/:reviewId
DESTROY DELETE /reviews/:reviewId
*/