
import { Button } from "@/components/ui/button";
import Icon from "./ui/icon";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Твой идеальный велосипед в <span className="text-primary">ВелоЭксперт</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Классические и электрические велосипеды мировых брендов с гарантией качества и бесплатной доставкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="ShoppingBag" />
                Каталог
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Zap" />
                Электровелосипеды
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Truck" className="text-primary" />
                <span>Быстрая доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="text-primary" />
                <span>Гарантия 2 года</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RefreshCw" className="text-primary" />
                <span>30 дней на возврат</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-16 -right-16 h-72 w-72 bg-primary/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 bg-primary/5 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?auto=format&fit=crop&q=80&w=1470" 
              alt="Современный велосипед" 
              className="relative z-10 rounded-lg shadow-xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
