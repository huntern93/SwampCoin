import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Container } from "react-bootstrap";
import { Header } from "./Components/Header";
import { Copyrights } from "./Components/Copyrights";

// Terms of Service Page Component
const TermsOfService = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <h1 className="mb-4">Terms of Service</h1>
          
          <section className="mb-5">
            <h2 className="mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Swamp Token ("$SWAMP") website, services, or products, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">2. Use of Service</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">3. High Risk Investment Warning</h2>
            <p>Cryptocurrency investments, including $SWAMP, are highly speculative and carry significant risks. You may lose your entire investment. Only invest what you can afford to lose.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">4. No Investment Advice</h2>
            <p>Nothing on this website constitutes professional and/or financial advice. All content is for informational purposes only. You are solely responsible for your investment decisions.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">5. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, $SWAMP and its team shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">7. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </section>
          
          <p className="font-italic mt-5">Last updated: April 2025</p>
        </Container>
      </div>
      <Copyrights />
    </>
  );
};

// Cookies Policy Page Component
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

// Privacy Policy Page Component
const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <h1 className="mb-4">Privacy Policy</h1>
          
          <section className="mb-5">
            <h2 className="mb-3">Introduction</h2>
            <p>At Swamp Token ("$SWAMP"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact information:</strong> Email address and any other information you provide when subscribing to our updates or contacting us.</li>
              <li><strong>Technical data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage data:</strong> Information about how you use our website and services.</li>
            </ul>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features of our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news and general information about our products and services</li>
            </ul>
          </section>
          
          <section className="mb-5">
            <h2 className="mb-3">Data Security</h2>
            <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
          </section>
          
          <p className="font-italic mt-5">Last updated: April 2025</p>
        </Container>
      </div>
      <Copyrights />
    </>
  );
};

// Contact Us Page Component
const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = React.useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <div style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <h1 className="mb-4 text-center">Contact Us</h1>
          <p className="text-center mb-5">Have questions or feedback? We'd love to hear from you!</p>
          
          <div className="row justify-content-center">
            <div className="col-md-8">
              {formStatus.submitted && (
                <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Name *</label>
                      <input 
                        type="text" 
                        className="form-control"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        className="form-control"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Message *</label>
                  <textarea 
                    className="form-control"
                    rows={5} 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    style={{ 
                      backgroundColor: "#615349", 
                      border: "2px solid #000000",
                      fontWeight: "bold"
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
              
              <div className="text-center mt-5">
                <h3 className="mb-3">Alternative Contact Methods</h3>
                <p className="mb-1"><strong>Email:</strong> support@swamptoken.com</p>
                <p><strong>Telegram:</strong> @SwampTokenSupport</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Copyrights />
    </>
  );
};

// Main App Routes Component
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/cookies" element={<CookiesPolicy />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;