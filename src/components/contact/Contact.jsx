import "./contact.scss";
import { Copyright } from "@material-ui/icons";
import { EMAIL, NAME } from "../../globalConstants.js";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="header4">Contact Me</div>
      <div className="navigation">
        <img
          src="../universal/google.png"
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            window.open("https://mail.google.com");
          }}
          alt="google"
        ></img>
        <img
          src="../universal/yahoo.png"
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            window.open("https://mail.yahoo.com");
          }}
          alt="yahoo"
        ></img>
        <img
          src="../universal/microsoft.png"
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            window.open("https://outlook.live.com");
          }}
          alt="microsoft"
        ></img>
        <img
          src="../universal/other.png"
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            const searchEngine = ["https://google.com", "https://bing.com"];
            window.open(searchEngine[Math.round(Math.random())]);
          }}
          alt="other"
        ></img>
      </div>
      <div className="footer">
        <div className="text">
          Created by {NAME[0]} | <Copyright className="copyright" /> All rights
          reserved
        </div>
      </div>
    </div>
  );
}
