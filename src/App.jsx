import "./assets/styles/App.css";

import { Wrapper } from "./assets/components/wrapper/wrapper";
import { Hgroup } from "./assets/components/Hgroup/Hgroup";
import { H1 } from "./assets/components/Hgroup/H1";
import { H2 } from "./assets/components/Hgroup/H2";

import { Card } from "./assets/components/Card/Card";
import { CardHeader } from "./assets/components/Card/CardHeader";
import { CardBody } from "./assets/components/Card/CardBody";
import { CardFooter } from "./assets/components/Card/CardFooter";

function App(props) {
  return (
    <>
      <Wrapper>
        <Hgroup>
          <H1 title="Title" />
          <H2 title="Subtitle" />
        </Hgroup>
        <Card>
          <CardHeader title="Card header" />
          <CardBody content="Content" />
          <CardFooter content="Card footer" />
        </Card>
      </Wrapper>
    </>
  );
}

export default App;
