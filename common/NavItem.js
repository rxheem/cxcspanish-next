import Link from "next/link";

const NavItem = props => (
  <Link href={props.href}>
    <a
      className="navbar-item"
      style={{ display: props.hide ? "none" : "visible" }}
    >
      {props.hasIcon ? (
        <i className={props.iconClass} style={{ color: props.color }} />
      ) : null}
      {props.title}
    </a>
  </Link>
);

export default NavItem;
