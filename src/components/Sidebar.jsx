import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (

        <>
        {/* Sidebar */}
            <div className="sidebar" >
                <div className="menu">
                    <div className="menu-item">
                        <i className="fas fa-home"></i> <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-search"></i> <span>Explore</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-bell"></i> <span>Notifications</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-envelope"></i> <span>Messages</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-user"></i> <Link to='/perfil'>Profile</Link>
                    </div>
                </div>
                <button className="post-button">Post</button>
            </div >
        </>
    );
}