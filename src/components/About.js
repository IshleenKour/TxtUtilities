import React from 'react';

const About = ({ mode }) => {
  const textColor = mode === 'dark' ? 'white' : 'black';

  return (
    <div
      className="about-container"
      style={{color: textColor }}
    >
      <h1>TextUtilities - React Text Transformation Tool</h1>

      <section style={{ marginBottom: "1rem" }}>
        <p>
          <strong>TextUtilities</strong> is a modern, client-side text manipulation application developed with React, showcasing proficiency in component-based architecture, state management, and user interface design. The application offers a suite of essential text editing features suitable for writers, developers, and content creators.
        </p>
      </section>

      <h3 style={{ marginBottom: "1rem" }}>Project Highlights</h3>
      <ul>
        <li>
          <strong>Built with React:</strong> Structured using four reusable components—Navbar.js (navigation and dark mode), Textform.js (interactive text editing), Alert.js (user notifications), and About.js (documentation).
        </li>
        <li>
          <strong>Comprehensive Text Utilities:</strong> Actions include converting text to uppercase, lowercase, sentence case, removing extra spaces, copying, and clearing text.
        </li>
        <li>
          <strong>Dark Mode Integration:</strong> Delivers a responsive dark mode feature for improved user experience and accessibility.
        </li>
        <li>
          <strong>Polished Branding:</strong> Features a custom favicon for a professional look and improved site identity.
        </li>
        <li>
          <strong>Responsive Feedback:</strong> Alert.js supplies immediate notifications for all text actions to ensure usability and interaction clarity.
        </li>
      </ul>

      <h3 style={{ marginBottom: "1rem" }}>Skills Demonstrated</h3>
      <ul>
        <li>Component-driven UI development in React</li>
        <li>State and prop management</li>
        <li>User-focused features (dark mode, alerts, favicon)</li>
        <li>Clean, minimalist styling and responsive design</li>
        <li>Functional logic for text processing and manipulation</li>
      </ul>

      <h3 style={{ marginBottom: "1rem" }}>Motivation and Application</h3>
      <p>
        TextUtilities streamlines common text editing tasks in an intuitive interface. This project highlights expertise in building single-page applications with React and demonstrates preparedness for professional roles in frontend and full stack web development. Both practical demonstration and real-world deployment are key goals for this application.
      </p>
    </div>
  );
};

export default About;
