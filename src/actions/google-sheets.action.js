"use server";
import { google } from "googleapis";

async function getSheetClient () {
  const credential = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
  );

  const glAuth = await google.auth.getClient({
    projectId: credential.project_id,
    credentials: {
      type: "service_account",
      project_id: credential.project_id,
      private_key_id: credential.private_key_id,
      private_key: credential.private_key,
      client_email: credential.client_email,
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
          formInput.phone,
          formInput.connectionFrom,
          formInput.adultGuests,
          formInput.kidGuests,
          formInput.location,
          formInput.mealPreference,
        ],
      ]
    }
  })

  console.info(`[invitation] ${formInput.name}; save res: `, res.status)
}

export async function saveWishes(formInput) {
  const sheets = await getSheetClient();
  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${process.env.WORKSHEET_WISHES}!${process.env.WORKSHEET_WISHES_COLUMNS}`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [
        [
          formInput.name,
          formInput.message,
        ],
      ]
    }
  })

  console.info(`[wishes] ${formInput.name}; save res: `, res.status)
}