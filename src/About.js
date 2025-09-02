import taj from './abouttaj.avif';
import tajvideo from './video.mp4';
import progress from './progress.avif';
import { Container, Row, Col} from "react-bootstrap";
import "./App.css"; 
import palacesImg from "./tajpalaces.avif";
import hotelsImg from "./tajhotel.webp";
import resortsImg from "./tajresort.avif";
import safarisImg from "./tajsafari.avif";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import gateway from './gateway.avif';
import Carousel from 'react-bootstrap/Carousel';
import kolkate from './kolkate.webp';
import sigh from './sigh.avif'
import growth from './Growth.jpg'
import bombay from './Bombay.jpg'
import Brand from './brand.avif';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Navbar from './Navbar'





function About (){
const App = [

  { title: "Progress", subtitle: "Sustainable Growth", img: progress }
];
const data = {
  palaces: {
    title: "PALACES",
    description:
      "Historically important, authentically noble and architecturally precious – Taj Palaces are spaces of splendour embodying the grandeur of kings and queens, whose legacy of luxury lives on.",
    image: palacesImg,
     link: "/palace"   // <-- path of your Hotel component route
  },
  hotels: {
    title: "HOTELS",
    description:
      "Urban refuges at the centre of many of the world’s most significant hubs – Taj Hotels welcome you into soulful indulgence, built on individual attention. Savour the Taj touch and enjoy each moment.",
    image: hotelsImg,
   link: "/Hotel"   // <-- path of your Hotel component route
  },
  resorts: {
    title: "RESORTS",
    description:
      "Retreats in coveted locales, embraced by nature, for breathtaking escapes – Taj Resorts pair peerless service with pristine destinations, crafting memories of inspired discovery and indulgent seclusion.",
    image: resortsImg,
    link: "/Resort"   // <-- path of your Hotel component route
  },
  safaris: {
    title: "SAFARIS",
    description:
      "Unbridled wilderness meets unrivalled amenities and service. Taj Safaris are pampering portals into the unspoilt majesty of Mother Nature. Embark on your great adventure.",
    image: safarisImg,
     link: "/Hotel"   // <-- path of your Hotel component routes",
  },
};
  const [active, setActive] = useState("hotels");
  


    return (
        <div>
    <div
  style={{
    backgroundImage: `url(${taj})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    color: "white",
  }}

>
  <Navbar />
            {/* You can add content here if needed */}
  <div
    style={{
      position: "absolute",
      bottom: "50px", // distance from bottom
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
      maxWidth: "800px",
    }}
  >
    <h1 style={{ fontFamily: "serif", color:"black", fontWeight: "bold" }}>
      ABOUT 
    </h1>
    </div>
    </div>

           <Container className="text-center my-5">
      {/* Heading with lines */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div style={{ flex: 1, height: "1px", backgroundColor: "#555" }}></div>
        <h1 className="mx-3 fw-bold" style={{ fontFamily: "serif" }}>
          THE UNPARALLELED
        </h1>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#555" }}></div>
      </div>

      <h1 className="fw-bold mb-4" style={{ fontFamily: "serif" }}>
        GUARDIAN OF GRANDEUR
      </h1>

      {/* Paragraph */}
      <p className="text-muted" style={{ maxWidth: "800px", margin: "0 auto" }}>
        Built on a vision of grandeur, Taj Hotels conjures a panoply of
        superlative experiences that are envisioned to indulge and forge
        unforgettable memories.
      </p>
    </Container>
   <div
  className="bg-dark"
  style={{ width: "100%", height: "1800px" }}
>
  <h1
    style={{
      color: "white",
      textAlign: "center",
      paddingTop: "100px",
      fontFamily: "serif",
    }}
  >
    A Feeling Called ‘Tajness’
  </h1>
  <h6 style={{
      color: "white",
      textAlign: "center",
      paddingTop: "50px",
      fontFamily: "serif",
    }}>Crafting individual experiences is an artform at Taj. Regal, memorable, tailored to your every whim – and meant to be savoured forever.
    <br/> Experience the warmth, intuition and sensitivity that imbue every moment at Taj Hotels.</h6>

  {/* Video instead of image */}
  <video
    src={tajvideo}
    loop
    muted
    controls
    style={{
      display: "block",
      margin: "20px auto",
      maxWidth: "100%",
      height: "600px",
      objectFit: "cover",
    }}
  />
  <h1
    style={{
      color: "white",
      textAlign: "center",
      paddingTop: "100px",
      fontFamily: "serif",
    }}
  >
   Paathya
  </h1>
  <h6 style={{
      color: "white",
      textAlign: "center",
      paddingTop: "50px",
      fontFamily: "serif",
    }}>Derived from the Sanskrit term पथ्य, inferring a path, Paathya encapsulates our initiatives to lead positive change in alignment with the core values of IHCL: Trust amongst stakeholders, Awareness of the needs of our ecosystem and Joy at the heart of all efforts.</h6>
<Container className="text-center py-5">
      <Row className="justify-content-center">
        {App.map((item, idx) => (
          <Col xs={12} sm={6} md={4} lg={4} key={idx} className="mb-4">
            <div className="app">
              <img
  src={item.img}
  alt={item.title}
  className="img-fluid"
  style={{ maxWidth: "300px", height: "auto", margin: "0 auto" }}
/>

              <div className="app">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container></div>
      <h1
    style={{
      color: "black",
      textAlign: "center",
      paddingTop: "100px",
      fontFamily: "serif",
    }}
  >
    A Global Legend


  </h1>
  <h6 style={{
      color: "black",
      textAlign: "center",
      paddingTop: "50px",
      fontFamily: "serif",
    }}>By infusing architectural landmarks with an inimitable soul of signature grace and warmth, Taj’s growing collection of hotels, palaces, safaris and resorts has extended its presence around the world.</h6>
     <div
  className="showcase"
  style={{
    backgroundImage: `url(${data[active].image})`,
  }}
>
  <div className="overlay">
    <h2>{data[active].title}</h2>
    {data[active].description && <p>{data[active].description}</p>}
    {data[active].link && (
  data[active].link.startsWith("/") ? (
    <Link to={data[active].link} className="more-link">
      MORE &gt;
    </Link>
  ) : (
    <a href={data[active].link} className="more-link" target="_blank" rel="noopener noreferrer">
      MORE &gt;
    </a>
  )
)}
  </div>

  <div className="menu">
    {Object.keys(data).map((key) => (
      <button
        key={key}
        className={`menu-item ${active === key ? "active" : ""}`}
        onClick={() => setActive(key)}
      >
        {data[key].title}
      </button>
    ))}
  </div>
</div>
<div><h1 className="fw-bold mb-4 text-center" style={{ fontFamily: "serif", paddingTop:"50px" }}>
  GUARDIAN OF GRANDEUR
</h1>
<h6 style={{
      color: "black",
      textAlign: "center",
      paddingTop: "20px",
      fontFamily: "serif",
    }}>Derived from the Sanskrit term पथ्य, inferring a path, Paathya encapsulates our initiatives to lead positive change in alignment with the core values of IHCL: Trust amongst stakeholders, Awareness of the needs of our ecosystem and Joy at the heart of all efforts.</h6>
</div>
<Carousel>
  <Carousel.Item>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={gateway} />
        <Card.Body>
          <Card.Title>REIMAGINED GATEWAY BRAND MARKS ONE YEAR WITH THE LAUNCH OF GATEWAY GOA.</Card.Title>
        </Card.Body>
       

<Link to="/hotel" className="more-btn">
  MORE <span className="arrow">›</span>
</Link>

      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={growth} />
        <Card.Body>
          <Card.Title>IHCL SETS NEW GROWTH BENCHMARKS IN FY2024 REACHES PORTFOLIO OF 300+HOTELS AHEAD OF MARKET GUIDANCE SIGNS 52 HOTELS AND OPENS 34 HOURS</Card.Title>
        </Card.Body>
     

<Link to="/hotel" className="more-btn">
  MORE <span className="arrow">›</span>
</Link>

    </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={bombay} />
        <Card.Body>
          <Card.Title> IHCL BOMBAY BRASSERIE DEBUTS IN SINGAPORE</Card.Title>
        </Card.Body>
       

<Link to="/hotel" className="more-btn">
  MORE <span className="arrow">›</span>
</Link>

      </Card>
      
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={sigh} />
        <Card.Body>
          <Card.Title>IHCL SIGNS GINDER IN SATARA.</Card.Title>
        </Card.Body>
      

<Link to="/hotel" className="more-btn">
  MORE <span className="arrow">›</span>
</Link>

      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={Brand} />
        <Card.Body>
          <Card.Title>IHCL ENTERS INTO SALES,MARKETING AND DISTRIBUTION AGREEMENT FOR THE STORIED CLARKS BRAND.</Card.Title>
        </Card.Body>
      
<Link to="/hotel" className="more-btn">
  MORE <span className="arrow">›</span>
</Link>

      </Card>
      <Card style={{ width: '25rem', margin: '10px', border: 'none' }}>
        <Card.Img variant="top" src={kolkate} />
        <Card.Body>
          <Card.Title>IHCL SIGNS MOU FOR REDEVELOPMENT OF CHOTELAL KI GHAT IN KOLKATE.</Card.Title>
        </Card.Body>
       
<Link to="/hotel" className="more-btn">
  MORE <span className="arrow">›</span>
</Link>

      </Card>
    </div>
  </Carousel.Item>
</Carousel>

  <Footer/>
</div>  
    )
}


export default About;