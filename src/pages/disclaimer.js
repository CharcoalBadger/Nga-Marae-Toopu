import React from "react";
import "./disclaimer.css"; // Create and use appropriate CSS for layout

export default function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>
      <p>Last updated: 10/12/2023</p>
      <p>
        The information provided by NgaaMaraeToopu.co.nz (“we,” “us”, or “our”)
        on www.NgaaMaraeToopu.co.nz (the “Site”) is for general informational
        purposes only. All information on the Site is provided in good faith,
        however, we make no representation or warranty of any kind, express or
        implied, regarding the accuracy, adequacy, validity, reliability,
        availability, or completeness of any information on the Site.
      </p>

      <h2>External Links Disclaimer</h2>
      <p>
        The Site may contain (or you may be sent through the Site) links to
        other websites or content belonging to or originating from third parties
        or links to websites and features in banners or other advertising. Such
        external links are not investigated, monitored, or checked for accuracy,
        adequacy, validity, reliability, availability, or completeness by us.
      </p>

      <h2>Professional Disclaimer</h2>
      <p>
        The Site cannot and does not contain legal, health, or financial advice.
        The website information is provided for general informational and
        educational purposes only and is not a substitute for professional
        advice.
      </p>

      <h2>Error and Omissions Disclaimer</h2>
      <p>
        While we strive to make the information on this website as accurate as
        possible, we do not assert that our articles are error-free. We reserve
        the right to change this content at any time without notice, and we
        cannot guarantee the completeness or accuracy of information contained
        in our articles and on our website.
      </p>
    </div>
  );
}
