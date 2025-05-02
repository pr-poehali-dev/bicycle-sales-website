
import Icon from "../ui/icon";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

const StarRating = ({ 
  rating, 
  max = 5, 
  size = 20,
  className = "text-amber-400" 
}: StarRatingProps) => {
  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, idx) => (
        <Icon 
          key={idx} 
          name="Star" 
          size={size}
          className={idx < rating ? className : "text-gray-300"} 
        />
      ))}
    </div>
  );
};

export default StarRating;
