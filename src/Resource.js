import React from 'react';


const Resource = () => {
  const articles = [
    { id: 1, title: 'Getting Started with React', link: 'https://example.com/react-start' },
    { id: 2, title: 'Advanced CSS Techniques', link: 'https://example.com/css-advanced' },
    // Add more articles as needed
  ];

  const tutorials = [
    { id: 1, title: 'Building a RESTful API with Node.js', link: 'https://example.com/node-api' },
    { id: 2, title: 'Introduction to Database Design', link: 'https://example.com/database-design' },
    // Add more tutorials as needed
  ];

  return (
    <div className="container mx-auto my-8 p-4 lg:p-8 bg-white shadow-lg rounded-md bg-gradient-to-r from-[#00df9a] to-[#338eff]">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4">Resources</h1>

      <section className="mb-8">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Featured Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="mb-2">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Tutorials</h2>
        <ul>
          {tutorials.map((tutorial) => (
            <li key={tutorial.id} className="mb-2">
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                {tutorial.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resource;
