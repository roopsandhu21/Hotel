import Carousel from 'react-bootstrap/Carousel';
import swimming from './swimming.avif';
import hill from './locationhill.avif';
import tradition from './tradition.avif';
import waiting from './waitingarea.avif';
import outside from './outsidearea.avif';
import sofa from './sofatag.avif';
import Card from 'react-bootstrap/Card';
import plantation from './plantation.avif';
import energing from './energising.avif';
import elegant from './elegantdining.avif';
import himalaya from './himalayan.avif';
import astonishing from './astonishing.avif';
import mystical from './mystical.avif';
import dream from './dream.avif';
import Button from 'react-bootstrap/Button';
import breakfast from './breakfast.avif';
import longer from './longer.avif';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import {
  FaClock,
  FaBed,
  FaThermometerHalf,
  FaUtensils,
  FaSpa,
  FaFileInvoice,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Footer from './Footer';
import BookingNavbar from './BookingNav';



function Home() {
  const [showHotel, setShowHotel] = useState(false);
  const [showWellness, setShowWellness] = useState(false);
  const [showDining, setShowDining] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  return (
    <div>
      {/* Navbar fixed on top */}
      <Navbar />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh', objectFit: 'cover' }}
            src={swimming}
            alt="swimming pool"
          />
        
          <Carousel.Caption>
           
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Taj Chia Kutir Resort & Spa,Darjeeling</h1><br/>
            <BookingNavbar/>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh', objectFit: 'cover' }}
            src={hill}
            alt="hill"
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Taj Chia Kutir Resort & Spa,Darjeeling</h1>
           <br/>
            <BookingNavbar/>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh', objectFit: 'cover' }}
            src={tradition}
            alt="tradition"
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Taj Chia Kutir Resort & Spa,Darjeeling</h1>
            <br/>
            <BookingNavbar/>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh', objectFit: 'cover' }}
            src={waiting}
            alt="waiting"
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Taj Chia Kutir Resort & Spa,Darjeeling</h1>
           <br/>
            <BookingNavbar/>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh', objectFit: 'cover' }}
            src={outside}
            alt="outside"
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Taj Chia Kutir Resort & Spa,Darjeeling</h1>
            <br/>
            <BookingNavbar/>
           
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel> 
    <div style={{ display: 'flex', alignItems: 'center', margin: '100px' }}>
  <h1 style={{ fontFamily: 'Georgia, serif', marginRight: '50px' }}>THE DARLING OF DARJEELING</h1>
  <p> Introducing the Taj Chia Kutir Resort and Spa in Darjeeling, a name as grand as its essence. This bespoke resort in Darjeeling is a haven of breathtaking views, nestled within the historic Makaibari Tea Estate. Founded in 1859 in Kurseong, Darjeeling, it holds the distinction of being the world's very first permaculture tea estate. Here, sophistication meets the sublime. </p>
  <img
    style={{ height: '500px', width: '800px' }}
    src={sofa}
    alt="sofa"
  />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', margin: '100px' }}>
  {/* Left side text */}
  <div style={{ flex: 1 }}>
    <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '100px', margin: 0 }}>Highlights</h1>
  </div>

  {/* Right side paragraph */}
  <div style={{ flex: 2 }}>
    <p style={{ fontSize: '20px', lineHeight: '1.8', margin: 0 }}>
      Welcome to Taj Chia Kutir Resort & Spa, where we capture the essence of one of India’s
      most serene and refreshing hill stations. Here, you will find an inviting and rejuvenating
      atmosphere that beckons you to explore the plantation and uncover its hidden treasures.
    </p>
  </div>
</div>
<Carousel>
  <Carousel.Item>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={plantation} />
        <Card.Body>
          <Card.Title>PLANTATION, PERMACULTURE & SUSTAINABLE ECOSYSTEM</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={energing} />
        <Card.Body>
          <Card.Title>ENERGISING FRESH HIMALAYAN AIR</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={elegant} />
        <Card.Body>
          <Card.Title> ELEGANT RESTAURANTS AND PRIVATE DINING</Card.Title>
        </Card.Body>
      </Card>
      
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={himalaya} />
        <Card.Body>
          <Card.Title>J WELLNESS CIRCLE AND HIMALAYAN WELLNESS</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={astonishing} />
        <Card.Body>
          <Card.Title>ASTONISHING VIEWS FROM EVERY ROOM</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={mystical} />
        <Card.Body>
          <Card.Title>MYSTICAL AND MAGICAL MAKAIBARI TEA ESTATE</Card.Title>
        </Card.Body>
      </Card>
    </div>
  </Carousel.Item>
</Carousel>

    <div style={{ display: 'flex', alignItems: 'center', margin: '100px' }}>
    <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '100px', margin: 0 }}>Unparalleled Offers</h1>
  </div>
  {/* Slide 1 */}
  
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={dream} />
        <Card.Body>
          <Card.Title>DREAM.DRIVE.DISCOVER.DELIGHT.(4D)</Card.Title>
          <p>Drive away to enjoy the company of your loved ones and spend unforgettable moments in our 
            exemplary care, with all meals included. 
          </p>
           <Button 
  variant="warning" 
  as={Link} 
  to="/booknow"
  className="ms-3"
  style={{ fontWeight: 'bold' }}
