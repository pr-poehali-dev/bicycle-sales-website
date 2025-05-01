
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 4V8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16V20" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12H8" stroke="currentColor" strokeWidth="2" />
        <path d="M16 12H20" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="text-xl font-bold">ВелоМир</span>
    </Link>
  );
};

export default Logo;
