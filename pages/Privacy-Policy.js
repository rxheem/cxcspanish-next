import Head from "next/head";

// All other imports
import Layout from "../components/Layout";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const PrivacyPolicy = props => (
  <Layout>
    <Head>
      <title>Privacy Policy | CXC Spanish</title>
      <meta name="description" content="" />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="Privacy Policy | CXC Spanish Guide" />
      <meta name="og:url" content="https://cxcspanish.com/privacy-policy" />
      <meta
        name="og:description"
        content="This notice describes our privacy policy. By visiting cxcspanish.com, you are accepting the practices described in this Privacy Notice."
      />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Privacy Policy" href="/privacy-policy" />
    </Breadcrumb>

    <div>
      <h1 className="is-4 title">Privacy Policy</h1>

      <p>
        This privacy policy has been compiled to better serve those who are
        concerned with how their 'Personally identifiable information' (PII) is
        being used online. PII, as used in US privacy law and information
        security, is information that can be used on its own or with other
        information to identify, contact, or locate a single person, or to
        identify an individual in context. Please read our privacy policy
        carefully to get a clear understanding of how we collect, use, protect
        or otherwise handle your Personally Identifiable Information in
        accordance with our website.
      </p>

      <br />
      <h1 className="title is-5">
        What personal information do we collect from the people that visit our
        website and blog?
      </h1>
      <p>
        When using, ordering or registering on our site, as appropriate, you may
        be asked to enter your name, email address, mailing address, credit card
        information or other details to help you with your experience.
      </p>

      <br />
      <h1 className="title is-5">When do we collect information?</h1>
      <p>
        We collect information from you when you register on our site, place an
        order, subscribe to a newsletter, fill out a form or enter information
        on our site.
      </p>

      <br />
      <h1 className="title is-5">How do we use your information?</h1>
      <p>We may use such information in the following ways:</p>

      <br />
      <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
        <li>Help us remember you</li>
        <li>
          To personalize user's experience and to allow us to deliver the type
          of content and product offerings in which you are most interested.
        </li>
        <li>To improve our website in order to better serve you.</li>
        <li>
          To allow us to better service you in responding to your customer
          service requests.
        </li>
        <li>
          To administer a contest, promotion, survey or other site feature.
        </li>
        <li>To quickly process your transactions.</li>
        <li>
          To send periodic emails regarding your order or other products and
          services.
        </li>
      </ul>

      <br />
      <h1 className="title is-5">Third party Links</h1>
      <p>
        Occasionally, at our discretion, we may include or offer third party
        products or services on our website. These third party sites have
        separate and independent privacy policies. We therefore have no
        responsibility or liability for the content and activities of these
        linked sites. Nonetheless, we seek to protect the integrity of our site
        and welcome any feedback about these sites.
      </p>

      <br />
      <h1 className="title is-5">Transfer Of Your Personal Information</h1>
      <p>
        Your information, including personal information, may be transferred to
        — and maintained on — computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ than those from your jurisdiction.
      </p>
      <br />
      <p>
        We will take all steps reasonably necessary to ensure that your data is
        treated securely and in accordance with this Privacy Policy and no
        transfer of your personal information will take place to an organization
        or a country unless there are adequate controls in place including the
        security of your data and other personal information.
      </p>

      <br />
      <h1 className="title is-5">Do we use 'cookies'?</h1>
      <p>
        Yes. Cookies are small files that a site or its service provider
        transfers to your computer's hard drive through your Web browser (if you
        allow) that enables the site's or service provider's systems to
        recognize your browser and capture and remember certain information. For
        instance, we use cookies to help us remember and process the items in
        your shopping cart. They are also used to help us understand your
        preferences based on previous or current site activity, which enables us
        to provide you with improved services. We also use cookies to help us
        compile aggregate data about site traffic and site interaction so that
        we can offer better site experiences and tools in the future.
      </p>

      <br />
      <p>We use cookies to:</p>

      <br />
      <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
        <li>Understand and save user's preferences for future visits.</li>
        <li>
          Compile aggregate data about site traffic and site interactions in
          order to offer better site experiences and tools in the future. We may
          also use trusted third party services that track this information on
          our behalf.
        </li>
        <li>Help remember and process topics that youinterest you the most</li>
        <li>Suggest other articles to you</li>
      </ul>

      <br />
      <p>
        You can choose to have your computer warn you each time a cookie is
        being sent, or you can choose to turn off all cookies. You do this
        through your browser (like Internet Explorer) settings. Each browser is
        a little different, so look at your browser's Help menu to learn the
        correct way to modify your cookies.
      </p>
      <br />

      <p>
        If you disable cookies off, some features will be disabled It will turn
        off some of the features that make your site experience more efficient
        and some of our services will not function properly.
      </p>

      <br />
      <small>Last revised 22 Nov 2019.</small>
    </div>
  </Layout>
);

export default PrivacyPolicy;
