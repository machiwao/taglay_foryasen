const articles = [
  {
    name: 'getting-started',
    title: "Getting Started with Taglay",
    content: [
      "Taglay is a lightweight note-taking and article demo built to show routing and component structure in a React + Vite app. This introductory article explains the project's purpose, how articles are structured, and where to find components in the source tree.",
      "The app stores articles as plain JavaScript objects exported from `article-content.js`. Each article includes a `name` used for routing, a `title` shown in lists and pages, and a `content` array where each entry represents a paragraph. This makes it easy to render previews and full articles.",
      "If you're exploring the code, open `src/components/ArticleList.jsx` to see how previews are generated and `src/pages/ArticlePage.jsx` to see the full article rendering."
    ]
  },
  {
    name: 'design-decisions',
    title: "Design Decisions Behind the UI",
    content: [
      "This article walks through some simple design choices used in the demo: component-driven layout, CSS modules for small isolated styles, and client-side routing with `react-router-dom`. These choices keep the demo approachable while reflecting common front-end patterns.",
      "The navigation is intentionally minimal. `Layout.jsx` centralizes page scaffolding while `NavBar.jsx` provides top-level links. The project uses Vite for fast development builds and HMR."
    ]
  },
  {
    name: 'tips-and-tricks',
    title: "Tips and Tricks for Extending Taglay",
    content: [
      "Here are a few tips if you want to extend this demo: add a markdown parser for richer article content, persist drafts to localStorage, or connect to a headless CMS for real content. Each change maps cleanly onto the project's file structure.",
      "For example, replace the `content` array with markdown strings and render them with `react-markdown`. Or add a search component that filters the `articles` array by title or paragraph content."
    ]
  }
]

export default articles;
