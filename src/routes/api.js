import express from "express";
import userController from "../controllers/userController";
import productController from "../controllers/productController";

const router = express.Router();

const adminRoute = (app) => {
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  router.get("/product/read", productController.readFunc);
  router.get("/product/read/:slug", productController.readFuncDetail);
  router.post("/product/create", productController.createFunc);
  router.put("/product/update", productController.updateFunc);
  router.delete("/product/delete", productController.deleteFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
