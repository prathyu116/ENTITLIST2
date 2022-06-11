const express = require("express");

const Population = require("../models/population.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 5;
    const sort = req.query.sort;
    const filter = req.query.query;

    // let id;
    // if (sort) {
    //   if (sort === "id_asc") {
    //     id = -1;
    //   } else if (sort === "id_desc") {
    //     id = 1;
    //   }
    // }
    console.log(filter);
    const skip = (page - 1) * pagesize;
    if (filter) {
      const datas = await Population.find({ country: { $regex: filter } })
        .skip(skip)
        .limit(pagesize)
        .sort({ id: sort })
        .lean()
        .exec();
      return res.status(200).send({ datas });
    } else {
      const datas = await Population.find().skip(skip).limit(pagesize).sort({ id: sort }).lean().exec();
      return res.status(200).send({ datas });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.post("", async (req, res) => {
  try {
    const product = await Population.create(req.body);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
