
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "./ui/icon";
import { Link } from "react-router-dom";

const ElectricBikes = () => {
  const eBikes = [
    {
      title: "Городской",
      description: "Комфортная городская езда с электроподдержкой",
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Горный",
      description: "Мощные моторы для бездорожья и горных трасс",
      icon: "Mountain",
      image: "https://images.unsplash.com/photo-1565108273456-e2a507ee35cb?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Складной",
      description: "Компактные модели для городской мобильности",
      icon: "FoldVertical",
      image: "https://images.unsplash.com/photo-1602728272625-9aa00fa87909?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Электровелосипеды</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Современные электровелосипеды для города и бездорожья. 
            Экологичная альтернатива автомобилю с запасом хода до 100 км.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eBikes.map((bike, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <Icon name={bike.icon as any} className="text-primary bg-white/20 p-1 rounded-full" size={20} />
                    <h3 className="text-xl font-bold">{bike.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-4">{bike.description}</p>
                <Link to={`/electric/${bike.title.toLowerCase()}`}>
                  <Button variant="outline" className="w-full">
                    Посмотреть модели
                    <Icon name="ArrowRight" className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-primary/10 rounded-lg">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Специальное предложение</h3>
            <p>Получите скидку 10% на первый электровелосипед</p>
          </div>
          <Button size="lg" className="gap-2">
            <Icon name="Zap" />
            Смотреть все электровелосипеды
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ElectricBikes;
