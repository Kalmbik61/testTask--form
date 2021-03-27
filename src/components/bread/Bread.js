import { Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./bread.scss";
const Bread = () => {
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className="link active" to="/" onClick={handleClick}>
        Доставка
      </Link>
      <Link className="link" to="/checkout" onClick={handleClick}>
        Оплата
      </Link>
    </Breadcrumbs>
  );
};

export default Bread;
