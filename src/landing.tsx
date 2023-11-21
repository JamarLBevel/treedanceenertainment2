import React from "react";
import { Container,Row,Col,Image,Card, CardGroup,Collapse,Button,Carousel} from "react-bootstrap";
import { useState, useRef } from "react";
import tde from './posters/tde.png'
import night from './posters/night.jpg';
import astral from './posters/astral.jpg';
import pride from './posters/pride.jpg';
import fisher from './posters/fisher.jpg';
import juug from './posters/juug.jpg';
import pick from './posters/pick.jpg';
import waste from './posters/waste.jpg';
import black from './posters/black.jpg';
import moment from './posters/moment.jpg';
import tdehead3 from './posters/treedancecf6.png';
import Jnav from "./jnav";
export default function Landing(){
//variables

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

//scroll down function

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //handle click to stripe

  const stripeClickSemi = () => {
    window.location.href = "https://buy.stripe.com/6oEdSR7Mnb8BeasfZ1"
  }
  const stripeClickAnnual = () => {
    window.location.href = "https://buy.stripe.com/bIY5ml2s33G93vO8wy"
  }

    return(
        
        <div style={{backgroundColor:'black',color:'white',textAlign:'center'}}>
          <Jnav/>
        
      <Image src={tdehead3} fluid/>
    <div style={{background:'#0b0c0f'}} className="p-4">
    <h3 style={{fontWeight:'bold'}}> Watch Orginals</h3>
   <p>Unshackle yourself from the sequel cycle! Embrace indie creators, fuel innovation. Say no to remakes, yes to fresh narratives. Your support ignites originality.</p>
   <Carousel>
      <Carousel.Item>
      <Card.Img src={waste} />
      </Carousel.Item>
      <Carousel.Item>
       <Card.Img src={black} />
      </Carousel.Item>
      <Carousel.Item>
       <Card.Img src={moment}/>
      </Carousel.Item>
    </Carousel>
   <h3 className="pt-3" style={{fontWeight:'bold'}}>Support Independent Filmmakers</h3>
   <p>Your support is the key to unlocking a realm of creativity, delivering you extraordinary stories, art, and innovations. Become a patron of originality today and shape a world of imagination like never before.</p>
   <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<div className="d-grid gap-2 p-5">
<Button style={{background:'#b72619',color:'white',fontWeight:'bold'}} size="lg" className="rounded-pill" variant="#b72619" onClick={handleClickScroll}>Join Today</Button>
</div>
    </div>
    

<div style={{background:'#0b0c0f'}}>


  <h3 style={{fontWeight:'bold',textAlign:'start'}}> Just Added</h3>
    <Row xs={2} md={4} lg={6} className="g-4 p-3">
      <Image src={astral} rounded/>
      <Image src={night} rounded/>
      <Image src={pride} rounded/>
      <Image src={fisher} rounded/>
      <Image src={juug} rounded/>
      <Image src={pick} rounded/>
    </Row> 
    <div className="p-4">
    <h3 style={{fontWeight:'bold'}}>Cancel Anytime</h3>
    <p>Charged once per month or once per year.</p>
    <h3 style={{fontWeight:'bold'}}>Unlimited Streaming</h3>
   <p>Get streaming access to all the content and all future releases</p>
    </div>
    <Image className='p-3' src={tde} rounded  fluid />
    </div>
<div style={{background:'#0b0c0f'}} id="section-1">
  <h1>Choose Your Plan</h1>
  <Container fluid className="p-5">
<Row xs={1} md={3} lg={4} className="g-4 p-4">
      <Col>
      <Card className="priceCard p-3 rounded-lg" style={{background:'#12321d'}}>
      <Card.Header className="p-1" style={{background:'white',color:'black'}}>most popular</Card.Header>
       <Card.Title style={{color:'white'}} className="pt-3">Annual</Card.Title>
        <Card.Body>
          <Card.Title style={{fontWeight:'bold',color:'white'}}>Tree Dance</Card.Title>
          <Card.Text>
           <h1 style={{fontWeight:'bold',color:'white'}}>$79.99</h1><p style={{color:'white'}}>per year</p>
          </Card.Text>
          <Button className="rounded-pill p-3" style={{background:'#b72619',fontWeight:'bold',color:'white'}} onClick={stripeClickAnnual} variant='#b72619'>Subscribe</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card  style={{background:'#12321d'}} className="priceCard p-4 ">
      <Card.Title style={{color:'white'}} className="pt-3">Semi-Annual</Card.Title>
        <Card.Body>
          <Card.Title style={{color:'white'}}>Tree Dance</Card.Title>
          <Card.Text>
            <h1 style={{fontWeight:'bold',color:'white'}}>$39.99</h1><p style={{color:'white'}}>semi-annum</p>
          </Card.Text>
          <Button className="rounded-pill p-3" style={{background:'#b72619',color:'white',fontWeight:'bold'}} onClick={stripeClickSemi} variant="'#b72619'">Subscribe</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      </div>

<div style={{background:'#0b0c0f'}} className="d-grid gap-2 p-3">
  <h2 style={{fontWeight:'bold'}}>Frequently Asked Questions</h2>
<Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>

What is Tree Dance?</Button>

<Collapse in={open}>
        <div id="example-collapse-text">
          Tree Dance is Streaming service that offers a great variety of independent TV shows, movies, animation, documentaries, and more. New entertainment is added every week!
        </div>
      </Collapse>
      <Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text2"
        aria-expanded={open2}>

How much does Tree Dance cost?</Button>

<Collapse in={open2}>
        <div id="example-collapse-text2">
         Watch Tree Dance on your smartphone, tablet, laptop, computer all for cost of $39.99 semi-annum or $79.99 per year. No extra costs. No contracts
        </div>
      </Collapse>
      <Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text4"
        aria-expanded={open4}>

Where can I watch?</Button>

<Collapse in={open4}>
        <div id="example-collapse-text4">
        Watch anywhere, anytime. Sign in with your Tree Dance account on the Tree Dance app on your mobile device.
        </div>
      </Collapse>
      <Button style={{textAlign:'center'}} variant="dark" size="lg"  onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text3"
        aria-expanded={open3}>

How do I cancel?</Button>

<Collapse in={open3}>
        <div id="example-collapse-text3">
          Tree Dance is flexible. There are no contracts, commitments and not a 20 step nonsense way to cancel. You can easily cancel your subscription in two clicks. Start or stop your account anytime.
        </div>
      </Collapse>
     
      </div>
      <div style={{background:'#0b0c0f'}} className="p-4">
      <hr
   style={{
   background: "#808080",
   height: "5px",
   border: "none",
   }}
/>
<a href="https://jamarbevel.wixsite.com/treedanceprivacy">privacy policy </a>
<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">terms of use</a>
      </div>
        </div>  

    );
}
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }