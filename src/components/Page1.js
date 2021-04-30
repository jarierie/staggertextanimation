import React, { useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meenoi from "../images/meenoi3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 90%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 300px;
  height: 400px;
  min-width: 300px;
  background-color: ${(props) => props.color};
  margin: 10px;
`;

const ImageBackElements = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.color};
  position: absolute;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  img {
    z-index: 90999;
  }
`;

const Page1 = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);

  //Animations

  const animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      },
    });

    tl.from(containerRef.current.childNodes, {
      y: 200,
      x: -30,
      translateX: 50,
      skewX: -10,
      opacity: 0,
      stagger: 0.4,
      ease: Linear.easeInOut,
    }).to(containerRef.current.childNodes, {
      x: "500%",
      stagger: 0.3,
      reversed: true,
      ease: Linear.easeInOut,
    });
  };

  const imageAnimation = () => {
    const tl = gsap.timeline();
    tl.to(imageContainerRef.current.childNodes[0], {
      rotate: -10,
      ease: Linear.easeInOut,
      duration: 0.4,
    })
      .to(
        imageContainerRef.current.childNodes[1],
        { rotate: 10, duration: 0.4, ease: Linear.easeInOut },
        0
      )
      .to(imageContainerRef.current.childNodes[2], { scale: 1.1 }, 0);
  };

  const imageAnimationOut = () => {
    const tl = gsap.timeline();
    tl.to(imageContainerRef.current.childNodes[0], {
      rotate: 0,
    })
      .to(imageContainerRef.current.childNodes[1], { rotate: 0 }, "-=0.5")
      .to(imageContainerRef.current.childNodes[2], { scale: 1 }, 0);
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <Container></Container>
      <Container ref={containerRef}>
        <Item color='lightgreen'></Item>
        <Item color='tomato'></Item>
        <Item color='lightblue'></Item>
      </Container>
      <Container>
        <ImageContainer
          onMouseOver={imageAnimation}
          onMouseOut={imageAnimationOut}
          ref={imageContainerRef}
        >
          <ImageBackElements color='red'></ImageBackElements>
          <ImageBackElements color='blue'></ImageBackElements>
          <img src={meenoi}></img>
        </ImageContainer>
      </Container>
    </>
  );
};

export default Page1;
