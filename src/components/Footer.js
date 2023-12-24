import { footerIcon, footerList } from "../data";
import "../index.css";

const Footer = (id) => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {footerList.map((footer) => {
          const { id, href, title } = footer;
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {title}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='footer-icons'>
        {footerIcon.map((footer) => {
          const { id, href, icon } = footer;
          return (
            <li key={id}>
              <a
                href={href}
                rel='noreferrer'
                target='_blank'
                className='footer-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
