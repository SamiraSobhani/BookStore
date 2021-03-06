import React from "react";
import { Link } from "react-router-dom";
import { BooksArray } from "../Components/BooksArray";
import Card from "react-bootstrap/Card";

function AllCookingBooks() {
  return (
    <>
      <h3>Cooking Books</h3>
      <hr />
      <div className="bookshelf">
        {BooksArray.map((book) => {
          if (book.Category === "cooking") {
            return (
              <Card>
                {console.log(book.Title)}
                <Link to={"./SingleBookInfo/" + book.id}>
                  <Card.Img
                    key={book.id}
                    variant="top"
                    src={book.imageUrl}
                    style={{ height: "320px" }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Text>Author: {book.Author}</Card.Text>
                </Card.Body>
              </Card>
            );
          } else return;
        })}
      </div>
    </>
  );
}

export default AllCookingBooks;
