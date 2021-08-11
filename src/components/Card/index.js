import React from "react";
import "./styles.css";

const Card = ({
  main = false,
  white = true,
  children,
  elevation = 1,
  content = "left",
}) => {
  return (
    <div
      className={[
        "card",
        `elevation-${elevation}`,
        main ? "card-main" : "",
        white ? "card-white" : "",
        content === "center"
          ? "content-center"
          : content === "left"
          ? "content-left"
          : "",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Card;
