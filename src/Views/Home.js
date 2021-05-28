import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageOne from "../img/img5.jpg";
import ImageTwo from "../img/img11.jpg";
import ImageThree from "../img/img8.jpg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BooksArray } from "../Components/BooksArray";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="home">
      <div className="homeCarousel">
        <Carousel fade>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 carouselimg"
              src={ImageOne}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 carouselimg"
              src={ImageTwo}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 carouselimg"
              src={ImageThree}
              alt="Third slide"
            />
          </Carousel.Item>
          {/* <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={ImageFour} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={ImageFive} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={ImageSix} alt="Third slide" />
          </Carousel.Item> */}
        </Carousel>
      </div>
      <h1 className="bookshelf-header">Now Trending</h1>
      {/* <hr /> */}

      <div className="bookshelf">
        {BooksArray.map((book) => {
          if (book.id <= 4) {
            return (
              <Card>
                <Link to={"./SingleBookInfo/" + book.id}>
                  <Card.Img
                    key={book.id}
                    variant="top"
                    src={book.imageUrl}
                    style={{ height: "300px", filter: "grayscale(0)" }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Text>Author : {book.Author}</Card.Text>
                </Card.Body>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Home;
