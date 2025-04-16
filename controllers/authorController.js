const authorService = require('../services/authorService');

// Create an author
// add comment 1
// add comment 2
// add comment 3
// add comment 4
// add comment 5
// add comment 6
// add comment 7
// add comment 8
// add comment 9
// add comment 10
// add comment 11
// add comment 12
// add comment 14
// add comment 15
// add comment 16
// add comment 17
// add comment 18
// add comment 19
// add comment 20
// add comment 21
// add comment 22
exports.createAuthor = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const newAuthor = await authorService.createAuthor(name, nationality);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all authors
exports.getAuthors = async (req, res) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an author
exports.updateAuthor = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const updatedAuthor = await authorService.updateAuthor(req.params.id, name, nationality);
    if (!updatedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an author
exports.deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await authorService.deleteAuthor(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json({ message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
