import "./App.css";
import { db } from "./firebase.config";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

  const [wish, setWish] = useState([]);

  // const fetchData = async () => {
  //   const response = db.collection("wishes");
  //   const snapshot = await response.get();

  //   snapshot.forEach((item) => {
  //     setWish([...wish, item.data()]);
  //     console.log(wish);
  //   });
  // };

  useEffect(() => {
    db.collection("wishes").onSnapshot((snapshot) => {
      setWish(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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
            L<u>iv</u>e
          </p>
          {/* <FontAwesomeIcon icon={faCameraRetro} className="camera" /> */}
        </Clicks>
        <iframe
          style={{ marginLeft: 30 }}
          width="600"
          height="630"
          src="https://www.youtube.com/embed/6MHz7HouNm8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ClicksContainer>
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
            <img
              alt=""
              src="/images/8DE1DC7B-CF48-462F-BB02-72844B5E9C50.jpeg"
            />
          </Wrap>
          <Wrap>
            <img
              alt=""
              src="/images/92D01B4B-C9CF-4E64-886F-2AC5F253736A.jpeg"
            />
          </Wrap>
          <Wrap>
            <img
              alt=""
              src="/images/AC868A10-55A2-47F4-8760-0FD6D46E536F.jpeg"
            />
          </Wrap>
          <Wrap>
            <img
              alt=""
              src="/images/C966B502-F8AC-4AA7-B27D-51F3C2AB8051.jpeg"
            />
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
          {wish &&
            wish.length > 0 &&
            wish.map((item) => (
              <Wish>
                <Message>
                  <MessageBody>{item.message}</MessageBody>
                  <div>
                    <Name>
                      {item.name},<City>{item.location}</City>
                    </Name>
                  </div>
                </Message>
              </Wish>
            ))}
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
  @media screen and (min-width: 601px) {
    height: 150px;
  }
  @media screen and (max-width: 600px) {
    height: 100px;
  }
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
  overflow-x: hidden;
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

const Message = styled.div`
  @media screen and (min-width: 601px) {
    margin: 30px;
  }
  @media screen and (max-width: 600px) {
    margin: 5px;
  }
`;

const Name = styled.span`
  margin-top: 10px;
  color: firebrick;
  @media screen and (min-width: 601px) {
    font-size: 16px;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: bold;
  }
  font-weight: bold;
`;

const City = styled.span`
  @media screen and (min-width: 601px) {
    font-size: 16px;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: bold;
  }
  color: firebrick;
  font-weight: bold;
`;

const MessageBody = styled.span`
  color: slateblue;
  font-weight: bold;
  @media screen and (min-width: 601px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
