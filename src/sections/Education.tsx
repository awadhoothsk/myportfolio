import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Siddaganga Institute of Technology (SIT), Tumakuru',
      status: 'Currently Pursuing',
      batch: '2021 - 2025',
    },
    {
      degree: 'Pre-University Education (12th)',
      institution: 'Sri Sathya Sai Loka Seva PU College, Alike',
      status: 'Completed',
      batch: '2018 - 2020',
    },
    {
      degree: 'Secondary Education (10th Grade)',
      institution: 'Sri Sathya Sai Loka Seva Vidyakendra, Alike',
      status: 'Completed',
      batch: '2018',
    }
  ];

  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map(({ degree, institution, status, batch }, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{degree}</h3>
            <p><strong>Institution:</strong> {institution}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Batch:</strong> {batch}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
