
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "./ui/icon";

interface BikeCardProps {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number;
  category: string;
}

const BikeCard = ({ id, title, price, oldPrice, imageUrl, rating, category }: BikeCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="relative overflow-hidden pt-[56.25%]">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {oldPrice && (
          <div className="absolute left-2 top-2 bg-destructive px-2 py-1 text-xs font-semibold text-white rounded">
            Скидка {Math.round(((oldPrice - price) / oldPrice) * 100)}%
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/70 hover:bg-white"
          aria-label="Добавить в избранное"
        >
          <Icon name="Heart" className="text-gray-700" />
        </Button>
      </div>
      <CardHeader className="p-4 pb-0">
        <CardDescription className="text-xs uppercase font-medium text-muted-foreground">
          {category}
        </CardDescription>
        <CardTitle className="text-base font-medium leading-tight mt-1 line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon 
              key={index} 
              name={index < rating ? "Star" : "StarOff"} 
              className={index < rating ? "text-amber-400" : "text-gray-300"} 
              size={16} 
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-baseline gap-2">
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice.toLocaleString()} ₽
            </span>
          )}
          <span className="text-lg font-bold">{price.toLocaleString()} ₽</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-1">
          <Icon name="ShoppingCart" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BikeCard;
