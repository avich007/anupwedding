import "./App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faComments } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WishBox from "./components/WishBox";

function App() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

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
            C<u>lick</u>s 📸
          </p>
          {/* <FontAwesomeIcon icon={faCameraRetro} className="camera" /> */}
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
      <WishesContainer>
        <Wishes>
          <p className="text3">
            S<u>alutation</u>s 🎊
          </p>
          {/* <FontAwesomeIcon icon={faComments} className="camera" /> */}
        </Wishes>
        <Carousel {...settings}>
          <Wish>
            <div>
              <h1>Happy Married Life</h1>
              <h2>Avinash</h2>
              <h3>Chennai</h3>
            </div>
          </Wish>
          <Wish>
            <div>
              <h1>All the Best</h1>
              <h2>Sriram</h2>
              <h3>Nellore</h3>
            </div>
          </Wish>
        </Carousel>
      </WishesContainer>
      <WishBox />
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

const Wishes = styled.div`
  margin-top: 0px;
  display: flex;
  align-items: center;
`;

const WishesContainer = styled.div``;

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

const Wish = styled.div`
  height: 200px;
  background-color: silver;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  div {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
`;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
