import Link from "next/link";

const BreadcrumbItem = props => (
  <li>
    <Link href={props.href}>
      <a href>{props.title}</a>
    </Link>
  </li>
);

export default BreadcrumbItem;
