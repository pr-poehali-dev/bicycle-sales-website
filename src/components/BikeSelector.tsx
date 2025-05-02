
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "./ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const BikeSelector = () => {
  const [height, setHeight] = useState<string>("160-170");
  const [terrain, setTerrain] = useState<string>("город");
  const [experience, setExperience] = useState<string>("новичок");

  const bikeTypes = {
    "город": {
      "новичок": {
        "160-170": {
          title: "City Cruiser C1",
          description: "Комфортный городской велосипед для ежедневных поездок",
          price: 32900,
          imageUrl: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "170-180": {
          title: "City Cruiser C3",
          description: "Городской велосипед с улучшенной эргономикой для высоких райдеров",
          price: 35900,
          imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "180+": {
          title: "City Cruiser C5 Max",
          description: "Специальная версия городского велосипеда для высоких людей",
          price: 38900,
          imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        }
      },
      "опытный": {
        "160-170": {
          title: "Urban Pro U1",
          description: "Скоростной городской велосипед с облегчённой рамой",
          price: 54900,
          imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "170-180": {
          title: "Urban Pro U3",
          description: "Профессиональный городской велосипед с карбоновой рамой",
          price: 72900,
          imageUrl: "https://images.unsplash.com/photo-1569943228307-a66beab7cd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "180+": {
          title: "Urban Pro U5 Max",
          description: "Топовая модель городского велосипеда для профи",
          price: 89900,
          imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        }
      }
    },
    "горы": {
      "новичок": {
        "160-170": {
          title: "Mountain X1",
          description: "Горный велосипед для начинающих райдеров",
          price: 42900,
          imageUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "170-180": {
          title: "Mountain X3",
          description: "Надежный горный велосипед для активного отдыха",
          price: 48900,
          imageUrl: "https://images.unsplash.com/photo-1572111504021-40abd3881af0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "180+": {
          title: "Mountain X5 Max",
          description: "Горный велосипед с усиленной рамой для высоких людей",
          price: 54900,
          imageUrl: "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        }
      },
      "опытный": {
        "160-170": {
          title: "Mountain Pro P1",
          description: "Профессиональный горный велосипед с подвеской",
          price: 78900,
          imageUrl: "https://images.unsplash.com/photo-1560806925-d281ef30962a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "170-180": {
          title: "Mountain Pro P3",
          description: "Высокотехнологичный MTB для опытных райдеров",
          price: 92900,
          imageUrl: "https://images.unsplash.com/photo-1553804194-7a3d9ffc184a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "180+": {
          title: "Mountain Pro P5 Max",
          description: "Топовый карбоновый MTB для профессионалов",
          price: 129900,
          imageUrl: "https://images.unsplash.com/photo-1588525602010-a57b356fe5a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        }
      }
    },
    "шоссе": {
      "новичок": {
        "160-170": {
          title: "Road R1",
          description: "Шоссейный велосипед для начинающих",
          price: 52900,
          imageUrl: "https://images.unsplash.com/photo-1596381599789-3325f5f888c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "170-180": {
          title: "Road R3",
          description: "Комфортный шоссейник для длительных поездок",
          price: 64900,
          imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "180+": {
          title: "Road R5 Max",
          description: "Шоссейный велосипед с увеличенной рамой",
          price: 72900,
          imageUrl: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        }
      },
      "опытный": {
        "160-170": {
          title: "Road Pro RP1",
          description: "Профессиональный карбоновый шоссейник",
          price: 89900,
          imageUrl: "https://images.unsplash.com/photo-1442199005891-7be50691816f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "170-180": {
          title: "Road Pro RP3",
          description: "Гоночный шоссейный велосипед премиум-класса",
          price: 118900,
          imageUrl: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        "180+": {
          title: "Road Pro RP5 Max",
          description: "Элитный шоссейный велосипед для соревнований",
          price: 159900,
          imageUrl: "https://images.unsplash.com/photo-1507150080056-79542bdb9c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        }
      }
    }
  };

  const selectedBike = bikeTypes[terrain as keyof typeof bikeTypes]?.[experience as "новичок" | "опытный"]?.[height as "160-170" | "170-180" | "180+"];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Подберем идеальный велосипед</h2>
          <p className="text-muted-foreground">
            Ответьте на несколько вопросов, и мы порекомендуем модель, которая подойдет именно вам
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8 animate-fade-in-up">
            <div className="animate-fade-in delay-100">
              <h3 className="text-xl font-semibold mb-4">Ваш рост</h3>
              <Tabs value={height} onValueChange={setHeight} className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="160-170">160-170 см</TabsTrigger>
                  <TabsTrigger value="170-180">170-180 см</TabsTrigger>
                  <TabsTrigger value="180+">180+ см</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="animate-fade-in delay-200">
              <h3 className="text-xl font-semibold mb-4">Где планируете кататься?</h3>
              <Tabs value={terrain} onValueChange={setTerrain} className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="город" className="flex gap-1 items-center">
                    <Icon name="Building2" size={14} />
                    Город
                  </TabsTrigger>
                  <TabsTrigger value="горы" className="flex gap-1 items-center">
                    <Icon name="Mountain" size={14} />
                    Горы
                  </TabsTrigger>
                  <TabsTrigger value="шоссе" className="flex gap-1 items-center">
                    <Icon name="Road" size={14} />
                    Шоссе
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="animate-fade-in delay-300">
              <h3 className="text-xl font-semibold mb-4">Уровень опыта</h3>
              <Tabs value={experience} onValueChange={setExperience} className="w-full">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="новичок">Начинающий</TabsTrigger>
                  <TabsTrigger value="опытный">Опытный</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="md:col-span-3 animate-fade-in delay-400">
            <Card className="overflow-hidden h-full animate-scale-up">
              {selectedBike && (
                <div className="grid md:grid-cols-5 h-full">
                  <div className="md:col-span-3 h-64 md:h-full relative overflow-hidden">
                    <img 
                      src={selectedBike.imageUrl} 
                      alt={selectedBike.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white md:hidden">
                      <h3 className="font-bold text-xl">{selectedBike.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-2 hidden md:block">{selectedBike.title}</h3>
                      <p className="text-muted-foreground mb-4">{selectedBike.description}</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={18} />
                          <span>Подходит для вашего роста</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={18} />
                          <span>Оптимален для {terrain === "город" ? "городских условий" : terrain === "горы" ? "горной местности" : "шоссейных дорог"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={18} />
                          <span>Соответствует уровню опыта</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-2xl font-bold mb-3">{selectedBike.price.toLocaleString()} ₽</div>
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
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeSelector;
