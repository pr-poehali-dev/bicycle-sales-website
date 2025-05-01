
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
        <path d="M7 12C7 12 8.5 9 12 9C15.5 9 17 12 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 17V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-bold">ВелоЭксперт</span>
    </Link>
  );
};

export default Logo;
