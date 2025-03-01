
import Navbar from "../Navbar/Navbar";
import "./Main.css";
import group4 from "../../assets/images/Group4.svg";
import pin from "../../assets/images/pin.svg";
import menuHorizontal from "../../assets/images/menu-horizontal.svg";
function Main() {
  return (
    <div>
      <Navbar />
      <div className="main-content-div">
        <div className="content-left">
          <h2>Dashboard</h2>
          <div className="heading-boxes">
            <div className="heading-box" style={{ backgroundColor: "#FFEFE7" }}>
              <div className="ap">Available Position</div>
              <h1>24</h1>
              <h5 style={{ color: "red" }}>4 Urgently needed</h5>
            </div>
            <div className="heading-box" style={{ backgroundColor: "#E8F0FB" }}>
              <div className="ap">Job Open</div>
              <h1>10</h1>
              <h5 style={{ color: "#3786F1" }}>4 Active hiring</h5>
            </div>
            <div className="heading-box" style={{ backgroundColor: "#FDEBF9" }}>
              <div className="ap">New Employee</div>
              <h1>24</h1>
              <h5 style={{ color: "#EE61CF" }}>4 Department</h5>
            </div>
          </div>

          <div className="heading-boxes">
            <div className="heading2-box">
              <div className="heading2-box-A">
                <h3>Total Employees</h3>
                <h1>216</h1>
                <p>120 Mens</p>
                <p>98 Womens</p>
              </div>
              <div className="heading2-box-B">
                <img src={group4} />
                <p>+2% Past month</p>
              </div>
            </div>
            <div className="heading2-box">
              <div className="heading2-box-A">
                <h3>Talent Request</h3>
                <h1>16</h1>
                <p>6 Mens</p>
                <p>10 Womens</p>
              </div>
              <div className="heading2-box-B">
                <img src={group4} />
                <p>+5% Past month</p>
              </div>
            </div>
          </div>
          <div className="announcement">
            <div className="announcement-head">
              <h2>Announcement</h2>
              <p>Today 13 Sep 2021</p>
            </div>
            <div className="announcement-content-box">
              <div className="content-box">
                <div className="content-text">
                  <div>
                    <h2>Outing schedule for every departement</h2>
                    <p>5 Minutes ago</p>
                  </div>
                  
                  <div className="content-icons">
                    <img src={pin} />
                    <img src={menuHorizontal} />
                  </div>
                </div>
                
              </div>
              <div className="content-box">
                <div className="content-text">
                  <div>
                    <h2>Meeting HR Department</h2>
                    <p>Yesterday, 12:30 PM</p>
                  </div>
                  
                  <div className="content-icons">
                    <img src={pin} />
                    <img src={menuHorizontal} />
                </div>
                </div>
                
              </div>
              <div className="content-box">
                <div className="content-text">
                  <div>
                  <h2>
                    IT Department need two more talents for UX/UI Designer
                    position
                  </h2>
                  <p>Yesterday, 09:15 AM</p>
                  </div>
                  
                  <div className="content-icons">
                    <img src={pin} />
                    <img src={menuHorizontal} />
                </div>
                </div>
                
              </div>
            </div>
            <h2
              style={{
                fontSize: "14px",
                color: "#FF5151",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              See All Announcement
            </h2>
          </div>
        </div>
        <div className="content-right">
          <div className="recent-activity">
            <div className="recent-activity-head">
              <h1>Recently Activity</h1>
            </div>
            <div className="recent-activity-content">
              <p>10.40 AM, Fri 10 Sept 2021</p>
              <h3>You Posted a New Job</h3>
              <h4>
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </h4>
            </div>
            <div className="recent-activity-foot">
              <h2>Today you makes 12 Activity</h2>
              <button>See All Activity</button>
            </div>
          </div>
          <div className="announcement announcement2 ">
            <div className="announcement-head">
              <h2>Upcoming Schedule</h2>
              <p>Today 13 Sep 2021</p>
            </div>
            <div className="announcement-content-box">
              <p style={{ fontSize: "12px", color: "#686868", padding: "5px" }}>
                Priority
              </p>
              <div className="content-box">
                <div className="content-text">
                  <div>
                    <h2>Review candidate applications</h2>
                    <p>Today - 11.30 AM</p>
                  </div>
                  
                  <div className="content-icons">
                    <img src={menuHorizontal} />
                </div>
                </div>
                
              </div>
              <p style={{ fontSize: "12px", color: "#686868", padding: "5px" }}>
                Other
              </p>

              <div className="content-box">
                <div className="content-text">
                  <div>
                  <h2>Interview with candidates</h2>
                  <p>Today - 10.30 AM</p>
                  </div>
                  
                  <div className="content-icons">
                  <img src={menuHorizontal} />
                </div>
                </div>
                
              </div>
              <div className="content-box">
                <div className="content-text">
                  <div>
                  <h2>
                    Short meeting with product designer from IT Departement
                  </h2>
                  <p>Today - 09.15 AM</p>
                  </div>
                  
                  <div className="content-icons">
                  <img src={menuHorizontal} />
                </div>
                </div>
                
              </div>
            </div>
            <h2
              style={{
                fontSize: "14px",
                color: "#FF5151",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Create a New Schedule
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
