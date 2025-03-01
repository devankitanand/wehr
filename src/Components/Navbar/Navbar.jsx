
import "./Navbar.css";
import union from "../../assets/images/Union.svg";
import frame10 from "../../assets/images/Frame10.svg";
import vector from "../../assets/images/Vector.svg";

import msg from "../../assets/images/msg.svg";
import mask_group from "../../assets/images/Mask_group.svg";
import menu from "../../assets/images/menu.svg";

function Navbar() {
  return (
    <div className="navbar-main-div">
      <img src={menu} className="menu" />

      <div className="serach-box">
        <input type="text" placeholder="Search" />
        <img src={union} />
      </div>
      <div className="account-box">
        <div className="nav-item">
          <img alt="recruitment" src={vector} />
        </div>
        <div className="nav-item">
          <img alt="recruitment" src={msg} />
        </div>
        <div className="nav-item">
          <img alt="recruitment" src={mask_group} />
        </div>
        <div className="nav-item">
          <h3>
            Admirra John 
          </h3>
          <img alt="recruitment" src={frame10} />
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
