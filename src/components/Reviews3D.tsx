
import React from "react";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";

const Reviews3D = () => {
  const reviews = [
    {
      id: 1,
      author: "Анна К.",
      text: "Прекрасный велосипед! Очень комфортно кататься, легкий и маневренный.",
      rating: 5,
      bikeModel: "Urban Commuter"
    },
    {
      id: 2,
      author: "Михаил С.",
      text: "Отличное качество за свои деньги. Проехал уже больше 1000 км, никаких проблем.",
      rating: 4,
      bikeModel: "Mountain Explorer Pro"
    },
    {
      id: 3,
      author: "Елена Д.",
      text: "Электровелосипед превзошел все ожидания. Батареи хватает на весь день.",
      rating: 5,
      bikeModel: "E-Rider 2000"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы от довольных покупателей
          </p>
        </div>
        
        <div className="perspective-1000 relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 preserve-3d animate-fade-in-up delay-300">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="bg-background border rounded-lg p-6 shadow transform transition-all hover:-translate-y-2 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array(5).fill(null).map((_, i) => (
                    <Icon 
                      key={i}
                      name="Star" 
                      className={i < review.rating ? "text-yellow-500" : "text-muted"} 
                      size={18}
                    />
                  ))}
                </div>
                <p className="mb-4">{review.text}</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.bikeModel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10 animate-fade-in delay-500">
          <Button variant="outline">
            Читать все отзывы
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews3D;
