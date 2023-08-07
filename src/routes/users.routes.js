const { Router } = require("express");
const usersRouter = Router();
const UsersController = require("../controllers/UsersController");

const usersControllers = new UsersController();
function MyMiddlewares(req, res, next) {
  console.log("Passou pelo Middleware");
  if (req.body.isAdmin == "false") {
    return res.json({ message: "Token invalid" });
  }
  next()
}
usersRouter.use(MyMiddlewares);
usersRouter.post("/", usersControllers.create);

module.exports = usersRouter;
