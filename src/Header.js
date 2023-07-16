import React from "react";

const Header = ({ title }) => {
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
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Grocery List",
};

export default Header;
