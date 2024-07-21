import React from "react";
import styled from "styled-components";

const RollDice = ({ RollingDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={RollingDice}>
        <img src={`/images/dice_${currentDice}.jpg`} alt="dice 1" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
