import "../static/Home.css";
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <>
      <div className="container">

        <Sidebar></Sidebar>
        {/* Main Content */}
        <div className="main-content">
          <div className="header">
            <h2>For you</h2>
            <h2>Following</h2>
          </div>
          <div className="post">
            <div className="user-info">
              <div className="user-avatar"></div>
              <span>What is happening?!</span>
            </div>
            <div className="post-options">
              <i className="fas fa-image"></i>
              <i className="fas fa-gif"></i>
              <i className="fas fa-poll"></i>
              <i className="fas fa-smile"></i>
              <i className="fas fa-calendar-alt"></i>
            </div>
            <button className="post-button">Post</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="trending">
            <h3>What's happening</h3>
            <div className="trending-item">
              <p>Music · Trending</p>
              <p className="font-bold">Liam Payne</p>
              <p>
                Trending with <span className="hashtag">#OneDirection</span>
              </p>
            </div>
          </div>
          <div className="who-to-follow">
            <h3>Who to follow</h3>
            <div className="follow-item">
              <div className="follow-info">
                <div className="user-avatar"></div>
                <span>Eddie Trunk</span>
              </div>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
