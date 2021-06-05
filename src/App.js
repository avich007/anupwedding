import "./App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <Container>
        <span className="text1">
          THE WEDDING{" "}
          <img
            alt=""
            className="weddingRing"
            src="/images/wedding-rings.svg"
          ></img>
        </span>
        <p className="text2">Anup & Hema</p>
        <BG src="/images/main.jpeg"></BG>
      </Container>
      <ClicksContainer>
        <Clicks>
          <p className="text3">
            C<u>lick</u>s
          </p>
          <FontAwesomeIcon icon={faCameraRetro} className="camera" />
        </Clicks>
        <Content>
          <Wrap>
            <img alt="" src="/images/main.jpeg" />
          </Wrap>
          <Wrap>
            <img alt="" src="/images/pic_Anup.jpg" />
          </Wrap>
          <Wrap>
            <img alt="" src="/images/2.jpg" />
          </Wrap>
          <Wrap>
            <img alt="" src="/images/4.jpg" />
          </Wrap>
          <Wrap>
            <img alt="" src="/images/5.jpg" />
          </Wrap>
          <Wrap>
            <img alt="" src="/images/6.jpg" />
          </Wrap>
        </Content>
      </ClicksContainer>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const BG = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  top: 0;
  z-index: -1;
`;

const Clicks = styled.div`
  margin-top: 0px;
  display: flex;
  align-items: center;
`;

const ClicksContainer = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  @media screen and (min-width: 601px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  margin: 0px 30px 0 30px;
`;

const Wrap = styled.div`
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
