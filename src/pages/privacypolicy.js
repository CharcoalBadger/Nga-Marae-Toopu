import React from "react";
import "./privacypolicy.css"; // Create and use appropriate CSS for layout

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: 10/12/2023</p>
      <p>
        Welcome to NgaaMaraeToopu.co.nz, a digital space dedicated to keeping
        our Maori community informed and connected. This privacy policy explains
        how we handle information on our website.
      </p>

      <h2>Information We Do Not Collect</h2>
      <p>
        We do not collect personal information from our users. Visitors are free
        to explore our site, learn about our community, view upcoming events,
        and enjoy our shared history without providing any personal data.
      </p>

      <h2>Cookies and Tracking Technology</h2>
      <p>
        We use cookies solely for the purpose of enhancing user experience and
        website functionality. These cookies do not collect personal
        information. They may include:
      </p>
      <ul>
        <li>
          Session cookies to maintain user session state across page requests.
        </li>
        <li>
          Functionality cookies to remember user preferences and settings.
        </li>
      </ul>

      <h2>Links to Other Websites</h2>
      <p>
        Our website contains links to other websites, including social media
        platforms. Please be aware that we are not responsible for the privacy
        practices of such other sites. We encourage our users to be aware when
        they leave our site and to read the privacy statements of any other site
        that collects personal information.
      </p>

      <h2>Changes to Our Privacy Policy</h2>
      <p>
        Any changes we may make to our privacy policy in the future will be
        posted on this page. Please check back frequently to see any updates or
        changes.
      </p>
    </div>
  );
}
