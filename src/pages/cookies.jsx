import React from 'react';
import { Container } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Copyrights } from "../Components/Copyrights";

const CookiesPolicy = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <h1 className="mb-4">Cookies Policy</h1>
          
          <section className="mb-5">
            <h2 className="mb-3">What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">How We Use Cookies</h2>
            <p>We use cookies for several reasons, including:</p>
            <ul>
              <li>To ensure the website functions properly</li>
              <li>To improve your browsing experience</li>
              <li>To gather anonymous analytics information</li>
              <li>To remember your preferences</li>
              <li>To help with our marketing efforts</li>
            </ul>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">Types of Cookies We Use</h2>
            
            <h4 className="mt-4">Essential Cookies</h4>
            <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.</p>
            
            <h4 className="mt-4">Analytics Cookies</h4>
            <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.</p>
            
            <h4 className="mt-4">Marketing Cookies</h4>
            <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">How to Manage Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of the website.</p>
          </section>
          
          <p className="font-italic mt-5">Last updated: April 2025</p>
        </Container>
      </div>
      <Copyrights />
    </>
  );
};

export default CookiesPolicy;