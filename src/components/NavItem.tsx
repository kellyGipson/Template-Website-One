import React from "react";

type propTypes = {
  text: string;
};

const NavItem = (props: propTypes) => {
  return (
    <div className="NavItem" onClick={() => console.log("TODO")}>
      {props.text}
    </div>
  );
};

export default NavItem;
