import { placeholder } from "i18n-js";

const baseConfig = {
  weddingDay: "Saturday",
  weddingTimestamp: new Date(1729242000000).toISOString(),
  weddingTime: "16.00 - 22.00",
  weddingDate: "Oct 19, 2024",
  showBuiltWithInfo: true,
  showQrCode: false,
  weddingClockText: {
    days: "days",
    hours: "hours"
  },
  calendarInfo: {
    timeStartISO: new Date(1729242000000).toISOString(), // Fri Oct 18, 2024 04:00pm Asia/Ho Chi Minh (+07)
    timeEndISO: new Date(1729400400000).toISOString(), // Sun Oct 20, 2024 12:00pm Asia/Ho Chi Minh (+07)
  },
  coupleInfo: {
    brideName: "Ha",
    groomName: "Nalin",
    coupleNameFormat: "BRIDE_FIRST",
  },
  ceremony: {
    mapText: "View on map",
    timelineSubheading: "(Vietnam)",
    events: [
      {
        order: 1,
        type: "Place of Event",
        details: "Australia - 02/10 (6pm)",
        place: "Moon Dog World",
        location: "32 Chifley Dr, Preston VIC 3072",
        mapUrl: "https://maps.app.goo.gl/L19KVoBmvfd4Z8zq9"
      },
      {
        order: 2,
        type: "Hotel Location",
        details: "Vietnam - 18/10 (Check-in 2pm)",
        place: "Sunset Hill Hotel",
        location: "5/24 Nguyen Huu Canh Street - Ward 8 - Da Lat",
        mapUrl: "https://maps.app.goo.gl/rwQeyWtFK6mpWsrg8",
      },
      {
        order: 3,
        type: "Place of Event",
        details: "Vietnam - 19/10 (4pm)",
        place: "J'adore Homestay",
        location: "A26 Nguyen Huu Canh Street - Ward 8 - Da Lat",
        mapUrl: "https://maps.app.goo.gl/4R2cKoFt297ys2HK7",
      },
      {
        order: 4,
        type: "Place of Event",
        details: "India - 26/10 (7pm)",
        place: "Milan Vatika",
        location: "Sector 11, Block B, Faridabad, Haryana 121006",
        mapUrl: "https://maps.app.goo.gl/XTM83naVfN9E5Zg17",
      }
    ]
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4",
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "hanalintravelthe.world",
    publishedTime: "2024-08-26",
  },
  invitationForm: {
    input: {
      helpText: "Missed me, Really?",
      name: {
        placeholder: "Your name",
      },
      phone: {
        placeholder: "Your phone",
      },
      connectionFrom: {
        placeholder: "How did we meet?",
        options: [
          { value: "Nalin's family", text: "Nalin's family" },
          { value: "Cindee's family", text: "Cindee's family" },
          { value: "Nalin's friends", text: "Nalin's friends" },
          { value: "Primary school CVA", text: "Primary school CVA" },
          { value: "Secondary school NTT", text: "Secondary school NTT" },
          { value: "High school KL", text: "High school KL" },
          { value: "University FPT", text: "University FPT" },
          { value: "Uber", text: "Uber" },
          { value: "NUS", text: "NUS" },
          { value: "Lille (France)", text: "Lille (France)" },
          { value: "NashTech", text: "NashTech" },
          { value: "AIA", text: "AIA" },
          { value: "Oolio", text: "Oolio" },
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
        placeholder: "Where will you be attending?",
        options: [
          { value: "Dalat", text: "Dalat (Vietnam)" },
          { value: "Faridabad", text: "Faridabad (India)" },
          { value: "Melbourne", text: "Melbourne (AU)" },
        ],
      },
      stay: {
        placeholder: "Would you like us to arrange your stay?",
        options: [
          { value: "Yes", text: "Book hotel for us" },
          { value: "No", text: "We will arrange ourselves" },
        ],
      },
      mealPreference: {
        placeholder: "Meal preferences?",
        options: [
          { value: "Non-Veg", text: "Non Veg" },
          { value: "Veg", text: "Veg" },
        ],
      },
    },
    formButton: {
      text: "Count me in!",
    },
    formAlert: "Please let us know if you can attend our party before 20/09/2024 so that we can arrange your stays perfectly. Wish to see you around, very soon friends! 🧡",
    successMessage: `Okei dokei! See you there with lots of love 🫶🏻`
  },
  wishesForm: {
    input: {
      helpText: "Missed me, Really?",
      name: {
        placeholder: "Your name",
      },
      message: {
        placeholder: "Share your heartfelt wishes with us…",
      },
    },
    formButton: {
      text: "Send now"
    },
    successMessage: `Thanks for the wishes! lots of love 🫶🏻`
  },
  headers: {
    home: "Home",
    ourStory: "Our Story",
    ceremony: "Ceremony",
    rsvp: "RSVP",
    showtime: "Showtime",
    wishes: "Send Wishes"
  }
};

const lang = {
  vn: {
    weddingDay: "Thứ bảy",
    weddingDate: "19 tháng 10 2024",
    weddingClockText: {
      days: "ngày",
      hours: "giờ"
    },
    ceremony: {
      mapText: "Xem bản đồ",
      timelineSubheading: "(Việt Nam)",
      events: [
        {
          order: 1,
          type: "Địa điểm tiệc",
          details: "Úc - 02/10 (6pm)",
          place: "Moon Dog World",
          location: "32 Chifley Dr, Preston VIC 3072",
          mapUrl: "https://maps.app.goo.gl/L19KVoBmvfd4Z8zq9"
        },
        {
          order: 2,
          type: "Địa điểm khách sạn",
          details: "Việt Nam - 18/10 (Check-in 2pm)",
          place: "Sunset Hill Hotel",
          location: "A26 đường Nguyễn Hữu Cảnh",
          mapUrl: "https://maps.app.goo.gl/rwQeyWtFK6mpWsrg8",
        },
        {
          order: 3,
          type: "Địa điểm tiệc",
          details: "Việt Nam - 19/10 (4pm)",
          place: "J'adore Homestay",
          location: "A26 Nguyen Huu Canh Street - Ward 8 - Da Lat",
          mapUrl: "https://maps.app.goo.gl/4R2cKoFt297ys2HK7",
        },
        {
          order: 4,
          type: "Địa điểm tiệc",
          details: "Ấn Độ - 26/10 (7pm)",
          place: "Milan Vatika",
          location: "Sector 11, Block B, Faridabad, Haryana 121006",
          mapUrl: "https://maps.app.goo.gl/XTM83naVfN9E5Zg17",
        }
      ],
    },
    invitationForm: {
      input: {
        helpText: "Thiếu rồi bạn ơi, điền nốt nè!",
        name: {
          placeholder: "Tên của bạn",
        },
        phone: {
          placeholder: "Số điện thoại của bạn",
        },
        connectionFrom: {
          placeholder: "Mình biết nhau như thế nào?",
          options: [
            { value: "Nalin's family", text: "Gia đình Nalin" },
            { value: "Cindee's family", text: "Gia đình Cindee" },
            { value: "Nalin's fiends", text: "Bạn bè Nalin" },
            { value: "Primary school CVA", text: "Tiểu học CVA" },
            { value: "Secondary school NTT", text: "Cấp 2 NTT" },
            { value: "High school KL", text: "Cấp 3 KL" },
            { value: "University FPT", text: "Đại học FPT" },
            { value: "Uber", text: "Uber" },
            { value: "NUS", text: "NUS" },
            { value: "Lille (France)", text: "Lille (Pháp)" },
            { value: "NashTech", text: "NashTech" },
            { value: "AIA", text: "AIA" },
            { value: "Oolio", text: "Oolio" },
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
        stay: {
          placeholder: "Bạn có muốn chúng mình thu xếp chỗ nghỉ ở Đà Lạt không?",
          options: [
            { value: "Yes", text: "Thu xếp chỗ ở cho mình" },
            { value: "No", text: "Không cần đặt khách sạn cho mình" },
          ],
        },
        mealPreference: {
          placeholder: "Bạn muốn ăn gì nhỉ?",
          options: [
            { value: "Non-Veg", text: "Ăn mặn" },
            { value: "Veg", text: "Ăn chay" },
          ],
        },
      },
      formButton: {
        text: "Ấn vào đây tức là sẽ đi ạ!",
      },
      formAlert: "Mình cố gắng điền vào đây trước ngày 20/9/2024 (nếu có thể tham dự) để gia đình chuẩn bị chu đáo tươm tất nhé ạ! Mãi yêu 🧡",
      successMessage: `Ok luôn! Yêu thương hẹn gặp lại nhó 🫶🏻`
    },
    wishesForm: {
      input: {
        helpText: "Thiếu rồi bạn ơi, điền nốt nè!",
        name: {
          placeholder: "Tên của bạn",
        },
        message: {
          placeholder: "Viết lời chúc cho tụi mình vào đây nè…",
        },
      },
      formButton: {
        text: "Gửi lời chúc nè"
      },
      successMessage: `Cảm ơn những lời chúc! nhiều tình yêu 🫶🏻`
    },
    headers: {
      home: "Trang chủ",
      ourStory: "Câu chuyện",
      ceremony: "Sự kiện",
      rsvp: "Lời hồi âm",
      showtime: "Khoảnh khắc",
      wishes: "Gửi lời chúc"
    }
  },
};

export default {
  ...baseConfig,
  lang,
};
