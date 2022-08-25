const router = require("express").Router();
const User = require("../models/User.model");


router.get("/profile", (req, res, next) => {
  const { id } = req.payload;
  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.json(err));
});


router.put("/profile/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, profileImg } = req.body;

  User.findByIdAndUpdate(id, {name, profileImg}, { new: true })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err));
});


// Do I really need this route?
router.delete('/profile/:id', (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
  .then(() => res.status(200).json({message: `User ${user.name} deleted!`}))
  .catch((err) => res.json(err));
})


module.exports = router;