import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav style={styles.nav}>

      {/* Logo */}
      <h1 style={styles.logo}>HomeScape</h1>

      {/* Links */}
      <ul style={styles.links}>
        <li style={styles.link}>Home</li>
        <li style={styles.link}>Shop</li>
        <li style={styles.link}>Categories</li>
        <li style={styles.link}>About</li>
      </ul>

      {/* Search */}
      <div style={styles.searchBox}>
        <FiSearch style={{ color: "#666" }} />
        <input
          type="text"
          placeholder="Search decor..."
          style={styles.input}
        />
      </div>

      {/* Icons */}
      <div style={styles.icons}>


        <div style={{ position: "relative" }}>
          <FaShoppingCart size={25}  style={styles.icon} />
          <span style={styles.badge}>2</span>
        </div>

    <FaUser style={styles.icon} />
    
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 40px",
    backgroundColor: "#FAF5EB",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #00796B, #D97F6A)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  links: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    color: "#333",
    fontWeight: "500",
  },

  link: {
    cursor: "pointer",
    transition: "0.3s",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "6px 12px",
    borderRadius: "20px",
    border: "1px solid #ddd",
  },

  input: {
    border: "none",
    outline: "none",
    marginLeft: "8px",
    fontSize: "14px",
  },

  icons: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    fontSize: "18px",
    color: "#333",
    position:"relative",
    left:"-40px"
  },

  icon: {
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    backgroundColor: "#D97F6A",
    color: "#fff",
    fontSize: "10px",
    padding: "2px 6px",
    borderRadius: "50%",
  },
};

export default Navbar;