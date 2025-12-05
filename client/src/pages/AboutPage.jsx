import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>Building a calm space for sharp frontend practice.</h1>
        <p className="lead">
          Taglay is a collection of concise, example-driven frontend guides. We focus on
          component-first patterns, sensible defaults, and practical integrations so you can
          learn by doing and apply the same solutions in real projects.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon">UX</div>
          <h3>Design first</h3>
          <p>
            Start with clear structure and intent: semantic headings, predictable spacing, and
            small, testable components. The "Design Decisions" article explains these choices
            and how they keep the UI maintainable.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">DX</div>
          <h3>Developer friendly</h3>
          <p>
            Examples are written to be read and reused. With Vite, minimal routing, and focused
            components, you can pick up the code quickly — see "Getting Started" and
            "Tips and Tricks" for practical onboarding steps.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">QA</div>
          <h3>Quality obsessed</h3>
          <p>
            We prefer small, verifiable improvements: accessible markup, clear aria patterns,
            and lightweight checks. The accessibility guidance helps make the demos usable for
            more people.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>2024</strong>
          <p>
            Prototype and initial articles published, covering layout recipes and component
            structure to demonstrate the project's approach.
          </p>
        </div>
        <div className="timeline-row">
          <strong>2025</strong>
          <p>
            Expanded coverage added: practical integrations, API patterns, and tips for
            extending the demo without introducing heavy dependencies.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Today</strong>
          <p>
            Ongoing updates focus on accessibility improvements, better developer ergonomics,
            and new short guides driven by community feedback.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3>Get the next drop.</h3>
        <p>
          Browse the latest articles on integrations, accessibility, and small-app
          extensibility — practical, copy-paste friendly examples that help you ship cleaner
          UI patterns faster.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
