import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
            This is the second derpy page!
            <Link to="/">This makes me go back hoooome.</Link>
    </div>
  );
};

export default OtherPage;