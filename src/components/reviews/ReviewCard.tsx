
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "./types";
import Icon from "../ui/icon";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
  onNext: () => void;
  onPrev: () => void;
}

const ReviewCard = ({ review, onNext, onPrev }: ReviewCardProps) => {
  return (
    <Card className="shadow-lg bg-white/90 backdrop-blur border-0 overflow-hidden h-full">
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <ReviewCardSidebar review={review} />
          <ReviewCardContent 
            review={review} 
            onNext={onNext} 
            onPrev={onPrev} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface SidebarProps {
  review: Review;
}

const ReviewCardSidebar = ({ review }: SidebarProps) => {
  return (
    <div className="hidden md:block relative bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur"></div>
      </div>
      <div className="absolute -left-12 -bottom-12">
        <div className="w-24 h-24 bg-white/5 rounded-full backdrop-blur"></div>
      </div>
      <div className="relative z-10">
        <div className="text-3xl font-bold mb-2">
          {review.rating}.0
        </div>
        <div className="flex mb-4">
          <StarRating 
            rating={review.rating} 
            className="text-amber-300" 
          />
        </div>
        <div className="text-sm opacity-80 mt-auto pt-8">
          Дата отзыва: {review.date}
        </div>
      </div>
    </div>
  );
};

interface ContentProps {
  review: Review;
  onNext: () => void;
  onPrev: () => void;
}

const ReviewCardContent = ({ review, onNext, onPrev }: ContentProps) => {
  return (
    <div className="md:col-span-2 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover" 
        />
        <div>
          <div className="font-semibold">{review.name}</div>
          <div className="text-sm text-muted-foreground">Клиент ВелоЭксперт</div>
        </div>
        <div className="flex ml-auto md:hidden">
          <StarRating 
            rating={review.rating} 
            size={16} 
          />
        </div>
      </div>
      
      <div className="flex-1">
        <p className="text-gray-700 text-lg italic leading-relaxed">
          "{review.text}"
        </p>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-muted-foreground md:hidden">
          Дата: {review.date}
        </div>
        <div className="flex gap-2 ml-auto">
          <NavigationButton 
            onClick={onPrev}
            icon="ChevronLeft"
            label="Предыдущий отзыв"
          />
          <NavigationButton 
            onClick={onNext}
            icon="ChevronRight"
            label="Следующий отзыв"
          />
        </div>
      </div>
    </div>
  );
};

interface NavButtonProps {
  onClick: () => void;
  icon: string;
  label: string;
}

const NavigationButton = ({ onClick, icon, label }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full border hover:bg-primary/5 transition-colors hover:scale-105 active:scale-95"
      aria-label={label}
    >
      <Icon name={icon as any} />
    </button>
  );
};

export default ReviewCard;
