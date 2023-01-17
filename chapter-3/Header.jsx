import Logo from "../images/Logo.png";
import Search from "./Search";
import UserIcon from "../images/userIcon.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo-img" />
      </div>
      <div className="search-bar">
        <Search />
      </div>
      <div className="user-icon">
        <img src={UserIcon} alt="user profile" className="user-img" />
      </div>
    </div>
  );
};

export default Header;