>
  BOOK NOW!
</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={breakfast} />
        <Card.Body>
          <Card.Title>BREAKFAST INCLUSIVE RATE</Card.Title>
          <p>
            Wake up to a symphony of flavours with our delectable breakfast spread and enjoy seamless internet connectivity and flexible cance....more
          </p>
          <Button 
  variant="warning" 
  as={Link} 
  to="/auth" // this should match the route in App.js
  className='ms-3' 
  style={{ fontWeight:"bold" }}
>
  LOGIN/JOIN
</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={longer} />
        <Card.Body>
          <Card.Title>STAY A BIT LONGER- BREAKFAST INCLUSIVE</Card.Title>
          <p>
            Embark on an unforgettable journey with our exclusive stay package designed to reward those who choose 
            to extend their sojourn with....
          </p>
          <Button 
  variant="warning" 
  as={Link} 
  to="/booknow"
  className="ms-3"
  style={{ fontWeight: 'bold' }}
>
  BOOK NOW!
</Button>
        </Card.Body>
      </Card>
    </div>
 <Container className="my-5">
      <h2 className="mb-5" style={{ fontFamily: "serif", fontSize: "2.5rem" }}>
        HOTEL <br /> INFORMATION
      </h2>

      <Row>
        {/* Left Column */}
        <Col md={4} className="border-end">
          {/* Check In / Out */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Check In – Check Out</p>
            <div className="d-flex gap-2">
              <FaClock size={18} className="mt-1" />
              <div>
                <p className="fw-semibold mb-1">Check-in from 2:00 pm</p>
                <p className="fw-semibold mb-0">Check-out until noon</p>
              </div>
            </div>
          </div>

          {/* Rooms */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Rooms & Suites</p>
            <div className="d-flex gap-2">
              <FaBed size={18} />
              <p className="fw-semibold mb-0">73 rooms and suites</p>
            </div>
          </div>

          {/* Temperature */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Current Temperature</p>
            <div className="d-flex gap-2">
              <FaThermometerHalf size={18} />
              <p className="mb-0">-- °C</p>
            </div>
          </div>
        </Col>

        {/* Middle Column */}
        <Col md={4} className="border-end">
          {/* Dining */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Dining</p>
            <div className="d-flex gap-2">
              <FaUtensils size={18} />
              <p className="fw-semibold mb-0">
                2 restaurants, bar and a tea lounge
              </p>
            </div>
          </div>

          {/* Wellness */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Wellness</p>
            <div className="d-flex gap-2">
              <FaSpa size={18} />
              <p className="fw-semibold mb-0">
                J Wellness Circle offering the best Indian and contemporary
                rejuvenation therapies
              </p>
            </div>
          </div>

          {/* GSTIN */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Hotel Essentials</p>
            <div className="d-flex gap-2">
              <FaFileInvoice size={18} />
              <p className="fw-semibold mb-0">GSTIN : 19AACC V5653M1ZQ</p>
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={4}>
          {/* Contact */}
          <div className="pb-3 border-bottom mb-3">
            <p className="text-uppercase text-muted small">Contact</p>
            <div className="d-flex gap-2">
              <FaMapMarkerAlt size={18} className="mt-1" />
              <p className="mb-0">
                Pankhabari Road, Makaibari Tea Estate, P.O., P.S. – Kurseong,
                District Darjeeling, West Bengal, 734203, India <br />
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="d-flex gap-2 pb-3 border-bottom mb-3">
            <FaEnvelope size={18 } />
            <p className="mb-0">reservations.chiakutir@tajhotels.com</p>
          </div>

          {/* Phone Numbers */}
          <div>
            <div className="d-flex gap-2">
              <FaPhone size={18} />
              <p className="mb-0">+91 35423 46070</p>
            </div>
            <p className="ms-4 mb-0">+91 90462 46060</p>
            <p className="ms-4 mb-0">+91 90462 46061</p>
            <p className="ms-4 mb-0">+91 90462 46062</p>
            <p className="ms-4 mb-0">+91 90462 46063</p>
          </div>
        </Col>
      </Row>
    </Container>
       <div style={{ display: 'flex', alignItems: 'center', margin: '100px' }}>
    <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '100px', margin: 0 }}>Facilities</h1>
  </div>
  <Container className="my-5">
      <Row>
        {/* HOTEL */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>🏨 HOTEL</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Accessibility for differently-abled</ListGroup.Item>
                <ListGroup.Item>Baby-sitter on premises</ListGroup.Item>
                <ListGroup.Item>Doctor on Call</ListGroup.Item>
                <ListGroup.Item>Earth check certified</ListGroup.Item>
                {showHotel && (
                  <>
                    <ListGroup.Item>24x7 Concierge</ListGroup.Item>
                    <ListGroup.Item>Laundry & Dry Cleaning</ListGroup.Item>
                    <ListGroup.Item>Airport Transfers</ListGroup.Item>
                  </>
                )}
              </ListGroup>
              <Button
                variant="link"
                className="p-0 mt-2"
                onClick={() => setShowHotel(!showHotel)}
              >
                {showHotel ? "Show less" : "...more"}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* DINING */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>🍴 DINING</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Chia Verandah (All-Day Dining)</ListGroup.Item>
                <ListGroup.Item>Sonargaon (North West Frontier and Bengali Cuisine)</ListGroup.Item>
                <ListGroup.Item>The Glass Bar (Elegant Bar, Plantation Views)</ListGroup.Item>
                <ListGroup.Item>Chia Lounge (For Tea Connoisseurs & Others)</ListGroup.Item>
                {showDining && (
                  <>
                    <ListGroup.Item>Private Dining Rooms</ListGroup.Item>
                    <ListGroup.Item>Rooftop Dining</ListGroup.Item>
                  </>
                )}
              </ListGroup>
              <Button
                variant="link"
                className="p-0 mt-2"
                onClick={() => setShowDining(!showDining)}
              >
                {showDining ? "Show less" : "...more"}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* WELLNESS */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>🧘 WELLNESS</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Heated swimming pool</ListGroup.Item>
                <ListGroup.Item>Indoor swimming pool</ListGroup.Item>
                <ListGroup.Item>J Wellness Circle Spa</ListGroup.Item>
                <ListGroup.Item>State-of-the-art fitness centre</ListGroup.Item>
                {showWellness && (
                  <>
                    <ListGroup.Item>Yoga & Meditation Sessions</ListGroup.Item>
                    <ListGroup.Item>Ayurvedic Therapies</ListGroup.Item>
                  </>
                )}
              </ListGroup>
              <Button
                variant="link"
                className="p-0 mt-2"
                onClick={() => setShowWellness(!showWellness)}
              >
                {showWellness ? "Show less" : "...more"}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* ROOMS */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>🛏️ ROOMS</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Butler service</ListGroup.Item>
                <ListGroup.Item>Interconnecting rooms (subject to availability)</ListGroup.Item>
                <ListGroup.Item>Mini-Bar</ListGroup.Item>
                <ListGroup.Item>Plantation Facing and Valley Facing</ListGroup.Item>
                {showRooms && (
                  <>
                    <ListGroup.Item>Luxury Suites</ListGroup.Item>
                    <ListGroup.Item>Private Balconies</ListGroup.Item>
                  </>
                )}
              </ListGroup>
              <Button
                variant="link"
                className="p-0 mt-2"
                onClick={() => setShowRooms(!showRooms)}
              >
                {showRooms ? "Show less" : "...more"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
</div>
  );
}

export default Home;
