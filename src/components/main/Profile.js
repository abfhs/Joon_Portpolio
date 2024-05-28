import React, { useState } from 'react';
import '../../styles/Profile.css';
import { SlArrowDown } from "react-icons/sl";

const Profile = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleDetails = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="profile-container">
            <div className='flex-div'>
                <div className="profile-image">
                    <img src="/sky.jpeg" alt="Profile" />
                </div>
                <div className="profile-details">
                    <h2>John Doe</h2>
                    <p><strong>Age:</strong> 30</p>
                    <p><strong>Education:</strong> Bachelor's Degree in Computer Science</p>
                    <p><strong>Experience:</strong> 5 years in Web Development</p>
                    <p><strong>Certifications:</strong> AWS Certified Solutions Architect</p>
                    <SlArrowDown onClick={toggleDetails} className="icon" />

                </div>
            </div>
            {expanded && (
                <div className="additional-details">
                    <p><strong>Hobbies:</strong> Coding, Hiking, Reading</p>
                    <p><strong>Skills:</strong> React, Node.js, AWS, Docker</p>
                    <p><strong>Languages:</strong> English, Spanish</p>
                </div>
            )}
        </div>
    );
};

export default Profile;