import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic1 from "../images/leftAbout_USE.jpg";
import pic2 from "../images/middleRightHome_USEALT.JPG";


const About = () => {
    return (
        
<html>

            
  <head>

  </head>
    <title>Recording and Video Production Studio</title> 
                     
  
    
    <body>
    <Container>

  <Row>
    <Col><img src={pic1} alt="1" width="618" height="464"/></Col>
    <Col><p>HEFTONE STUDIOS LLC, established by two brothers, Tim and Dan Heflin, is the first and only audio and video recording studio in Rocklin, CA.  And no, this is not the show "Parenthood".  Tim, the older brother, has successfully owned and operated an x-ray imaging company for over 25 years.  Dan, the younger brother, has a bachelors in music, a professional musician specializing in sax, and award winning short film director .  Okay, maybe a little like Parenthood.......</p></Col>
  </Row>
<br></br>
  <Row>
    <Col><p>One thing that is certain, HEFTONE STUDIOS is dedicated to providing the absolute best product to its customers by matching high quality technology with creativity and skill. Our state of the art tracking room has been designed with variable, acoustic options for all recording possibilities, even 5.1 Dolby playback. YouTube , iTunes, Pandora as well as social media outlets such as Facebook and Twitter is our focus to get our artists creative work seen and heard!</p></Col>
    <Col><img src={pic2} alt="2" width="618" height="412"/></Col>
  </Row>

      </Container>
        
    </body>


    </html>
    );
};

export default About;