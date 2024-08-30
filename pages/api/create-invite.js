"use server";
import { saveInvitation } from "@src/actions/google-sheets.action";

export default async function handler(req, res) {
  const invitationData = JSON.parse(req.body);

  const result = await saveInvitation(invitationData)

  if (!result?.config?.statusText === "ok") {
    res.status(500);
  }

  res.status(200).json({ message: 'A ok!' });
}