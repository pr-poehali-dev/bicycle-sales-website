
import React from "react";
import { Card, CardContent } from "./ui/card";
import Icon from "./ui/Icon";

const Features = () => {
  const features = [
    {
      icon: "TruckDelivery",
      title: "Бесплатная доставка",
      description: "Для всех заказов от 10 000 ₽"
    },
    {
      icon: "Wrench",
      title: "Техобслуживание",
      description: "Бесплатное первое ТО"
    },
    {
      icon: "Medal",
      title: "Гарантия качества",
      description: "2 года на все велосипеды"
    },
    {
      icon: "RotateCcw",
      title: "Возврат товара",
      description: "14 дней на обмен и возврат"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы делаем всё возможное, чтобы ваши покупки были комфортными и выгодными
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-200">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-muted/50 hover:bg-muted transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
