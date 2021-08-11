import React from "react";
import "./styles.css";

const FlexContainer = ({
  children,
  column = true,
  fullPage = true,
  white = true,
  justify = "center",
  align = "center",
  style,
}) => (
  <div
    className={[
      "container",
      column ? "column" : "row",
      fullPage ? "fullpage" : "",
      white ? "white" : "",
      justify === "center" ? "j-center" : "",
      align === "center" ? "a-center" : "",
    ].join(" ")}
    style={style}
  >
    {children}
  </div>
);

export default FlexContainer;
