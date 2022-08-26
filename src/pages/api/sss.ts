import { NextApiRequest, NextApiResponse } from "next";

const sss = (req: NextApiRequest, res: NextApiResponse): void => {
  const { sssecret } = req.body;
  if (sssecret === "ssssss") {
    return res.status(200).json({
      redirect: "https://www.visualsssssssss.net/?sssecret=visualsssssssss",
    });
  }

  return res.status(200).json({
    status: "error",
    message: "invalid request",
  });
};

export default sss;
