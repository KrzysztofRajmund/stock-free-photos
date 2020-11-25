import React, { useEffect,useState,useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFeeds } from "../actions/fetchAction";
//assets
import download from "../assets/download.png";
//components
import LoadButton from './LoadButton';


const Feeds = ({ feedsToShow }) => {

console.log(feedsToShow ,"feeds component")
  return (
    <Container>
    <Row className="col-12">
      <Col className="col-12">
        <div className="feeds-title">Download Your Favorite Image</div>
      </Col>
      {feedsToShow.map((feed) => (
feed.width > feed.height ? (
 <Col key={feed.id} className="col-12 col-md-4 col-lg-3  text-center">
  <Card className="card-main">
    <Card.Img variant="top" src={feed.download_url} />
    <Card.Body>
<Card.Title>{feed.author}</Card.Title>
      <Card.Text>
       Image size: {feed.width} x {feed.height}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
<a href={feed.url} target="_blank"><img src={download} width="25px" height="auto" alt="download icon"/></a>
    </Card.Footer>
  </Card>
 </Col>
) : ""
))}
    </Row>
  </Container>

  );
};


export default Feeds;
