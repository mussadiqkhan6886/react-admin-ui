import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Admin Dashboard</h2>
      <p>
        This Admin Dashboard is a comprehensive control panel designed to manage, monitor, and interact with user and application data efficiently.
      </p>

      <section className="about-section">
        <h3>Purpose</h3>
        <p>
          The dashboard provides administrators with a centralized interface to view analytics, manage users, track activities, and maintain system-wide settings.
        </p>
      </section>

      <section className="about-section">
        <h3>Key Features</h3>
        <ul>
          <li>Responsive and clean user interface</li>
          <li>Dynamic data tables and charts</li>
          <li>User, product, and activity management</li>
          <li>Role-based access and authentication</li>
          <li>Theme toggle for Dark/Light modes</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Technology Stack</h3>
        <p>
          Built using React, TypeScript, SCSS, MUI, React Router, and custom state management.
        </p>
      </section>
    </div>
  );
};

export default About;
