import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../components/Card/CardImage/404.svg";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div style={{ "text-align": "center" }}>
        <p style={{ "margin-top": "15px" }}>Page not found</p>
        <img src={PageNotFound} style={{ height: "400px" }} />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
