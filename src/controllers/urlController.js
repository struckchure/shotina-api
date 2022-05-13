import urlModel from "../models/urlModel.js";

export const listURL = async (_, res) => {
  const urls = await urlModel.find();

  res.status(200).json(urls);
};

export const shortenURL = async (req, res) => {
  const { body: url_data } = req;

  const url = new urlModel(url_data);
  url
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

export const getURL = async (req, res) => {
  const { slug } = req.params;

  const url = await urlModel.exists({ slug: slug });

  if (url) {
    const { _id: id } = url;
    const __url = await urlModel.findById(id);

    res.status(200).json(__url);
  } else {
    res.status(404).json({ error: "Not found" });
  }
};

export const updateURL = async (req, res) => {
  const { slug } = req.params;

  const url = await urlModel.exists({ slug: slug });

  if (url) {
    const { _id: id } = url;
    const { body: url_update_data } = req;

    const __url = await urlModel.findByIdAndUpdate(id, url_update_data, {
      new: true,
    });

    res.status(200).json(__url);
  } else {
    res.status(404).json({ error: "Not found" });
  }
};

export const deleteURL = async (req, res) => {
  const { slug } = req.params;

  const url = await urlModel.exists({ slug: slug });

  if (url) {
    const { _id: id } = url;

    await urlModel.findByIdAndDelete(id);

    res.status(204).json();
  } else {
    res.status(404).json({ error: "Not found" });
  }
};
