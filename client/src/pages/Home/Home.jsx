import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section id="description" style={{"display": "flex"}}>
        <div id="image-section" style={{"flex": "1"}}>
          <img
            src="https://media.istockphoto.com/id/1271477166/vector/online-doctor-website-in-computer-with-medical-symbols-on-blue-and-white-background.jpg?s=170667a&w=0&k=20&c=pvHJ8JitIQJ0QuQl6l04HJrxWD1UegBVEnuG-Juf7nw="
            alt="Healthcare Image"
          />
        </div>

        <div className="container" style={{"flex": "1"}}>
          <h2>Where healthcare meets technology to enhance your lifestyle</h2>
          <p>Know and treat your body before its too late to be cured. </p>
        </div>
      </section>

      <section id="Services" style={{"display": "flex"}}>
        <div className="container" style={{"flex": "1"}}>
          <h2>Services</h2>
          <p>
            Our cutting-edge diagnosis platform revolutionizes healthcare by
            offering accurate and efficient disease diagnosis services at your
            fingertips. We provide comprehensive diagnostics of a wide range of
            diseases. Our services include:
            </p>
            <ul>
              <li>Rapid and reliable assessments</li>
              <li>
                Healthcare body recommendations according to the assessment
                provided
              </li>
            </ul>
            <p>
            Embracing the future of healthcare, we empower individuals to take
            proactive control of their well-being with our user-friendly,
            secure, and accessible digital diagnosis solutions.
          </p>
        </div>

        <div id="image-section" style={{"flex": "1"}}>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQGz1AhPttzxGg/article-cover_image-shrink_720_1280/0/1693387127383?e=2147483647&v=beta&t=7kdssQ85Xe2rsLpP5FsHvtGUv0bu7HtYa7cQ9M5Lkow"
            alt="Healthcare Image"
          />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing accurate and reliable Digital
            diagnosis services. Our team of experts uses the latest technology
            to help you understand and manage your health.
          </p>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to contact
            us:
          </p>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </section>

      <section id="faqs">
        <div className="container">
          <h2>FAQs</h2>
          <ul>
            <li>
              <strong>Q: How does the digital diagnosis platform work?</strong>
              <br />
              A: Our platform uses advanced algorithms to analyze medical data
              and provide accurate disease diagnoses.
            </li>
            <li>
              <strong>Q: Is my data secure?</strong>
              <br />
              A: Yes, we prioritize data security and follow strict privacy
              protocols to protect your information.
            </li>
            <li>
              <strong>Q: Can I access my diagnosis report online?</strong>
              <br />
              A: Yes, you can access your diagnosis report securely through our
              website .
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Digital diagnosis</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
