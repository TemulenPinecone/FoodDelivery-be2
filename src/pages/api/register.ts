import { createUser } from "@/service/user";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ message: "Hello World" });

  try {
    const user = await createUser("firstName", "lastName", "email", 2);

    res.status(200).json({ message: "Successfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
