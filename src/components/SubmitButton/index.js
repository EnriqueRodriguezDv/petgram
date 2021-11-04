import React from "react";
import propTypes from "prop-types";
import { Button } from "./styles";

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: propTypes.bool,
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
};
