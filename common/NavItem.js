import Link from "next/link";
import FA from "react-fontawesome";

const NavItem = props => (
  <Link href={props.href}>
    <a
      className="navbar-item"
      style={{ display: props.hide ? "none" : "visible" }}
    >
      {props.hasIcon ? (
        <FA style={{ paddingRight: "7px" }} name={props.name} />
      ) : null}
      {props.title}
    </a>
  </Link>
);

export default NavItem;
