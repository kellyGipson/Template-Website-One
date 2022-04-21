import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footerItemContainer">
        <section className="footerLogoContainer footer">
          <img
            className="footerCompanyImg"
            src={require("../assets/Logo2_Grey.webp")}
            alt="Company Logo"
          />
          <div className="footerCompanyText">Company Logo</div>
        </section>
        <section className="footerNav footer">
          <div className="footerHeading">Navigation</div>
          <div className="footerNavItem footerLink">Navigation Item</div>
          <div className="footerNavItem footerLink">Navigation Item</div>
          <div className="footerNavItem footerLink">Navigation Item</div>
          <div className="footerNavItem footerLink">Navigation Item</div>
        </section>
        <section className="footerOverview footer">
          <div className="footerHeading">Overview</div>
          <div className="footerOverviewItem footerLink">About</div>
          <div className="footerOverviewItem footerLink">Careers</div>
          <div className="footerOverviewItem footerLink">Terms of Service</div>
          <div className="footerOverviewItem footerLink">Privacy Policy</div>
        </section>
        <section className="footerSupport footer">
          <div className="footerHeading">Support</div>
          <div className="footerSupportItem footerLink">Support</div>
          <div className="footerSupportItem footerLink">Help</div>
          <div className="footerSupportItem footerLink">Do Not Sell My Info</div>
        </section>
        <section className="footerSocial footer">
          <div className="footerHeading">Follow Us!</div>
          <div className="footerSocialContainer">
            <FaInstagram className="footerSocialItem footerLink" />
            <FaYoutube className="footerSocialItem footerLink" />
            <FaTwitter className="footerSocialItem footerLink" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
