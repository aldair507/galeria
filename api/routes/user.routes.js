import express from "express";
import { upload } from "../config/multer.js";
import { uploadFile } from "../util/uploadFile.js";
import { User } from "../models/User.js";
import { async } from "@firebase/util";

const router = express();

router.get("/user", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ message: `ERROR! ${error}` });
  }
});
router.get("/user/:id", async (req, res) => {
  try {
    const uno = await User.findById(req.params.id);
    return res.status(200).json(uno);
  } catch (error) {
    return res.status(400).json({ message: `ERROR! ${error}` });
  }
});

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const eliminar = await User.findByIdAndDelete(req.params.id);
    if (!eliminar) return res.status(404).json({ message: "Usuario no encontrado" });
    res.send({message:"usuario eliminado"});
  } catch (error) {
    return res.status(500).json({ error: `ERROR! ${error}` });
  }
});


router.post(
  "/createuser",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    const body = req.body;
    const image = req.files.image;

    if (image && image.length > 0) {
      const { dowloadURL } = await uploadFile(image[0]);

      const newUser = await new User({
        firstname: body.firstname,
        lastname: body.lastname,
        image: dowloadURL,
      }).save();
      return res.status(200).json({
        newUser,
      });
    }

    return res.status(400).json({ message: "missing image in req.body" });
  }
);

export default router;
