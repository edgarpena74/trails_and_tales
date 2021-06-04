import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import "./BottomMain.css";
import API from "../../../utils/API";
import Card from "react-bootstrap/Card";

const BottomIntro = () => {
  //This brings the seed data in to the bottom section of the
  //first page
  const [seeds, setSeeds] = useState([
    // {
    //   title: "",
    //   imageURL: "",
    // },
  ]);
  // This renders the seed data when it loads(is mounted)
  useEffect(() => {
    getSeedData();
  }, []);

  // This is the callback for getting te seed data and updating
  // the state for seeds const
  function getSeedData() {
    API.getSeeds().then((res) => {
      // console.log(res.data);
      setSeeds(res.data);
    });
  }
  // console.log(seeds);

  // const cards = ({title, imageURL}) => {

  // }

  return (
    // <div className="subDiv d-flex align-items-stretch">
    <div className="d-flex">
      <div className="container-fluid bottomDiv">
        <Container className="subContainer ">
          <Row className="subHeading ">
            <h1>Northern California Favorites</h1>
          </Row>
          {/* <Row className="subBoxRow d-flex justify-content-center"> */}
          <Row className="subBoxRow d-flex justify-content-center">
            {seeds.map((data) => (
              <Card key={data.id} style={{ width: "15rem", margin: "7px" }}>
                <Card.Body>
                  <Card.Text className="text-center">{data.title}</Card.Text>
                </Card.Body>
                <Card.Img
                  style={{ height: "178px" }}
                  variant="bottom"
                  src={data.imageURL}
                />
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BottomIntro;
