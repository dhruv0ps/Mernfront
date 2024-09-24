import React from 'react';

const Company = () => {
  const companyOverview = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO' },
    { id: 2, name: 'Jane Smith', role: 'CTO' },
    // Add more team members as needed
  ];

  const projects = [
    { id: 1, name: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Project B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto my-8 p-4 lg:p-8 bg-white shadow-lg rounded-md bg-gradient-to-r from-[#00df9a] to-[#338eff]">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome to Our Company</h1>

      <section className="mb-4 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Company Overview</h2>
        <p>{companyOverview}</p>
      </section>

      <section className="mb-4 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Our Team</h2>
        <ul>
          {teamMembers.map((member) => (
            <li key={member.id} className="mb-2">
              <strong>{member.name}</strong> - {member.role}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-2">
              <strong>{project.name}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Company;
