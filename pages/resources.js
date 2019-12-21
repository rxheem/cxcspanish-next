import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";
import uuidv4 from "uuid";

import ResourceBookLayout from "./misc/ResourceBookLayout";

const Resources = props => (
  <Layout>
    <Head>
      <title>Resources | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Free past papers booklets for CSEC and CAPE subjects, all in one place!"
      />
      <meta
        name="keywords"
        content="cxc,csec,spanish,cxc past papers, pob,poa,or
        it,info text,cxc past papers"
      />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Resources" href="/resources" />
    </Breadcrumb>

    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                i
                d={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>

            {/* Booklet -  */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <ResourceBookLayout
                id={uuidv4()}
                title=""
                level=""
                yearStart=""
                yearEnd=""
                src=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="box">
          <ResourceBookLayout
            id={uuidv4()}
            title="Applied Mathematics"
            level="CAPE"
            yearStart="2007"
            yearEnd="2018"
            src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482852_4.jpg"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Resources;
