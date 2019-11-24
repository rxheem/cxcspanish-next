const Breadcrumb = props => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      {props.children}
    </ul>
  </nav>
);

export default Breadcrumb;
