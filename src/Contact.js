import hotel from './hotellocation.avif';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import timeless from './timeless.avif';
import epicure from './epicure.avif';
import chamber from './chambers.avif';
import event from './events.avif';
import Footer from './Footer';
import Navbar from './Navbar'



function Contact() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
  style={{
    backgroundImage: `url(${hotel})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    color: "white",
  }}

>
  <Navbar />
            {/* You can add content here if needed */}</div>

      {/* Main Heading */}
      <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '100px',
          marginBottom: '50px'
        }}
      >
        GET IN TOUCH
      </h1>

      {/* Sub Heading */}
      <h2
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '40px',
          marginBottom: '20px'
        }}
      >
        Worldwide Reservation Center
      </h2>

      {/* Paragraph */}
      <p
        style={{
          fontSize: '18px',
          maxWidth: '700px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}
      >
        Taj Hotel Reservations Worldwide Centre is accessible 24/7. Toll-free
        contact numbers are below.
      </p>

      {/* One Column, Multiple Rows */}
      <Container>
        <Col sm={6} className="mx-auto">
          <Row className="p-3 border-bottom align-items-center">
  <Col className="text-start">
    <h6>TOLL FREE INDIA</h6>
  </Col>
  <Col className="text-end">
    1-800-111-825
  </Col>
</Row>

          <Row className="p-3 border-bottom align-items-center">
  <Col className="text-start">
    <h6>India Network</h6>
  </Col>
  <Col className="text-end">
   0091-22-6601-1825
  </Col>
</Row>
          <Row className="p-3 border-bottom align-items-center">
  <Col className="text-start">
    <h6>USA & Canada</h6>
  </Col>
  <Col className="text-end">
   1-866-969-1825
  </Col>
</Row>
          <Row className="p-3 border-bottom align-items-center">
  <Col className="text-start">
    <h6>Other countries</h6>
  </Col>
  <Col className="text-end">
   00-800-4-588-1-825
  </Col>
</Row>
        </Col>
      </Container>
         <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '100px',
          marginBottom: '50px'
        }}
      >
        Global Hotel Contacts
      </h1>
      <Row>
        <Col><h4>AHMEDABAD</h4>
        <p>405, Tilakraj Complex, Behind Suryarath Complex, Panchwati First lane, Ahmedabad, 380006</p>
        <p>Phone: +91 79264 65591 / 93</p>
        <p>sales.ahmedabad@ihcltata.com</p>
        <Row><h4>CHENNAI</h4>
        <p>37, Uthamar Gandhi Rd, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034</p>
        <p>Phone: +91 44660 02827</p>
        <p>sales.chennai@ihcltata.com</p>
        </Row>
        </Col>
        <Col><h4>AUSTRALIA : SYDNEY</h4>
        <p>PO BOX 364, Lindfield, New South Wales 2070</p>
        <p>Phone: +61 294 403 613</p>
        <p>sales.sydney@ihcltata.com</p>
        <Row><h4>DENMARK: SCANDINAVIA</h4>
        <p>Atlantic Link ,Kompagnistraede 34, 4th fl.DK-1208 Copenhagen K, Denmark</p>
        <p>Phone: +45 70 27 23 71</p>
        <p>sales.scandinavia@ihcltata.com</p>
        </Row></Col>
        <Col><h4>BANGALORE</h4>
        <p>  41, Race Course Rd, Sampangi Rama Nagar, High Grounds, Bengaluru, Karnataka 560001
        </p>
        <p>Phone: +91 80666 05660</p>
        <p>sales.bengaluru@ihcltata.com</p>
        <Row><h4>HYDERABAD


</h4>
        <p>Rd Number 1, Mada Manzil, Banjara Hills, Hyderabad, Telangana 500034</p>
        <p>Phone: +91 40666 62323</p>
        <p>sales.hyderabad@ihcltata.com</p>
        </Row></Col>
      </Row>
      <h2>Feedback</h2>
      <div>
 <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
         
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
         
          <Form.Control type="phone" placeholder="Mobile number" />
        </Form.Group>
      </Row>

     <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHotel">
          
          <Form.Control type="hotel" placeholder="Hotel" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
         
          <Form.Control type="date" placeholder="Date of Stay" />
        </Form.Group> </Row>

      <Form.Group className="mb-3" controlId="formGridComment">
       
        <Form.Control placeholder="Comment" />
      </Form.Group>

       

    

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
       <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '100px',
          marginBottom: '50px'
        }}
      >
        Our Marquee Offerings

      </h1>
  <Carousel fade interval={3000}>
      {/* Slide 1 */}
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* LEFT - IMAGE */}
          <div style={{ flex: 1 }}>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit:"cover"}}
              src={timeless}
              alt="Timeless"
            />
          </div>

          {/* RIGHT - TEXT */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "50px",
              
              height: "100vh",
            }}
          >
            <h2 className="mb-3">Timeless Elegance</h2>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <div style={{ flex: 1 }}>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src={epicure}
              alt="Epicure"
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "50px",
             
              height: "100vh",
            }}
          >
            <h2 className="mb-3">Epicure Dining</h2>
            <p>
              Savor the finest cuisines curated by our expert chefs, blending
              tradition with modern gastronomy.
            </p>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <div style={{ flex: 1 }}>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src={chamber}
              alt="Chamber"
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "50px",
              height: "100vh",
            }}
          >
            <h2 className="mb-3">Exclusive Chambers</h2>
            <p>
              Relax and unwind in private chambers designed for comfort and
              exclusivity.
            </p>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <div style={{ flex: 1 }}>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src={event}
              alt="Event"
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "50px",
             
              height: "100vh",
            }}
          >
            <h2 className="mb-3">Grand Events</h2>
            <p>
              Host unforgettable events with premium facilities and elegant
              spaces tailored to your needs.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    <Footer/>
    </div>
    
 
  );
}

export default Contact;

