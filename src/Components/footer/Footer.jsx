import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="fotter-part1">
          <h1>Prosperity shcool</h1>
          <p>
            We're a team of experienced developers creating innovative web and
            mobile solutions that empower businesses to succeed online. Let's
            bring your vision to life
          </p>
        </div>
        <div className="fotter-part2">
          <div>

            <h1>Quick Links</h1>
            <ul>
              <li>About Us</li>
              <li>Course</li>
              <li>Contact Us</li>
              <li>Location</li>

            </ul>

          </div>
          <div>
            <h1>Get in Touch</h1>
            <ul>
              <li>Email@example.com</li>
              <li>www.website.com</li>
              <li>+000000000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
