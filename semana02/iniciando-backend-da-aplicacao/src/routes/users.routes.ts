import { Router, request, response } from "express";
import multer from "multer";

import CreateUserService from "../services/CreateUserService";
import UpdateAvatarUserService from "../services/UpdateUserAvatarService";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import uploadConfig from "../config/upload";

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post("/", async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  response.json(user);
});

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    const updateUserAvatar = new UpdateAvatarUserService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id, // ensureAuthenticated
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
);

export default usersRouter;