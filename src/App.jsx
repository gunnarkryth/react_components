import "./assets/styles/App.css";

import { Wrapper } from "./assets/components/wrapper/wrapper";
import { Hgroup } from "./assets/components/Hgroup/Hgroup";
import { H1 } from "./assets/components/Hgroup/H1";
import { H2 } from "./assets/components/Hgroup/H2";

import { CardContainer } from "./assets/components/Card/CardContainer";
import { Card } from "./assets/components/Card/Card";
import { CardHeader } from "./assets/components/Card/CardHeader";
import { CardImage } from "./assets/components/Card/CardImage";
import { CardBody } from "./assets/components/Card/CardBody";
import { CardFooter } from "./assets/components/Card/CardFooter";

function App(props) {
  const cardData = [
    {
      title: "Card 1 title",
      textContent: "Card 1 content",
      image: "./src/assets/images/cards/card1.jpg",
      footerContent: "Card 1 footer",
    },
    {
      title: "Card 2 title",
      textContent: "Card 2 content",
      image: "./src/assets/images/cards/card2.jpg",
      footerContent: "Card 2 footer",
    },
    {
      title: "Card 3 title",
      textContent: "Card 3 content",
      image: "./src/assets/images/cards/card3.jpg",
      footerContent: "Card 3 footer",
    },
    {
      title: "Card 4 title",
      textContent: "Card 4 content",
      image: "./src/assets/images/cards/card4.jpg",
      footerContent: "Card 4 footer",
    },
    {
      title: "Card 5 title",
      textContent: "Card 5 content",
      image: "./src/assets/images/cards/card5.jpg",
      footerContent: "Card 5 footer",
    },
    {
      title: "Card 6 title",
      textContent: "Card 6 content",
      image: "./src/assets/images/cards/card6.jpg",
      footerContent: "Card 6 footer",
    },
    {
      title: "Card 7 title",
      textContent: "Card 7 content",
      image: "./src/assets/images/cards/card7.jpg",
      footerContent: "Card 7 footer",
    },
    {
      title: "Card 8 title",
      textContent: "Card 8 content",
      image: "./src/assets/images/cards/card8.jpg",
      footerContent: "Card 8 footer",
    },
    {
      title: "Card 9 title",
      textContent: "Card 9 content",
      image: "./src/assets/images/cards/card9.jpg",
      footerContent: "Card 9 footer",
    },
    {
      title: "Card 10 title",
      textContent: "Card 10 content",
      image: "./src/assets/images/cards/card10.jpg",
      footerContent: "Card 10 footer",
    },
    {
      title: "Card 11 title",
      textContent: "Card 11 content",
      image: "./src/assets/images/cards/card11.jpg",
      footerContent: "Card 11 footer",
    },
    {
      title: "Card 12 title",
      textContent: "Card 12 content",
      image: "./src/assets/images/cards/card12.webp",
      footerContent: "Card 12 footer",
    },
    {
      title: "Card 13 title",
      textContent: "Card 13 content",
      image: "./src/assets/images/cards/card13.jpg",
      footerContent: "Card 13 footer",
    },
    {
      title: "Card 14 title",
      textContent: "Card 14 content",
      image: "./src/assets/images/cards/card14.jfif",
      footerContent: "Card 14 footer",
    },
    {
      title: "Card 15 title",
      textContent: "Card 15 content",
      image: "./src/assets/images/cards/card15.jpg",
      footerContent: "Card 15 footer",
    },
    {
      title: "Card 16 title",
      textContent: "Card 16 content",
      image: "./src/assets/images/cards/card16.jpg",
      footerContent: "Card 16 footer",
    },
    {
      title: "Card 17 title",
      textContent: "Card 17 content",
      image: "./src/assets/images/cards/card17.jpg",
      footerContent: "Card 17 footer",
    },
    {
      title: "Card 18 title",
      textContent: "Card 18 content",
      image: "./src/assets/images/cards/card18.avif",
      footerContent: "Card 18 footer",
    },
  ];

  return (
    <>
      <Wrapper>
        <Hgroup>
          <H1 title="Title" />
          <H2 title="Subtitle" />
        </Hgroup>
        <CardContainer>
          {cardData.map((card, index) => (
            <Card key={index}>
              <CardHeader title={card.title} />
              <CardImage src={card.image} />
              <CardBody content={card.textContent} />
              <CardFooter content={card.footerContent} />
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </>
  );
}

export default App;
