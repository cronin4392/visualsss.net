import { NextApiRequest, NextApiResponse } from "next";

const sss = (_req: NextApiRequest, res: NextApiResponse): void => {
  return res.status(200).json({
    redirect: "https://www.visualsssssssss.net/?sssecret=visualsssssssss",
  });
};

export default sss;
