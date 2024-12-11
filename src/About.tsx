// src/About.js
import { useAuth } from "@frontegg/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const About = () => {
    const { user, isAuthenticated , error } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (!isAuthenticated) {
          // Redirect to a specific unauthorized page
          navigate("/desired-redirect");
        }
      }, [isAuthenticated, navigate]);


  return (
    <div>
      <h1>{user?.name}</h1>
      <p>This is the About page of the application.</p>
    </div>
  );
};

export default About;
