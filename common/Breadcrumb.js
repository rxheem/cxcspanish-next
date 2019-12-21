import Link from "next/link";

const Breadcrumb = props => (
  <nav className="breadcrumb is-desktop-only" aria-label="breadcrumbs">
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {props.children}
    </ul>
  </nav>
);

export default Breadcrumb;
