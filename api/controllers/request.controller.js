import Request from "../models/request.model.js";

export const makeRequest = async (req, res) => {
  const newRequest = new Request(req.body);

  try {
    await newRequest.save();
    res.status(200).json('Request Created');
  } catch (error) {
    console.log(error);
  }
}

export const getRequest = async (req, res) => {

  const getRequest = await Request.find(req.body);

  res.status(200).json(getRequest)
}