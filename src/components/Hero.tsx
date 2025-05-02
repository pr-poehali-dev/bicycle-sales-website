
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Велосипеды для вашего идеального путешествия
            </h1>
            <p className="text-lg text-muted-foreground">
              Откройте для себя лучшие велосипеды для любого маршрута и уровня подготовки.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Подобрать велосипед</Button>
              <Button size="lg" variant="outline">Смотреть каталог</Button>
            </div>
          </div>
          <div className="relative w-full max-w-xl animate-fade-in delay-200">
            <img 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Современный велосипед" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
