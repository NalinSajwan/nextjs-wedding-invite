import Head from "@src/components/Head";
import resolvePath from "@src/utils/resolvePath";
import appConfig from "@src/config/app";
import { useTranslation, defaultLocale } from "@src/i18n";
import format from "date-fns/format";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import Gallery from "react-photo-gallery";
import Countdown from "react-countdown";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useParams } from "next/navigation";

const STORY_TEXT_CUSTOM = {
  en: {
    0: { width: "125px" },
    1: { width: "125px" },
    2: { width: "230px" },
    3: { width: "200px" },
    4: { width: "150px" },
  },
  vn: {
    0: { width: "230px" },
    1: { width: "190px" },
    2: { width: "205px" },
    3: { width: "230px", marginRight: "14%" },
    4: { width: "150px" },
  },
};

const translateConfig = (appConfig, locale) => {
  if (!locale || locale === defaultLocale) {
    return appConfig;
  }
  // Replace config with lang
  const configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error("invalid locale: ", locale);
  }
  return { ...appConfig, ...configLang };
};

const ShowInvite = ({ currentUrl, guest }) => {
  const params = useParams();
  const locale = params.locale;

  const t = useTranslation(locale);
  const [show, toggleBar] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [wishesSuccess, setWishesSuccess] = useState(false);

  const {
    register: registerInvite,
    handleSubmit: handleSubmitInvite,
    formState: { errors: inviteErrors },
  } = useForm();

  const {
    register: registerWishes,
    handleSubmit: handleSubmitWishes,
    formState: { errors: wishesErrors },
  } = useForm();

  const toggleNavBar = useCallback(
    (e) => {
      toggleBar(!show);
    },
    [show]
  );

  // Initiate config variables
  const {
    logo,
    ogTags,
    coupleInfo,
    venue,
    hotel,
    headers: headersText,
    weddingDay,
    weddingDate,
    weddingClockText,
    weddingTimestamp,
    weddingTime,
    invitationForm,
    wishesForm,
    calendarInfo,
  } = translateConfig(appConfig, locale);
  const { brideName, groomName, coupleNameFormat } = coupleInfo;

  const coupleNameStr =
    coupleNameFormat === "GROOM_FIRST"
      ? `${groomName} & ${brideName}`
      : `${brideName} & ${groomName}`;
  const coupleName =
    coupleNameFormat === "GROOM_FIRST" ? (
      <>
        {groomName} <span>&amp;</span> {brideName}
      </>
    ) : (
      <>
        {brideName} <span>&amp;</span> {groomName}
      </>
    );

  // Venue info
  const venueBrief = `${venue.name}, ${venue.city}, ${venue.country}`;
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`;

  // Event info
  const eventTitle = `${coupleNameStr}'s Wedding`;
  let eventDescription = `${weddingDateBrief} at ${venue.name}, ${venue.city}`;
  if (guest.name) {
    eventDescription = `Dear ${guest.name}, you are cordially invited to our wedding on ${weddingDate} at ${venue.name}. Looking forward to seeing you!`;
  }

  const startDateTime = new Date(calendarInfo.timeStartISO);
  const endDateTime = new Date(calendarInfo.timeEndISO);

  // Calendar payload
  const calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: `${venue.city}, ${venue.country}`,
    startDate: format(startDateTime, "yyyy-MM-dd"),
    endDate: format(endDateTime, "yyyy-MM-dd"),
    startTime: format(startDateTime, "HH:mm"),
    endTime: format(endDateTime, "HH:mm"),
  };

  const storyContent = Array.from({ length: 5 }, (_, i) => {
    let customClass = "";

    switch (i) {
      case 3:
        customClass = "align-right";
        break;
      case 4:
        customClass = "align-left";
        break;
    }

    return {
      image: `story_element_${i + 1}_image`,
      text: `story_element_${i + 1}_text`,
      style: STORY_TEXT_CUSTOM[locale]?.[i],
      customClass,
    };
  });

  const onInviteSubmit = async (data) => {
    const res = await fetch("/api/create-invite", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Request failed: ", res);
      return;
    }

    setInviteSuccess(true);
  };

  const onWishesSubmit = async (data) => {
    const res = await fetch("/api/create-wishes", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Request failed: ", res);
      return;
    }

    setWishesSuccess(true);
  };

  const photos = [
    {
      src: `assets/images/pre_wedding_photos/IMG_01.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_02.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_03.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_04.JPG`,
      width: 1,
      height: 1.5,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_05.JPG`,
      width: 1,
      height: 1.5,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_06.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_07.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_08.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_09.JPG`,
      width: 1,
      height: 1.5,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_10.JPG`,
      width: 1,
      height: 1.4,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_11.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_12.JPG`,
      width: 1,
      height: 1.6,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_15.JPG`,
      width: 1,
      height: 1.4,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_13.JPG`,
      width: 1.5,
      height: 1,
    },
    {
      src: `assets/images/pre_wedding_photos/IMG_14.JPG`,
      width: 1.5,
      height: 1,
    },
  ];

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        <div className={`countdownWrapper ${locale}`}>
          <div className="countdownSection">
            <div className="countWrapper count-days">
              <div className="count">{days}</div>
              <div className="unit">
                {weddingClockText.days}
              </div>
            </div>
            <div className="countWrapper count-hours">
              <div className="count">{hours}</div>
              <div className="unit">
                {weddingClockText.hours}
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  };

  const imageRenderer = ({ index, left, top, key, photo }) => {
    const cont = {
      cursor: "pointer",
      overflow: "hidden",
      position: "absolute",
      left,
      top,
    };

    return (
      <div
        key={`image-renderer-${key + 1}`}
        style={{
          margin: "2px",
          height: photo.height,
          width: photo.width,
          ...cont,
        }}
      >
        <PhotoView key={index} src={photo.src}>
          <img src={photo.src} alt="" />
        </PhotoView>
      </div>
    );
  };

  const headers = [
    {
      href: "#",
      value: "home",
      text: headersText.home,
    },
    {
      href: "#our_story",
      value: "our_story",
      text: headersText.ourStory,
    },
    {
      href: "#ceremony",
      value: "ceremony",
      text: headersText.ceremony,
    },
    {
      href: "#invitation",
      value: "invitation",
      text: headersText.rsvp,
    },
    {
      href: "#showtime",
      value: "showtime",
      text: headersText.showtime,
    },
    {
      href: "#wishes",
      value: "wishes",
      text: headersText.wishes,
    },
  ];

  return (
    <div>
      <style jsx global>
        {`
          a.react-add-to-calendar__button span {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
      <Head
        {...ogTags}
        title={eventTitle}
        description={eventDescription}
        guestName={guest.name}
        url={currentUrl}
        date={weddingDateBrief}
        venue={venueBrief}
        logo={resolvePath(ogTags.logo)}
        author={resolvePath("/")}
      />
      <nav className={`navbar ${locale} navbar-expand-lg navbar-light`}>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavBar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
          <div className="navbar-nav">
            {headers.map((header, index) => (
              <a
                key={index}
                className="nav-item nav-link"
                value={header.value}
                href={header.href}
                onClick={toggleNavBar}
              >
                {header.text}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="header_area">
        <div className="home header_slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1 }}>
              <div className="single_slider landing bg_cover d-flex align-items-center">
                <img
                  className="element-flower top left"
                  src={"/assets/images/home/element-flower-top-left.png"}
                  alt="logo"
                />
                <img
                  className="element-flower top right"
                  src={"/assets/images/home/element-flower-top-right.png"}
                  alt="logo"
                />
                <img
                  className="element-flower bottom left"
                  src={"/assets/images/home/element-flower-bottom-left.png"}
                  alt="logo"
                />
                <img
                  className="element-flower bottom right"
                  src={"/assets/images/home/element-flower-bottom-right.png"}
                  alt="logo"
                />
                <div className="center main-text">
                  <img
                    src={"/assets/images/home/element-banner-landing-1.png"}
                    alt="logo"
                  />
                  <img
                    src={"/assets/images/home/element-banner-landing-2.png"}
                    alt="logo"
                  />
                  <img
                    src={"/assets/images/home/element-banner-landing-3.png"}
                    alt="logo"
                  />
                </div>
                <img
                  className="center main-gif"
                  src={"/assets/images/home/nalin-ha-photo.gif"}
                  alt="logo"
                />
                <div className={`countdown`}>
                  <Countdown date={weddingTimestamp} renderer={renderer} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our_story" className="coming_soon_area">
        <div className="our-story container">
          <img
            className="element-flower top left"
            src={"/assets/images/our_story/element-flower-top-left.png"}
            alt="logo"
          />
          <img
            className="element-flower top right"
            src={"/assets/images/our_story/element-flower-top-right.png"}
            alt="logo"
          />
          <img
            className="element-flower bottom left"
            src={"/assets/images/our_story/element-flower-bottom-left.png"}
            alt="logo"
          />
          <img
            className="element-flower bottom right"
            src={"/assets/images/our_story/element-flower-bottom-right.png"}
            alt="logo"
          />
          <div className="story-banner row align-items-center">
            <img
              className={`element ${locale}`}
              src={`/assets/images/our_story/${locale}/top-banner.png`}
              alt="logo"
            />
          </div>
          <div className={`story-content ${locale} row align-items-center`}>
            {storyContent.map((content, index) => (
              <div
                className={`content col-sm-${
                  index > 2 ? "6" : "4"
                } col-xs-6 align-self-center ${content.customClass}`}
              >
                <div className="image-container container">
                  <img
                    className="element"
                    src={`/assets/images/our_story/${content.image}.png`}
                    alt="logo"
                  />
                </div>
                <img
                  className={`row text`}
                  style={content.style}
                  src={`/assets/images/our_story/${locale}/${content.text}.png`}
                  alt="logo"
                />
              </div>
            ))}
          </div>
          <div className={`dress-code ${locale} row align-items-center`}>
            <div className="heading row container">
              <img
                className="align-self-center"
                src={`/assets/images/our_story/${locale}/dress-code-text.png`}
                alt="logo"
              />
            </div>
            <div className="colors row container">
              <img
                src={`/assets/images/our_story/dress-code-color-1.png`}
                alt="logo"
              />
              <img
                src={`/assets/images/our_story/dress-code-color-2.png`}
                alt="logo"
              />
              <img
                src={`/assets/images/our_story/dress-code-color-3.png`}
                alt="logo"
              />
              <img
                src={`/assets/images/our_story/dress-code-color-4.png`}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ceremony" className="contact_area">
        <div className="ceremony container">
          <img
            className="element-flower top left"
            src={"/assets/images/ceremony/element-flower-top-left.png"}
            alt="logo"
          />
          <img
            className="element-flower top right"
            src={"/assets/images/ceremony/element-flower-top-right.png"}
            alt="logo"
          />
          <img
            className="element-flower bottom left"
            src={"/assets/images/ceremony/element-flower-bottom-left.png"}
            alt="logo"
          />
          <img
            className="element-flower bottom right"
            src={"/assets/images/ceremony/element-flower-bottom-right.png"}
            alt="logo"
          />
          <div className="banner row align-items-center">
            <div className={`element row ${locale}`}>
              <img
                className={"col-xs-12 col-sm-6"}
                src={`/assets/images/ceremony/${locale}/top-banner-1.png`}
                alt="logo"
              />
              <img
                className={"col-xs-12 col-sm-6"}
                src={`/assets/images/ceremony/${locale}/top-banner-2.png`}
                alt="logo"
              />
            </div>
          </div>
          <div className={`content ${locale} row align-items-center`}>
            <div className={`content col-xs-12 col-sm-6 align-self-center`}>
              <div className="image-banner row">
                <img
                  className="element"
                  src={`/assets/images/ceremony/${locale}/ceremony-event.png`}
                  alt="logo"
                />
              </div>
              <div className="map row">
                <a href={venue.mapUrl} target="_blank" className="view-map">
                  {venue.mapText}
                </a>
              </div>
            </div>
            <div className={`content col-xs-12 col-sm-6 align-self-center`}>
              <div className="image-banner row">
                <img
                  className="element"
                  src={`/assets/images/ceremony/${locale}/ceremony-hotel.png`}
                  alt="logo"
                />
              </div>
              <div className="map row">
                <a href={hotel.mapUrl} target="_blank" className="view-map">
                  {venue.mapText}
                </a>
              </div>
            </div>
          </div>
          <div className={`timeline ${locale} row align-items-center`}>
            <div className="heading row container">
              <img
                className="align-self-center"
                src={`/assets/images/ceremony/${locale}/ceremony-timeline-text.png`}
                alt="logo"
              />
            </div>
            <div className="main row container horizontal align-self-center">
              <img
                src={`/assets/images/ceremony/${locale}/ceremony-timeline.png`}
                alt="logo"
              />
            </div>
            <div className="main row container vertical align-self-center">
              <img
                src={`/assets/images/ceremony/${locale}/ceremony-timeline-vertical.png`}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="invitation" className="full-height coming_soon_area">
        <div className={`invitation ${locale} container`}>
          <div className="form-section col-12">
            <div className="banner">
              <img
                className={"element"}
                src={`assets/images/invitation/${locale}/banner-text.png`}
                alt="shape"
              />
              {invitationForm.formAlert && (
                <h4 className="date-alert">{invitationForm.formAlert}</h4>
              )}
            </div>
            <div className={`invitation-form ${locale} row align-items-center`}>
              {!inviteSuccess ? (
                <form onSubmit={handleSubmitInvite(onInviteSubmit)}>
                  <div className="form-group col-md-12">
                    <input
                      id="invite_name"
                      type="text"
                      className="form-control"
                      placeholder={invitationForm.input.name.placeholder}
                      {...registerInvite("name", { required: true })}
                    />
                    {inviteErrors.name && (
                      <small id="name_help" className="form-text text-error">
                        {invitationForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      id="invite_phone"
                      type="text"
                      className="form-control"
                      placeholder={invitationForm.input.phone.placeholder}
                      {...registerInvite("phone", { required: true })}
                    />
                    {inviteErrors.phone && (
                      <small id="phone_help" className="form-text text-error">
                        {invitationForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <select
                      id="invite_connection"
                      className="form-control"
                      {...registerInvite("connectionFrom", { required: true })}
                    >
                      <option value="">
                        {invitationForm.input.connectionFrom.placeholder}
                      </option>
                      {invitationForm.input.connectionFrom.options.map(
                        (option) => (
                          <option value={option.value}>{option.text}</option>
                        )
                      )}
                    </select>
                    {inviteErrors.connectionFrom && (
                      <small
                        id="location_help"
                        className="form-text text-error"
                      >
                        {invitationForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <select
                      id="invite_adults"
                      className="form-control"
                      {...registerInvite("adultGuests", {
                        required: true,
                        min: 1,
                      })}
                    >
                      <option value={0}>
                        {invitationForm.input.adultGuests.placeholder}
                      </option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                    </select>
                    {inviteErrors.adultGuests && (
                      <small
                        id="location_help"
                        className="form-text text-error"
                      >
                        {invitationForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <select
                      id="invite_kids"
                      className="form-control"
                      {...registerInvite("kidGuests", {
                        required: true,
                        min: 0,
                      })}
                    >
                      <option value={0}>
                        {invitationForm.input.kidGuests.placeholder}
                      </option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <select
                      id="invite_location"
                      className="form-control"
                      {...registerInvite("location", { required: true })}
                    >
                      <option value="">
                        {invitationForm.input.location.placeholder}
                      </option>
                      {invitationForm.input.location.options.map((option) => (
                        <option value={option.value}>{option.text}</option>
                      ))}
                    </select>
                    {inviteErrors.location && (
                      <small
                        id="location_help"
                        className="form-text text-error"
                      >
                        {invitationForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <select
                      id="invite_meals"
                      className="form-control"
                      {...registerInvite("mealPreference", { required: true })}
                    >
                      <option value="">
                        {invitationForm.input.mealPreference.placeholder}
                      </option>
                      {invitationForm.input.mealPreference.options.map(
                        (option) => (
                          <option value={option.value}>{option.text}</option>
                        )
                      )}
                    </select>
                    {inviteErrors.mealPreference && (
                      <small
                        id="location_help"
                        className="form-text text-error"
                      >
                        {invitationForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-button col-md-12">
                    <button type="submit" className="btn">
                      {invitationForm.formButton.text}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="success-message">{invitationForm.successMessage}</div>
              )}
            </div>
          </div>
          <div className="invitation_left_flower">
            <img src="assets/images/invitation/left-flower.png" alt="shape" />
          </div>
          <div className="invitation_right_flower">
            <img src="assets/images/invitation/right-flower.png" alt="shape" />
          </div>
        </div>
      </section>

      <section id="showtime" className="full-height contact_area">
        <div className={`showtime ${locale} container`}>
          <div className="banner">
            <img
              className={"element"}
              src={`assets/images/showtime/${locale}/banner-text.png`}
              alt="shape"
            />
          </div>
          <PhotoProvider>
            <Gallery
              photos={photos}
              direction={"column"}
              renderImage={imageRenderer}
            />
          </PhotoProvider>
        </div>
      </section>

      <section id="wishes" className="full-height coming_soon_area">
        <div className={`wishes ${locale} container`}>
          <div className="banner">
            <img
              className={"element"}
              src={`assets/images/wishes/${locale}/banner-text.png`}
              alt="shape"
            />
          </div>
          <div className="form-section col-12">
            <div className={`wishes-form ${locale} row align-items-center`}>
              {!wishesSuccess ? (
                <form onSubmit={handleSubmitWishes(onWishesSubmit)}>
                  <div className="form-group col-md-12">
                    <input
                      id="wishes_name"
                      type="text"
                      className="form-control"
                      placeholder={wishesForm.input.name.placeholder}
                      {...registerWishes("name", { required: true })}
                    />
                    {wishesErrors.name && (
                      <small id="name_help" className="form-text text-error">
                        {wishesForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      id="wishes_message"
                      rows="6"
                      className="form-control"
                      placeholder={wishesForm.input.message.placeholder}
                      {...registerWishes("message", { required: true })}
                    />
                    {wishesErrors.message && (
                      <small id="message_help" className="form-text text-error">
                        {wishesForm.input.helpText}
                      </small>
                    )}
                  </div>
                  <div className="form-button col-md-12">
                    <button type="submit" className="btn">
                      {wishesForm.formButton.text}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="success-message">{wishesForm.successMessage}</div>
              )}
            </div>
          </div>
          <div className="wishes_left_flower">
            <img src="assets/images/wishes/left-flower.png" alt="shape" />
          </div>
          <div className="wishes_right_flower">
            <img src="assets/images/wishes/right-flower.png" alt="shape" />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer id="footer" className="footer_area">
        <div className="footer">
          <div className="col-lg-6 footer-col left">
            <div className="heading row">
              <h3>Copyright</h3>
            </div>
            <div className="row">
              <span>© Nalin Sajwan</span>
            </div>
          </div>
          <div className="col-lg-6 footer-col right">
            <div className="row">
              <div>
                <div className="heading row">
                  <h3>Contact</h3>
                </div>
                <div className="row">
                  <ul>
                    <li>hatrinh.htt@gmail.com</li>
                    <li>+61 414 823 049</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

ShowInvite.getInitialProps = (ctx) => {
  const localeParams = ctx.query.lang || defaultLocale;
  const emptyGuestParams = {
    guest: {
      guestId: "",
      name: "",
      greeting: "",
      locale: localeParams,
    },
  };

  const currentUrl = resolvePath(ctx.req.url);
  const guestId = ctx.query.u;
  if (!guestId) {
    return {
      currentUrl,
      ...emptyGuestParams,
    };
  }

  const guestData = guestList.data;
  const { name, greeting, locale } =
    guestData.filter((guest) => guest.guestId === guestId)[0] || {};
  if (!name) {
    return {
      currentUrl,
      ...emptyGuestParams,
    };
  }

  return {
    currentUrl,
    guest: {
      name,
      greeting,
      guestId,
      locale: locale || localeParams,
    },
  };
};

export default ShowInvite;
