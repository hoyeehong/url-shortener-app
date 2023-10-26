import express from "express";
import { nanoid } from "nanoid";
import Url from "../models/url.js";
// import { validateUrl } from "../utils/utils.js";
import isUrl from "is-url";
import "dotenv/config";

const router = express.Router();

// Short URL Generator
router.post("/short", async (req, res) => {
  const { origUrl } = req.body;
  console.log(`req.body: ${JSON.stringify(req.body)}`);
  const base = process.env.BASE;

  const urlId = nanoid();
  if (isUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url.shortUrl);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url.shortUrl);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
});

export default router;
