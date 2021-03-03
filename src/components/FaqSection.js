import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle>
        <div className="question">
          <h4>How Do I Start?</h4>
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
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. E</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Different Payment Methods</h4>
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
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>What Products Do You Offer?</h4>
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
          <div className="faq-line"></div>
        </div>
      </Toggle>
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
