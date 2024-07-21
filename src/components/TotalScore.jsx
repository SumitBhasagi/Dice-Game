import React from "react";
import styled from "styled-components";
const TotalScore = ({ Score }) => {
  return (
    <div>
      <ScoreContainer>
        <h1>{Score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </div>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 400px;
  }
`;
