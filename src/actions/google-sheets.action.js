"use server";
import { google } from "googleapis";

async function getSheetClient () {
  const glAuth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth: glAuth });
}


export async function saveInvitation(formInput) {
  const sheets = await getSheetClient();
  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${process.env.WORKSHEET_GUESTS}!${process.env.WORKSHEET_GUESTS_COLUMNS}`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [
        [
          formInput.name,
          formInput.email,
          formInput.connectionFrom,
          formInput.adultGuests,
          formInput.kidGuests,
          formInput.location,
          formInput.mealPreference,
        ],
      ]
    }
  })

  console.log("Invitation save res: ", res)
}