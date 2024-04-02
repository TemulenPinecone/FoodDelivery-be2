import { NextApiRequest, NextApiResponse } from "next";

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://pineconetemulen:A2ljh5WdAGUnDtU6@temulenpinecone.ejybxr9.mongodb.net/";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const connect = async () => {
    try {
      await mongoose.connect(uri);
      console.log("connection successful");
    } catch (error) {
      console.log(error);
    }
  };
  connect();
};

export default handler;
