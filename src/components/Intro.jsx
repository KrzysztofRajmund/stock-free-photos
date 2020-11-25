import React from "react";
//react bootstrap
import { Jumbotron, Container,Button } from "react-bootstrap";

const Intro = () => {
  return (
    <Jumbotron fluid>
      <Container className="jumbotron__container">
        <h1>Hello fellow developer!</h1>
        <p>
          Do as much as you can in a decent amount of time. Do not push it, 1-4
          hours are totally okay. Just show us your skills.
          Sass/styled-components, BEM and React are preferred. But use anything
          you know, like or want.
        </p>
        <p>
        And most importantly - have fun!
        </p>
      </Container>
      <Button className="containedBtn mr-2" >Label</Button>
      <Button className="outlinedBtn ml-2" variant="outline-primary">Empty</Button>
    </Jumbotron>
  );
};

export default Intro;
