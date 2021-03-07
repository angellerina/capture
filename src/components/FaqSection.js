import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              eius animi debitis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              ipsam fuga ut ipsum, aperiam ipsa aliquid quaerat minus dolorum
              officia?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. E</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Deserunt itaque labore, sunt enim eveniet ratione consectetur
              alias, fugit dolores ad perferendis porro culpa tenetur?
              Distinctio, veritatis!
            </p>
            <p>
              Hic dignissimos ratione blanditiis veniam et nisi temporibus minus
              recusandae obcaecati iste amet, non adipisci commodi voluptatum,
              atque ab modi nihil aspernatur?
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              eius animi debitis! Deserunt itaque labore, sunt enim eveniet
              ratione consectetur alias, fugit dolores ad perferendis porro
              culpa tenetur? Distinctio, veritatis!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dignissimos ratione blanditiis veniam et nisi temporibus minus
              recusandae obcaecati iste amet, non adipisci commodi voluptatum,
              atque ab modi nihil aspernatur?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
