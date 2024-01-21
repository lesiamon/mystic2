const HamburgerDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`container ${isDropdownOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleDropdown}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerDropdown;