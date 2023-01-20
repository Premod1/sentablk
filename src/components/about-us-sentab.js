import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/about.css";
import jobimg from "../images/Jobs.jpg";
// import logo from '../sentablogo.png';
// import NavBar from './navbar-sentab';

function aboutus() {
  return (
    <div>
      <section id="about" class="section top-section">
        <div class="content-container content-theme-dark">
          <div class="content-inner">
            <div class="content-center">
              <h1>ABOUT US</h1>
              &nbsp;
              <p class="subtopic">We are Sentab International.</p>
              <p class="bodytext bodytextstyle">
                {" "}
                At Sentab, our expertise lies in providing consultation services
                to Sri Lankan people, to help them achieve their foreign
                employment dream. We help skilled workers of our country to gain
                job opportunities from European to Middle Eastern countries. We
                are dedicated to providing our clients with the best
                opportunities and helping them with their foreign employment and
                migration needs. Sentab also provides world class welding
                courses for Sri Lankans to become skilled in the art of welding.
                We believe in and prepare our clients to achieve their goals
                with professionalism and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="jobs" class="section bottom-section">
        <div class="content-container content-theme-light">
          <div class="content-inner">
            <div class="content-center">
              <img
                src={jobimg}
                class="img-responsive rounded mx-auto d-block"
                width="100%"
                alt="SENTAB"
              />
              &nbsp;
              <h1>JOBS</h1>
              <h3 class="subtopic">
                Find your perfect match! - Sentab International – Your Visionary
                Consulting Agency
              </h3>
              <p class="bodytext bodytextstyle">
                Let Sentab International guide you in finding the perfect
                foreign employment that suits your skill set and your
                passion.There are many fields in which you can find job
                opportunities abroad. From the hospitality industry to the IT
                sector and everything in between, businesses are on the lookout
                for recruits. Sentab can help you to stay ahead of the
                competition and impart to you the knowledge, expertise and
                experience to make your foreign employment and migration dreams
                come true. So, let’s go hunting for your perfect job and career
                path!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="blogs" class="section bottom-section2">
        <div class="content-container content-theme-dark3">
          <div class="content-inner">
            <div class="content-center">
              <h1>News and Blogs</h1>
              <h3 class="subtopic" style={{ color: "white" }}>
                Find your perfect match! - Sentab International – Your Visionary
                Consulting Agency
              </h3>
              <p class="bodytext bodytextstyle" style={{ color: "white" }}>
                Keep yourselves aware of the latest news in the foreign
                employment sector. Get to know more about foreign employment,
                career paths and migration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default aboutus;
