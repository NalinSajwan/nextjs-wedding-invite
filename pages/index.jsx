import Head from "@src/components/Head";
import resolvePath from "@src/utils/resolvePath";
import appConfig from "@src/config/app";
import { useTranslation, defaultLocale } from "@src/i18n";
import guestList from "./guest_list.json";
import format from "date-fns/format";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

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

const ShowInvite = ({ currentUrl, guestListLastUpdatedAt, guest }) => {
  const t = useTranslation(guest.locale);
  const [show, toggleBar] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState(false);

  const {
    register: registerInvite,
    handleSubmit: handleSubmitInvite,
    formState: { errors: inviteErrors },
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
    weddingDay,
    weddingDate,
    weddingTime,
    invitationForm,
    calendarInfo,
  } = translateConfig(appConfig, guest.locale);
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
      style: STORY_TEXT_CUSTOM[guest.locale][i],
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
        modifiedTime={guestListLastUpdatedAt}
        venue={venueBrief}
        logo={resolvePath(ogTags.logo)}
        author={resolvePath("/")}
      />
      <nav className="navbar navbar-expand-lg navbar-light">
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
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#our_story">
              Our Story
            </a>
            <a className="nav-item nav-link" href="#ceremony">
              Ceremony
            </a>
            <a className="nav-item nav-link" href="#invitation">
              RSVP
            </a>
          </div>
        </div>
      </nav>
      <section id="home" className="header_area">
        <div className="header_slider">
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
                <img
                  className="center main-text"
                  src={"/assets/images/home/element-banner-landing.png"}
                  alt="logo"
                />
                <img
                  className="center main-gif"
                  src={"/assets/images/home/nalin-ha-photo.gif"}
                  alt="logo"
                />
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
              className={`element ${guest.locale}`}
              src={`/assets/images/our_story/${guest.locale}/top-banner.png`}
              alt="logo"
            />
          </div>
          <div
            className={`story-content ${guest.locale} row align-items-center`}
          >
            {storyContent.map((content, index) => (
              <div
                className={`content col-${
                  index > 2 ? "6" : "4"
                } align-self-center ${content.customClass}`}
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
                  src={`/assets/images/our_story/${guest.locale}/${content.text}.png`}
                  alt="logo"
                />
              </div>
            ))}
          </div>
          <div className={`dress-code ${guest.locale} row align-items-center`}>
            <div className="heading row container">
              <img
                className="align-self-center"
                src={`/assets/images/our_story/${guest.locale}/dress-code-text.png`}
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
            <img
              className={`element ${guest.locale}`}
              src={`/assets/images/ceremony/${guest.locale}/top-banner.png`}
              alt="logo"
            />
          </div>
          <div className={`content ${guest.locale} row align-items-center`}>
            <div className={`content col-6 align-self-center`}>
              <div className="image-banner row container">
                <img
                  className="element"
                  src={`/assets/images/ceremony/${guest.locale}/ceremony-event.png`}
                  alt="logo"
                />
              </div>
              <div className="map row container">
                <a href={venue.mapUrl} target="_blank" className="view-map">
                  {venue.mapText}
                </a>
              </div>
            </div>
            <div className={`content col-6 align-self-center`}>
              <div className="image-banner row container">
                <img
                  className="element"
                  src={`/assets/images/ceremony/${guest.locale}/ceremony-hotel.png`}
                  alt="logo"
                />
              </div>
              <div className="map row container">
                <a href={hotel.mapUrl} target="_blank" className="view-map">
                  {venue.mapText}
                </a>
              </div>
            </div>
          </div>
          <div className={`timeline ${guest.locale} row align-items-center`}>
            <div className="heading row container">
              <img
                className="align-self-center"
                src={`/assets/images/ceremony/${guest.locale}/ceremony-timeline-text.png`}
                alt="logo"
              />
            </div>
            <div className="main row container align-self-center">
              <img
                src={`/assets/images/ceremony/${guest.locale}/ceremony-timeline.png`}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="invitation" className="full-height coming_soon_area">
        <div className={`invitation ${guest.locale} container`}>
          <div className="form-section col-12">
            <div className="banner">
              <img
                src={`assets/images/invitation/${guest.locale}/banner-text.png`}
                alt="shape"
              />
            </div>
            <div
              className={`invitation-form ${guest.locale} row align-items-center`}
            >
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
                      id="invite_email"
                      type="email"
                      className="form-control"
                      placeholder={invitationForm.input.email.placeholder}
                      {...registerInvite("email", { required: true })}
                    />
                    {inviteErrors.email && (
                      <small id="email_help" className="form-text text-error">
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
                <div className="banner">{invitationForm.successMessage}</div>
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

      {/* Footer section */}
      <footer id="footer" className="footer_area">
        <div className="footer_shape_1">
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="footer_widget pt-50 pb-10 text-center">
            <div className="footer_logo">
              {logo.footerLogo &&
                (logo.footerLogoType === "mp4" ? (
                  <video height="140" autoPlay muted loop>
                    <source src={logo.footerLogo} type="video/mp4" />
                  </video>
                ) : (
                  <img src={logo.footerLogo} />
                ))}
            </div>
            <div className="footer_title">
              <h3 className="title">{coupleName}</h3>
            </div>
          </div>
        </div>
        {appConfig.showBuiltWithInfo && (
          <div
            style={{
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <small>
              <a
                style={{ color: "grey" }}
                href="https://github.com/wzulfikar/nextjs-wedding-invite"
              >
                Built with&nbsp;
                <object
                  style={{ height: "0.5rem" }}
                  data="/assets/images/heart.svg"
                  type="image/svg+xml"
                ></object>
                &nbsp;using NextJS
              </a>
            </small>
          </div>
        )}
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
      locale: "vn",
      // locale: localeParams,
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
  const guestListLastUpdatedAt = guestList.meta.lastUpdatedAt;
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
    guestListLastUpdatedAt,
    guest: {
      name,
      greeting,
      guestId,
      locale: locale || localeParams,
    },
  };
};

export default ShowInvite;
