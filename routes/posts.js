const express = require('express'),
      router  = express.Router();

// Get posts index /posts 
// Index
router.get('/', (req, res) => {
  res.send('/posts get Index')
});
// New
router.get('/new', (req, res) => {
  res.send('/posts/new get New')
});
// Create
router.post('/', (req, res) => {
  res.send('/posts post Create')
});
// Show
router.get('/:postId', (req, res) => {
  res.send('/posts/:postId get Show')
});
// Edit
router.get('/:postId/edit', (req, res) => {
  res.send('/posts/:postId/edit get Edit')
});
// Update
router.put('/:postId', (req, res) => {
  res.send('/posts/:postId put Update')
});
// Destroy
router.delete('/:postId', (req, res) => {
  res.send('/posts/:postId delete Destroy')
});

module.exports = router;

/* 
INDEX   GET    /posts/
NEW     GET    /posts/new
CREATE  POST   /posts/
SHOW    GET    /posts/:postId
EDIT    GET    /posts/:postId/edit
UPDATE  PUT    /posts/:postId
DESTROY DELETE /posts/:postId
*/