import "./topbar.scss"
import { Person, Mail } from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">


        <div className="left">
          <a href="#intro" className="logo">Liebe</a>
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+49 123 456 78 90</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>omer@spandau.com </span>
          </div>

        </div>    



        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>


      </div>
    </div>
  );
}
