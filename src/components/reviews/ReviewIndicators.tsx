
interface ReviewIndicatorsProps {
  count: number;
  active: number;
  onChange: (index: number, direction: number) => void;
}

const ReviewIndicators = ({ count, active, onChange }: ReviewIndicatorsProps) => {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx, idx > active ? 1 : -1)}
          className={`w-3 h-3 rounded-full transition-colors ${
            idx === active ? "bg-primary" : "bg-gray-300"
          }`}
          aria-label={`Перейти к отзыву ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default ReviewIndicators;
