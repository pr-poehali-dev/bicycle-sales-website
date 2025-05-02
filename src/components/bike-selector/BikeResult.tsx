
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "../ui/icon";
import { BikeModel } from "./types";

interface BikeResultProps {
  bike: BikeModel;
  terrainDisplayName: string;
}

const BikeResult = ({ bike, terrainDisplayName }: BikeResultProps) => {
  if (!bike) return null;

  return (
    <Card className="overflow-hidden h-full animate-scale-up">
      <div className="grid md:grid-cols-5 h-full">
        <BikeImage bike={bike} />
        <BikeDetails 
          bike={bike} 
          terrainDisplayName={terrainDisplayName} 
        />
      </div>
    </Card>
  );
};

interface BikeImageProps {
  bike: BikeModel;
}

const BikeImage = ({ bike }: BikeImageProps) => {
  return (
    <div className="md:col-span-3 h-64 md:h-full relative overflow-hidden">
      <img 
        src={bike.imageUrl} 
        alt={bike.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white md:hidden">
        <h3 className="font-bold text-xl">{bike.title}</h3>
      </div>
    </div>
  );
};

interface BikeDetailsProps {
  bike: BikeModel;
  terrainDisplayName: string;
}

const BikeDetails = ({ bike, terrainDisplayName }: BikeDetailsProps) => {
  return (
    <div className="md:col-span-2 p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-xl mb-2 hidden md:block">{bike.title}</h3>
        <p className="text-muted-foreground mb-4">{bike.description}</p>
        <BikeFeatures terrainDisplayName={terrainDisplayName} />
      </div>
      <BikePriceAndActions bike={bike} />
    </div>
  );
};

interface BikeFeaturesProps {
  terrainDisplayName: string;
}

const BikeFeatures = ({ terrainDisplayName }: BikeFeaturesProps) => {
  return (
    <div className="space-y-3">
      <FeatureItem text="Подходит для вашего роста" />
      <FeatureItem text={`Оптимален для ${terrainDisplayName}`} />
      <FeatureItem text="Соответствует уровню опыта" />
    </div>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon name="Check" className="text-green-500" size={18} />
      <span>{text}</span>
    </div>
  );
};

interface BikePriceAndActionsProps {
  bike: BikeModel;
}

const BikePriceAndActions = ({ bike }: BikePriceAndActionsProps) => {
  return (
    <div className="mt-6">
      <div className="text-2xl font-bold mb-3">{bike.price.toLocaleString()} ₽</div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="w-full gap-2 hover:scale-105 transition-transform">
          <Icon name="ShoppingCart" />
          В корзину
        </Button>
        <Button variant="outline" className="w-full gap-2 hover:bg-blue-50">
          <Icon name="Info" />
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default BikeResult;
