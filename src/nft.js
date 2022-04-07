import logo from "./logo.svg";
import "./App.css";
import {Card, Button} from "react-bootstrap"
import { useState } from "react";

function Nft(props) {
console.log(props.nft)
  return (
    <div className="nft_collection">
      {props.nft.map((nft, index) => (
        <div className="nft" key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Contract Adress:</Card.Title>
              <Card.Text>{nft.contract}</Card.Text>
              <Card.Title>Collection Adress: </Card.Title>
              <Card.Text>{nft.collection}</Card.Text>
          <Card.Title> NFT name: </Card.Title>
          <Card.Text>{nft.meta.name}</Card.Text>
          <Card.Title>NFT Description</Card.Title>
          <Card.Text>{nft.meta.description}</Card.Text>
              <Button variant="primary">View Nft</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Nft;
