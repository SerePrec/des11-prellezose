import { Router } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

router.get("/productos-mock", async (req, res) => {
  res.sendFile("productos-mock.html", {
    root: path.join(__dirname, "..", "views")
  });
});

export default router;
