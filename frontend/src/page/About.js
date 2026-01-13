import React from 'react';

const About = () => {
    return (
        <div style={{ 
            maxWidth: "800px", 
            margin: "0 auto", 
            padding: "40px 20px", 
            fontFamily: "Arial, sans-serif" 
        }}>
            <h1 style={{ 
                textAlign: "center", 
                marginBottom: "40px", 
                color: "#333", 
                textTransform: "uppercase", 
                fontSize: "28px" 
            }}>
                About Our Project
            </h1>

            <p style={{ 
                fontSize: "20px", 
                lineHeight: "1.5", 
                color: "#555" 
            }}>
                This project is built with the goal of improving and revolutionizing the online shopping experience, with a strong focus on quality, usability, and service.
            </p>
        </div>
    );
};

export default About;
