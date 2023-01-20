import logo from "./sentablogo.png";
import home1 from "./images/home_1.jpg";
import welcomeCover from "./images/Cover.jpg";
import contactusimg from "./images/contactus2.jpg";
import contactusimg2 from "./images/Contac.jpg";
import "./App.css";
import CollapsibleExample from "./components/navbar-sentab";
import AboutUs from "./components/about-us-sentab";
// import Jobs from "./components/jobs-sentab";
// import Newsblog from "./components/blogs_and_news-sentab";
// import ContactUs from "./components/contact_us-sentab";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappContact from "./components/WhatsappContact";
import GoogleMap from "./components/GoogleMap";
import HotLine from "./components/HotLine";

function App() {
  return (
    <div className="App">
      &nbsp;
      <HotLine />
      <CollapsibleExample />
      <div class="banner">
        <img src={welcomeCover} width="20%" alt="..." />
        <h2 class="heading">WELCOME TO SENTAB </h2>
      </div>
      &nbsp;
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <body>
        <AboutUs />
      </body>
      <section id="contact">
        <img
          src={contactusimg2}
          class="img-responsive rounded mx-auto d-block"
          width="100%"
          alt="SENTAB"
        />
        &nbsp;
        <h1 class="text-center maintopic">CONTACT US</h1>
        <span class="hr"></span>
        <h1 class="text-center subtopic">CHANGE YOUR LIFE WITH SENTAB</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-center">
          <div class="row align-items-center" id="social-row">
            <div class="col-md-4 social-col"></div>
            <div class="col-md-12">
              <h3 class="left-text bodytext">
                Have a chat with us +94 11 2 708 290
              </h3>
              <h3 class="left-text bodytext">
                Mail your CV to <b>cv@sentab.lk</b> and start your path towards
                achieving your dream.
              </h3>
              <h6>326/2, Srimangala Watte, Piliyandala, Sri Lanka</h6>
              <br />
              <GoogleMap />
            </div>
          </div>
        </div>
        &nbsp;
      </section>
      <section id="footer">
        <section id="banner" fix="">
          <div class="container-fluid" id="banner-container">
            <div class="row" id="banner-row">
              <div class="col-md-4" id="footer-col1"></div>
              <div class="col-md-4" id="footer-col2">
                <img
                  src={logo}
                  class="img-responsive rounded mx-auto d-block"
                  width="100px"
                  alt="SENTAB"
                />
                &nbsp;
                <p style={{ color: "black" }}>
                  ©2023 By SENTAB. Developed By FlexyCode
                </p>
              </div>
              <div class="col-md-4" id="footer-col2"></div>
            </div>
          </div>
        </section>
        <WhatsappContact />
      </section>
    </div>
  );
}

export default App;
