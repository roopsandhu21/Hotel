import React, { useState } from "react";
import {   Nav, Form } from "react-bootstrap";
import BookingNavbar from "./BookingNav";
import { Container, Row, Col, Card, Button, Modal,ListGroup,  } from "react-bootstrap";
import Deluxe from './Deluxe.avif';
import room from './DeluxeR.jpg';
import washroom from './Washroom.avif'
import prenium from './prenium.avif'
import luxury from './luxury.avif';
import room1 from './Room3.jpg';
import washroom1 from './washroom1.avif';
import luxury2 from './luxury2.jpg'
import villa from './villaroom.avif';
import villa2 from './villa2.jpg';
import villa3 from './villa3.jpg';
import Footer from "./Footer";


function Booknow() {
  const [step, setStep] = useState(1);

  const [activeTab, setActiveTab] = useState("offers");
   const [selectedRoom, setSelectedRoom] = useState(null);


   const [showImageModal, setShowImageModal] = useState(false);
const [showFormModal, setShowFormModal] = useState(false);
const [modalImages, setModalImages] = useState([]);
const [modalStep, setModalStep] = useState(1); // Personal Details or Payment


  const rooms = [
  {
    id: 1,
    title: "Deluxe Room King Bed",
    description:
      "Dream Drive Discover Delight Breakfast, Lunch, And Dinner Inclusive",
    details: [
      "Inclusive of buffet breakfast, lunch and dinner from a set menu",
      "Inclusive of standard Wi-Fi",
      "Applicable taxes extra",
    ],
    size: "45 sq m",
    guests: "Up to 4 guests",
    bed: "King",
    price: 23000,
    image: [Deluxe, room, washroom], // ✅ now array of imported images
  },
 {
  id: 2,
  title: "Premium Room King Bed",
  description: "Spacious luxury with premium amenities",
  details: ["Includes breakfast", "Free Wi-Fi", "City View"],
  size: "55 sq m",
  guests: "Up to 3 guests",
  bed: "King",
  price: 28000,
  image: [prenium]  // ✅ Keep as array (so code works consistently)
}, 
 {
  id: 3,
  title: "LUXURY ROOM VALLEY VIEW KING BED ",
  description: "Dream Drive Discover Delight Breakfast, Lunch, And Dinner Inclusive",
  details: [
      "Inclusive of buffet breakfast, lunch and dinner from a set menu at a designated dining venue",
      "Inclusive of standard Wi-Fi",
      "Applicable taxes extra",
    ],
  size: "45 sq m",
  guests: "Up to 4 guests",
  bed: "King",
  price: 30900,
  image: [luxury, luxury2, washroom1, room1]  // ✅ Keep as array (so code works consistently)
}, 
 {
  id: 4,
  title: "VILLA ROOM ",
  description: "Dream Drive Discover Delight Breakfast, Lunch, And Dinner Inclusive",
  details: [
      "Inclusive of buffet breakfast, lunch and dinner from a set menu at a designated dining venue",
      "Inclusive of standard Wi-Fi",
      "Applicable taxes extra",
    ],
  size: "60 sq m",
  guests: "Up to 4 guests",
  bed: "King",
  price: 46800,
  image: [villa,villa2,villa3]  // ✅ Keep as array (so code works consistently)
}, 
];

// Open Image Modal
const handleImageClick = (images) => {
  setModalImages(images.slice(1)); // skip first image
  setShowImageModal(true);          // ✅ open image modal
};

// Open Form Modal
const handleSelectRoom = (room) => {
  setSelectedRoom(room);
  setModalStep(1);                 // start with Personal Details
  setShowFormModal(true);          // ✅ open form modal
};


  return (
    <>
      <BookingNavbar />
      <div className="py-5 text-center">
        <h2 className="mb-4">PLAN YOUR STAY</h2>

        <Container>
          {/* Progress Steps */}
          <Row className="justify-content-center">
            {/* Step 1 */}
            <Col xs="auto" className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: step === 1 ? "#b18b2c" : "transparent",
                  border: "1px solid #b18b2c",
                  color: step === 1 ? "white" : "#555",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                1
              </div>
              <span className={`ms-2 ${step === 1 ? "fw-bold" : ""}`}>
                Select Room
              </span>
            </Col>

            {/* Step 2 */}
            <Col xs="auto" className="d-flex align-items-center ms-4">
              <div
                style={{
                  backgroundColor: step === 2 ? "#b18b2c" : "transparent",
                  border: "1px solid #b18b2c",
                  color: step === 2 ? "white" : "#555",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                2
              </div>
              <span className={`ms-2 ${step === 2 ? "fw-bold" : ""}`}>
                Personal Details
              </span>
            </Col>

            {/* Step 3 */}
            <Col xs="auto" className="d-flex align-items-center ms-4">
              <div
                style={{
                  backgroundColor: step === 3 ? "#b18b2c" : "transparent",
                  border: "1px solid #b18b2c",
                  color: step === 3 ? "white" : "#555",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                3
              </div>
              <span className={`ms-2 ${step === 3 ? "fw-bold" : ""}`}>
                Payment Confirmation
              </span>
            </Col>
          </Row>

          {/* Tabs */}
          <div className="mt-5">
            <Nav
              variant="tabs"
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="justify-content-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="offers">OFFERS</Nav.Link>
               
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="roomrates">ROOM RATES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="member">MEMBER PACKAGES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="other">OTHER PACKAGES</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* Checkbox */}
          <div className="mt-3 d-flex justify-content-center">
            <Form.Check
              type="checkbox"
              label="Show with taxes and fees"
              style={{ fontWeight: "500" }}
            />
          </div>
          

          {/* Tab Content */}
          <div className="mt-4 text-center">
            {activeTab === "offers" && <h5>Rooms for your search (Offers)</h5>}
           
            {activeTab === "roomrates" && <h5>Room Rates Information</h5>}
            {activeTab === "member" && <h5>Member Packages</h5>}
            {activeTab === "other" && <h5>Other Packages</h5>}
          </div>
        </Container>
        <Container className="mt-4">
  <Row>
    {/* Left: Room Options */}
    <Col md={8}>
      {rooms.map((room) => (
        <Card key={room.id} className="mb-4 shadow-sm">
          <Row className="g-0">
            <Col md={4}>
              <Card.Img
                      src={room.image[0]} // show only first image
                      alt={room.title}
                      style={{ height: "100%", objectFit: "cover", cursor: "pointer" }}
                      onClick={() => handleImageClick(room.image)} // ✅ open modal
                    />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="fw-bold">{room.title}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <ul>
                  {room.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <Row className="align-items-center">
                  <Col>
                    <p className="fw-bold text-end">
                      EXCLUSIVE RATE ₹{room.price.toLocaleString()}
                    </p>
                  </Col>
                  <Col xs="auto">
                   <Button
                       variant="outline-warning"
                        onClick={() => handleSelectRoom(room)}
                   >
                      SELECT
                    </Button>



                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <span>📏 {room.size}</span>
                <span>👨‍👩‍👧 {room.guests}</span>
                <span>🛏 {room.bed}</span>
              </Card.Footer>
            </Col>
          </Row>
       </Card>
))}

    </Col>

    {/* Right: Your Stay Summary */}
    <Col md={4}>
      <Card className="shadow-sm">
        <Card.Header className="fw-bold">YOUR STAY</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Room 1: 1 Adult <br />
            {selectedRoom ? selectedRoom.title : "Not selected"}
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ₹{selectedRoom ? selectedRoom.price.toLocaleString() : "0.00"}
          </ListGroup.Item>
          <ListGroup.Item>Taxes and Fees: ₹0.00</ListGroup.Item>
          <ListGroup.Item className="fw-bold">
            Total Amount: ₹
            {selectedRoom ? selectedRoom.price.toLocaleString() : "0.00"}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  </Row>
</Container>   {/* ✅ properly closed */}
{/* Image Modal */}
<Modal show={showImageModal} onHide={() => setShowImageModal(false)} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>More Images</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Row>
      {modalImages.map((img, i) => (
        <Col key={i} md={6} className="mb-3">
          <img
            src={img}
            alt={`Room ${i}`}
            style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
          />
        </Col>
      ))}
    </Row>
  </Modal.Body>
</Modal>

{/* Form & Payment Modal */}
<Modal show={showFormModal} onHide={() => setShowFormModal(false)} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>{modalStep === 1 ? "Personal Details" : "Payment"}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {modalStep === 1 && (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>
        <Button variant="primary" onClick={() => setModalStep(2)}>
          Continue to Payment
        </Button>
      </Form>
    )}
    {modalStep === 2 && (
      <div>
        <h5>Payment Details</h5>
        <p>Room: {selectedRoom?.title}</p>
        <p>Amount: ₹{selectedRoom?.price.toLocaleString()}</p>
        <Button variant="success" onClick={() => setShowFormModal(false)}>
          Confirm Payment
        </Button>
      </div>
    )}
  </Modal.Body>
</Modal>
<Footer/>

      </div>
    </>
  );
}

export default Booknow;
