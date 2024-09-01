import { placeholder } from "i18n-js";

const baseConfig = {
  weddingDay: "Saturday",
  weddingTimestamp: new Date(1729242000000).toISOString(),
  weddingTime: "16.00 - 22.00",
  weddingDate: "Oct 19, 2024",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: new Date(1729242000000).toISOString(), // Fri Oct 18, 2024 04:00pm Asia/Ho Chi Minh (+07)
    timeEndISO: new Date(1729400400000).toISOString(), // Sun Oct 20, 2024 12:00pm Asia/Ho Chi Minh (+07)
  },
  coupleInfo: {
    brideName: "Ha",
    groomName: "Nalin",
    coupleNameFormat: "BRIDE_FIRST",
  },
  venue: {
    name: "J'adore Homestay",
    addressLine1: "A26 Nguyen Huu Canh Street",
    addressLine2: "Ward 8",
    city: "Da Lat",
    country: "Vietman",
    mapUrl: "https://maps.app.goo.gl/4R2cKoFt297ys2HK7",
    mapText: "View on map",
  },
  hotel: {
    name: "Sunset Hill Hotel",
    addressLine1: "5/24 Nguyen Huu Canh Street",
    addressLine2: "Ward 8",
    city: "Da Lat",
    country: "Vietman",
    mapUrl: "https://maps.app.goo.gl/rwQeyWtFK6mpWsrg8",
    mapText: "View on map",
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4",
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2024-08-26",
  },
  invitationForm: {
    input: {
      helpText: "Missed me, Really?",
      name: {
        placeholder: "Your good name",
      },
      email: {
        placeholder: "Your email",
      },
      connectionFrom: {
        placeholder: "How did we meet?",
        options: [
          { value: "Nalin's family", text: "Nalin's family" },
          { value: "Cindee's family", text: "Cindee's family" },
          { value: "Primary school CVA", text: "Primary school CVA" },
          { value: "Secondary school NTT", text: "Secondary school NTT" },
          { value: "High school KL", text: "High school KL" },
          { value: "University FPT", text: "University FPT" },
          { value: "Uber", text: "Uber" },
          { value: "NUS", text: "NUS" },
          { value: "Lille (France)", text: "Lille (France)" },
          { value: "NashTech", text: "NashTech" },
          { value: "AIA", text: "AIA" },
          { value: "Melbourne (Australia)", text: "Melbourne (Australia)" },
          { value: "Some secret place (Cannot find in this list)", text: "Some secret place (Cannot find in this list)" },
        ],
      },
      adultGuests: {
        placeholder: "How many adults joining?",
      },
      kidGuests: {
        placeholder: "Are you coming with kids?",
      },
      location: {
        placeholder: "Where Will You Be Attending?",
        options: [
          { value: "Dalat", text: "Dalat (Vietnam)" },
          { value: "Faridabad", text: "Faridabad (India)" },
          { value: "Melbourne", text: "Melbourne (AU)" },
        ],
      },
      mealPreference: {
        placeholder: "Meal Preferences?",
        options: [
          { value: "Non-Veg", text: "Non Veg" },
          { value: "Veg", text: "Veg" },
        ],
      },
    },
    formButton: {
      text: "Count me in!",
    },
    successMessage: `Okei dokei! See you there with lots of love 🫶🏻`
  },
};

const lang = {
  vn: {
    weddingDay: "Thứ bảy",
    weddingDate: "19 tháng 10 2024",
    venue: {
      ...baseConfig.venue,
      addressLine1: "A26 đường Nguyễn Hữu Cảnh",
      addressLine2: "Phường 8",
      city: "Đà Lạt",
      country: "Việt Nam",
      mapUrl: "https://maps.app.goo.gl/miR4hMaBzKLCTrHB6",
      mapText: "Xem bản đồ",
    },
    hotel: {
      ...baseConfig.venue,
      addressLine1: "5/24 đường Nguyễn Hữu Cảnh",
      addressLine2: "Phường 8",
      city: "Đà Lạt",
      country: "Việt Nam",
      mapUrl: "https://maps.app.goo.gl/miR4hMaBzKLCTrHB6",
      mapText: "Xem bản đồ",
    },
    invitationForm: {
      input: {
        helpText: "Thiếu rồi bạn ơi, điền nốt nè!",
        name: {
          placeholder: "Tên của bạn",
        },
        email: {
          placeholder: "Số điện thoại của bạn",
        },
        connectionFrom: {
          placeholder: "Mình biết nhau như thế nào?",
          options: [
            { value: "Nalin's family", text: "Gia đình Nalin" },
            { value: "Cindee's family", text: "Gia đình Cindee" },
            { value: "Primary school CVA", text: "Tiểu học CVA" },
            { value: "Secondary school NTT", text: "Cấp 2 NTT" },
            { value: "High school KL", text: "Cấp 3 KL" },
            { value: "University FPT", text: "Đại học FPT" },
            { value: "Uber", text: "Uber" },
            { value: "NUS", text: "NUS" },
            { value: "Lille (France)", text: "Lille (Pháp)" },
            { value: "NashTech", text: "NashTech" },
            { value: "AIA", text: "AIA" },
            { value: "Melbourne (Australia)", text: "Melbourne (Úc)" },
            { value: "Some secret place (Cannot find in this list)", text: "Đâu đó khác (Hem thấy trong danh sách này luôn)" },
          ],
        },
        adultGuests: {
          placeholder: "Số lượng người lớn?",
        },
        kidGuests: {
          placeholder: "Số lượng em bé?",
        },
        location: {
          placeholder: "Bạn sẽ tham dự ở đâu?",
          options: [
            { value: "Dalat", text: "Đà Lạt (Việt Nam)" },
            { value: "Faridabad", text: "Faridabad (Ấn Độ)" },
            { value: "Melbourne", text: "Melbourne (Úc)" },
          ],
        },
        mealPreference: {
          placeholder: "Bạn muốn ăn gì nhỉ?",
          options: [
            { value: "Non-Veg", text: "Ăn chay" },
            { value: "Veg", text: "Ăn mặn" },
          ],
        },
      },
      formButton: {
        text: "Ấn vào đây tức là sẽ đi ạ!",
      },
      successMessage: `Ok luôn! Yêu thương hẹn gặp lại nhó 🫶🏻`
    },
  },
};

export default {
  ...baseConfig,
  lang,
};
