const SearchInput = require("../models/searchInput");

module.exports = {
  newInput: async (req, res) => {
    try {
      const newSearchInput = new SearchInput({ input: req.body.input });
      res.json(await newSearchInput.save());
    } catch (error) {
      res.send(error);
    }
  },

  getInputdb: async (req, res) => {
    try {
      res.json(await SearchInput.find());
    } catch (error) {
      res.send(error);
    }
  },

  deleteInput: async (req, res) => {
    try {
      res.json(await SearchInput.deleteMany({}));
    } catch (error) {
      res.send(error);
    }
  },
};
