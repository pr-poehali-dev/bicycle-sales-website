
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";

interface BikeProps {
  bike: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

const BikeCard: React.FC<BikeProps> = ({ bike }) => {
  const { name, price, image, category } = bike;
  
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg animate-scale-up">
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <Badge className="absolute top-3 right-3">{category}</Badge>
      </div>
      <CardContent className="pt-6">
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        <p className="font-bold text-lg">{formattedPrice}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Icon name="Eye" className="mr-1" size={16} />
          Подробнее
        </Button>
        <Button size="sm">
          <Icon name="ShoppingCart" className="mr-1" size={16} />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BikeCard;
