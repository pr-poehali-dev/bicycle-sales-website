
import { useState, useEffect } from "react";
import BikeCard from "./BikeCard";
import { Button } from "./ui/button";
import Icon from "./ui/icon";

const bikesData = [
  {
    id: "1",
    title: "Горный велосипед Mountain Pro X3",
    price: 48900,
    oldPrice: 59900,
    imageUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.8,
    category: "Горные",
    isElectric: false
  },
  {
    id: "2",
    title: "Шоссейный велосипед Road Rush S1",
    price: 92500,
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.9,
    category: "Шоссейные",
    isElectric: false
  },
  {
    id: "3",
    title: "Городской велосипед City Cruiser C5",
    price: 32900,
    oldPrice: 36500,
    imageUrl: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.6,
    category: "Городские",
    isElectric: false
  },
  {
    id: "4",
    title: "Электровелосипед E-City Power 2.0",
    price: 89900,
    imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.9,
    category: "Городские",
    isElectric: true,
    range: 80
  },
  {
    id: "5",
    title: "Детский велосипед Kids Rider K2",
    price: 18500,
    imageUrl: "https://images.unsplash.com/photo-1595432541891-a481ae9fbf8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.7,
    category: "Детские",
    isElectric: false
  },
  {
    id: "6",
    title: "Горный электровелосипед E-Mountain X1",
    price: 129900,
    oldPrice: 149900,
    imageUrl: "https://images.unsplash.com/photo-1565108273456-e2a507ee35cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.8,
    category: "Горные",
    isElectric: true,
    range: 95
  }
];

const categories = ["Все", "Электро", "Горные", "Шоссейные", "Городские", "Детские"];

const FeaturedBikes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [displayedBikes, setDisplayedBikes] = useState(bikesData);

  useEffect(() => {
    if (selectedCategory === "Все") {
      setDisplayedBikes(bikesData);
    } else if (selectedCategory === "Электро") {
      setDisplayedBikes(bikesData.filter(bike => bike.isElectric));
    } else {
      setDisplayedBikes(bikesData.filter(bike => bike.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">Популярные модели</h2>
            <p className="text-muted-foreground mt-2">Выберите велосипед, который подойдет именно вам</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className={category === "Электро" ? "gap-1" : ""}
              >
                {category === "Электро" && <Icon name="Zap" size={14} />}
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedBikes.map((bike) => (
            <BikeCard key={bike.id} {...bike} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="gap-2">
            <Icon name="ArrowRight" />
            Перейти в каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
