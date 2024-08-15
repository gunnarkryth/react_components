import "./assets/styles/App.css";

import { Wrapper } from "./assets/components/wrapper/wrapper";
import { Hgroup } from "./assets/components/Hgroup/Hgroup";
import { H1 } from "./assets/components/Hgroup/H1";
import { H2 } from "./assets/components/Hgroup/H2";

function App(props) {
  return (
    <>
      <Wrapper>
        <Hgroup>
          <H1 title="Title"></H1>
          <H2 title="Subtitle"></H2>
        </Hgroup>
      </Wrapper>
    </>
  );
}

export default App;
