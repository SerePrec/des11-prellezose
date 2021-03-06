import { Router } from "express";
import { productsModel } from "../models/index.js";
import {
  validateId,
  validatePostBody,
  validatePutBody
} from "../middelwares/validateData.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const lista = await productsModel.getAll();
    res.json(lista);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo recuperar la infomación"
    });
  }
});

router.post("/", validatePostBody, async (req, res) => {
  try {
    let { title, price, thumbnail } = req.body;
    let newProduct = { title, price, thumbnail };
    newProduct = await productsModel.save(newProduct);
    res.json({ result: "ok", newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo agregar el producto"
    });
  }
});

router.get("/:id", validateId, async (req, res) => {
  try {
    const producto = await productsModel.getById(req.params.id);
    producto !== null
      ? res.json(producto)
      : res.json({ error: "Producto no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo recuperar la infomación"
    });
  }
});

router.put("/:id", validateId, validatePutBody, async (req, res) => {
  try {
    const { title, price, thumbnail } = req.body;
    const { id } = req.params;
    let updateProduct = { title, price, thumbnail };
    updateProduct = await productsModel.updateById(id, updateProduct);
    updateProduct !== null
      ? res.json({ result: "ok", updateProduct })
      : res.json({ error: "Producto no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo actualizar el producto"
    });
  }
});

router.delete("/:id", validateId, async (req, res) => {
  try {
    const deletedId = await productsModel.deleteById(req.params.id);
    deletedId !== null
      ? res.json({ result: "ok", deletedId })
      : res.json({ error: "Producto no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo eliminar el producto"
    });
  }
});

export default router;
