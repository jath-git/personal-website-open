import "./topMenu.scss";
import {
  GitHub,
  Mail,
  Phone,
  LinkedIn,
  NotificationImportant,
  PictureAsPdf,
} from "@material-ui/icons";
import RESUME, {
  EMAIL,
  PHONE,
  GITHUB,
  LINKEDIN,
  STATUS
} from "../../globalConstants";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={
        (window.scrollY > -1 ? "topbar " : "home-topbar ") +
        (menuOpen && "menu-open")
      }
    >
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
            jt
          </a>
          <div
            className="itemContainer"
            onClick={() => {
              setMenuOpen(false);
              window.open(`mailto:${EMAIL}`, "emailWindow");
            }}
          >
            <Mail className="icon" />
            <span>{EMAIL}</span>
          </div>
          {RESUME !== null ? <div
            className="itemContainer phone"
            onClick={() => {
              setMenuOpen(false);
              const phoneLength = PHONE.length;
              let trimmedPhone = "";
              for (let i = 0; i < phoneLength; ++i) {
                if (PHONE[i] >= "0" && PHONE[i] <= "9") {
                  trimmedPhone += PHONE[i];
                }
              }
              navigator.clipboard.writeText(trimmedPhone);
            }}
          >
            <Phone className="icon" />
            <span>{PHONE}</span>
          </div> : null}
          <div
            className="itemContainer"
            onClick={() => {
              setMenuOpen(false);
              window.open(`https://github.com/${GITHUB}/`);
            }}
          >
            <GitHub className="icon" />
            <span>{GITHUB}</span>
          </div>
          {RESUME !== null ? <div
            className="itemContainer"
            onClick={() => {
              setMenuOpen(false);
              window.open(`https://www.linkedin.com/in/${LINKEDIN}/`);
            }}
          >
            <LinkedIn className="icon" />
            <span>{LINKEDIN}</span>
          </div> : null}
          {RESUME !== null ? <div
            className="itemContainer"
            onClick={() => {
              setMenuOpen(false);
              window.open(RESUME, "_blank");
            }}
          >
            <PictureAsPdf className="icon" />
            <span>resume.pdf</span>
          </div> : null}
          {STATUS !== null ? <div
            className="status"
            onClick={() => {
              setMenuOpen(false);
              window.location.href = "#contact";
            }}
          >
            <NotificationImportant className="icon" />
            <span>{STATUS}</span>
          </div> : null}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
