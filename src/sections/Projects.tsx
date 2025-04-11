import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section className="profile-section" id="profile">
      <div className="profile-container">
        <img 
          src="/pic.jpg" 
          alt="Profile" 
          className="profile-img"
        />
        <div className="profile-info">
          <h1 className="profile-name">Awadhooth Shrinivas Kulkarni</h1>
          <p className="profile-role">Aspiring Software Developer | Tech Enthusiast</p>
          <p className="profile-description">
            I’m a dedicated Computer Science student passionate about developing efficient and scalable software solutions. 
            I thrive in collaborative environments and love exploring modern tech stacks, building intuitive UIs, 
            and solving real-world problems through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
