import React from "react";

const Header = (props) => {
  //   const headerStyle = {
  //     backgroundColor: "royalblue",
  //     color: "#fff",
  //   };
  return (
    // <header
    //   //   style={{
    //   //     backgroundColor: "mediumblue",
    //   //     color: "#fff",
    //   //   }}
    //   style={headerStyle}
    // >
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
