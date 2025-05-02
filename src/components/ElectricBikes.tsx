
import React from "react";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";

const ElectricBikes = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-slide-in-left">
            <img 
              src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Электровелосипед" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 animate-slide-in-right delay-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              <Icon name="Zap" size={16} />
              <span>Электровелосипеды</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">Путешествуйте дальше с электроприводом</h2>
            
            <p className="text-muted-foreground text-lg">
              Электровелосипеды позволяют преодолевать большие расстояния без лишних усилий,
              идеально подходят для городских поездок и длительных прогулок на природе.
            </p>
            
            <ul className="space-y-3">
              {["Увеличенный запас хода", "Быстрая зарядка батареи", "Мощный электропривод"].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="mt-4">
              Смотреть электровелосипеды
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricBikes;
