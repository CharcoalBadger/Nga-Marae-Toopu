import React from "react";
import "./accessibilitystatement.css"; // Create and use appropriate CSS for layout

export default function AccessibilityStatement() {
  return (
    <div className="accessibility-statement-container">
      <h1>Accessibility Statement</h1>
      <p>Last updated: 10/12/2023</p>
      <p>
        We at NgaaMaraeToopu.co.nz are committed to ensuring digital
        accessibility for people with disabilities. We are continually improving
        the user experience for everyone and applying the relevant accessibility
        standards.
      </p>

      <h2>Conformance Status</h2>
      <p>
        Current accessibility standards efforts are based on the Web Content
        Accessibility Guidelines (WCAG) 2.1, level AA criteria. These guidelines
        not only help make web content accessible to users with sensory,
        cognitive and mobility disabilities, but ultimately to all users,
        regardless of ability.
      </p>

      <h2>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of NgaaMaraeToopu.co.nz.
        Please let us know if you encounter accessibility barriers on
        NgaaMaraeToopu.co.nz:
      </p>

      <h2>Compatibility with Browsers and Assistive Technology</h2>
      <p>
        NgaaMaraeToopu.co.nz is designed to be compatible with the following
        assistive technologies:
      </p>
      <ul>
        <li>Google Chrome with NVDA Screen Reader on Windows 10</li>
      </ul>
      <p>
        This statement was created on 10/12/2023 using the W3C Accessibility
        Statement Generator Tool.
      </p>
    </div>
  );
}
