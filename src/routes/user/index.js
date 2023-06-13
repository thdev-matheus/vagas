import { Router } from "express";

import { createUserVerifyFieldsMiddleware } from "../../middleware/createUserVerifyFields.middleware.js";
import { updatePartialUserVerifyFieldsMiddleware } from "../../middleware/updatePartialUserVerifyFields.middleware.js";

import { createUserController } from "../../controllers/user/createUser.controller.js";
import { getAllUsersController } from "../../controllers/user/getAllUsers.controller.js";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller.js";
import { updatePartialUserController } from "../../controllers/user/updatePartialUser.controller.js";
import { deleteUserController } from "../../controllers/user/deleteUser.controller.js";

const router = Router();

export const userRoutes = () => {
  router.post("", createUserVerifyFieldsMiddleware, createUserController);

  router.get("", getAllUsersController);
  router.get("/:userId", retrieveUserController);

  router.patch(
    "/:userId",
    updatePartialUserVerifyFieldsMiddleware,
    updatePartialUserController
  );

  router.delete("/:userId", deleteUserController);

  return router;
};
