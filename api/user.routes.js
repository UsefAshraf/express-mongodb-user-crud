const router = require("express").Router();
const {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../service/user.services");

router.route('/')
  .post(addUser)
  .get(getUsers)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
