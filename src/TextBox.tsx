import React from "react";

type TextBoxProps = {
  type?: "text|number|button|hidden";
  name?: string;
  value?: string;
  ref?: any;
};

export const TextBox = (props: TextBoxProps) => {
  return <input {...props} />;
};
