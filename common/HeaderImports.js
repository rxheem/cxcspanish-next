import Link from "next/link";
import Head from "next/head";

const HeaderImports = props => (
  <Head>
    <meta name="Classification" content="Education" />
    <meta name="copyright" content="CXC Spanish Online" />
    <meta name="target" content="all" />
    <meta name="audience" content="all" />
    <meta name="coverage" content="Worldwide" />
    <meta name="og:type" content="website" />
    <meta name="rating" content="safe for kids" />
    <meta name="author" content="CXC Spanish Online, hola@cxcspanish.com" />
    <meta name="owner" content="CXC Spanish" />
    <meta name="directory" content="submission" />
    <meta name="distribution" content="Global" />
    <meta name="rating" content="General" />
    <meta name="revisit-after" content="1 days" />
    <meta httpEquiv="Expires" content="3å" />
    <meta httpEquiv="Pragma" content="no-cache" />
    <meta name="language" content="EN" />
    <meta name="fb:page_id" content="105703077445673" />
    <meta
      name="rel icon"
      content="./assets/kisspng-spanish-logos-translation-celebrando-la-navidad-5afdf35c4e3dd8.0682344115265923483205.png"
    />
    <meta name="og:site_name" content="CXC Spanish Online" />
    <meta
      name="robots"
      content="archive,follow,imageindex,index,odp,snippet,translate"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css"
      integrity="sha256-cCazLItaM+Zz5UEzu9HNzlgWhXlvknCzjdE45LBeTns="
      crossOrigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <style>{`
.badge {
	display: inline-block;
	padding: .25em .4em;
	font-size: 75%;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: .25rem;
	transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
	.badge {
		transition: none
	}
}

a.badge:focus,
a.badge:hover {
	text-decoration: none
}

.badge:empty {
	display: none
}

.btn .badge {
	position: relative;
	top: -1px
}

.badge-pill {
	padding-right: .6em;
	padding-left: .6em;
	border-radius: 10rem
}

.badge-primary {
	color: #fff;
	background-color: #007bff
}

a.badge-primary:focus,
a.badge-primary:hover {
	color: #fff;
	background-color: #0062cc
}

a.badge-primary.focus,
a.badge-primary:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.badge-secondary {
	color: #fff;
	background-color: #6c757d
}

a.badge-secondary:focus,
a.badge-secondary:hover {
	color: #fff;
	background-color: #545b62
}

a.badge-secondary.focus,
a.badge-secondary:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.badge-success {
	color: #fff;
	background-color: #28a745
}

a.badge-success:focus,
a.badge-success:hover {
	color: #fff;
	background-color: #1e7e34
}

a.badge-success.focus,
a.badge-success:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.badge-info {
	color: #fff;
	background-color: #17a2b8
}

a.badge-info:focus,
a.badge-info:hover {
	color: #fff;
	background-color: #117a8b
}

a.badge-info.focus,
a.badge-info:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.badge-warning {
	color: #212529;
	background-color: #ffc107
}

a.badge-warning:focus,
a.badge-warning:hover {
	color: #212529;
	background-color: #d39e00
}

a.badge-warning.focus,
a.badge-warning:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.badge-danger {
	color: #fff;
	background-color: #dc3545
}

a.badge-danger:focus,
a.badge-danger:hover {
	color: #fff;
	background-color: #bd2130
}

a.badge-danger.focus,
a.badge-danger:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.badge-light {
	color: #212529;
	background-color: #f8f9fa
}

a.badge-light:focus,
a.badge-light:hover {
	color: #212529;
	background-color: #dae0e5
}

a.badge-light.focus,
a.badge-light:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.badge-dark {
	color: #fff;
	background-color: #343a40
}

a.badge-dark:focus,
a.badge-dark:hover {
	color: #fff;
	background-color: #1d2124
}

a.badge-dark.focus,
a.badge-dark:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}
`}</style>
  </Head>
);

export default HeaderImports;
