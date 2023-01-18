import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/about.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function contactus() {
  return (
    <div class="box">
      <section id="about">
        <div class="container-xxl">
          <header id="showcase">
            <h1>Contact Us</h1>
          </header>
        </div>

        <Container>
          <Row>
            <Col>
              <div id="content" class="container">
                <h1>Connect with Us!</h1>
                <h1>Connect with Us!</h1>
                <h1>Connect with Us!</h1>
                <h1>Connect with Us!</h1>

                <h3>Change your life with Sentab!</h3>
                <h3>Have a chat with us - 0112 708 290</h3>
                <h3>
                  Mail your CV to cv@sentab.lk and start your path towards
                  achieving your dream!
                </h3>
                <h3>326/2, Srimangala Watte, Piliyandala, Sri Lanka</h3>
              </div>
            </Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default contactus;
