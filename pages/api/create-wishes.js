"use server";
import { saveWishes } from "@src/actions/google-sheets.action";

export default async function handler(req, res) {
  const wishesData = JSON.parse(req.body);

  const result = await saveWishes(wishesData)

  if (!result?.config?.statusText === "ok") {
    res.status(500);
  }

  res.status(200).json({ message: 'A ok!' });
}