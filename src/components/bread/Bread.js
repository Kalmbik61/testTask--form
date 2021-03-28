import { Breadcrumbs, Link } from "@material-ui/core";

import "./bread.scss";
const Bread = ({ active }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className={`link ${active === "form" && "active"}`} href="/">
        Доставка
      </Link>
      <Link
        className={`link ${active === "checkout" && "active"}`}
        href="#"
        aria-current="page"
      >
        Оплата
      </Link>
    </Breadcrumbs>
  );
};

export default Bread;
