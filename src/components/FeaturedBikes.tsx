
import React from "react";
import BikeCard from "./BikeCard";

const FeaturedBikes = () => {
  const featuredBikes = [
    {
      id: 1,
      name: "Mountain Explorer Pro",
      price: 89900,
      image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
      category: "Горный"
    },
    {
      id: 2,
      name: "Urban Commuter",
      price: 54900,
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
      category: "Городской"
    },
    {
      id: 3,
      name: "Road Master SL",
      price: 115000,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
      category: "Шоссейный"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Популярные модели</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Самые востребованные велосипеды, выбранные нашими клиентами для разных стилей катания
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
