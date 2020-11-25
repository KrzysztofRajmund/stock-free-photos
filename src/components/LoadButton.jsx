import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFeeds } from "../actions/fetchAction";

//components
import Feeds from "./Feeds";

const LoadButton = ({ getFeeds, feeds }) => {
  useEffect(() => {
    getFeeds();
  }, []);

  useEffect(() => {
    sliceFeedsLoop(0, feedsPerPage);
  }, [feeds]);

  const [feedsToShow, setFeedsToShow] = useState([]);
  const feedsPerPage = 8;
  const ref = useRef(feedsPerPage);
  let slicedFeedsContainer = [];

  const sliceFeedsLoop = (start, end) => {
    const slicedFeeds = feeds.slice(start, end);
   
    slicedFeedsContainer = slicedFeedsContainer.concat(slicedFeeds);
    console.log( slicedFeedsContainer," slicedFeedsContainer")
    setFeedsToShow(slicedFeedsContainer);
  };

  const handleShowMoreFeeds = () => {
    sliceFeedsLoop(ref.current, ref.current + feedsPerPage);
    ref.current += feedsPerPage;
  };

  console.log(feedsToShow,"feeds to show")

  return (
    <div className="feedsContainer">
      <Feeds feedsToShow={feedsToShow} />
      <Button
        className="outlinedBtn"
        variant="outline-primary"
        onClick={handleShowMoreFeeds}
      >
        Load other ...
      </Button>
    </div>
  );
};

LoadButton.propTypes = {
  getFeeds: PropTypes.func.isRequired,
  feeds: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  feeds: state.fetchReducer.feeds,
});

export default connect(mapStateToProps, { getFeeds })(LoadButton);
