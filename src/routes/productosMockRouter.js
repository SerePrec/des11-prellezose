import { Router } from "express";
import { generateMockProduct } from "../utils/mockProduct.js";

const router = Router();

router.get("/productos-test", (req, res) => {
  const mockProductos = [];
  const cantProd = 5;
  for (let i = 1; i <= cantProd; i++) {
    mockProductos.push(generateMockProduct(i));
  }
  res.json(mockProductos);
});

export default router;
