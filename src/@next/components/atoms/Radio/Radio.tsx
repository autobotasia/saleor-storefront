/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Radio input.
 */
const Radio: React.FC<IProps> = ({
  checked,
  children,
  customLabel = false,
  ...props
}: IProps) => {
  const StyledInput = customLabel ? S.Input : S.LabeledInput;

  return (
    // @ts-ignore
    <StyledInput checked={checked || false}>
      <input type="radio" checked={checked} {...props} />{" "}
      <div>
        <span />
      </div>
      {children}
    </StyledInput>
  );
};

export { Radio };
