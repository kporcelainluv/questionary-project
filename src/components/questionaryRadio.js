import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 16px;
  font-family: Arial, serif;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 16px;
  font-family: Arial, serif;
`;

export const QuestionaryRadio = ({ id, name, value, text, handleOnClick }) => {
  return (
    <Label htmlFor={id}>
      <Input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={() => {
          return handleOnClick(name, value);
        }}
      />
      {text}
    </Label>
  );
};
