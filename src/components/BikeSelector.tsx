
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Icon from "./ui/Icon";

const BikeSelector = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Подберем идеальный велосипед</h2>
          <p className="text-muted-foreground">
            Ответьте на несколько вопросов, и мы предложим велосипеды, 
            которые лучше всего подойдут для ваших целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-200">
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                <Icon name="Ruler" className="text-primary" size={20} />
              </div>
              <CardTitle className="text-xl">Рост и телосложение</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Размер рамы имеет решающее значение для комфортной и безопасной езды
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                <Icon name="Mountain" className="text-primary" size={20} />
              </div>
              <CardTitle className="text-xl">Тип местности</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Разные виды велосипедов предназначены для разных поверхностей и условий езды
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                <Icon name="Timer" className="text-primary" size={20} />
              </div>
              <CardTitle className="text-xl">Опыт катания</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Мы учтем ваш уровень опыта, чтобы предложить велосипед соответствующего уровня
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BikeSelector;
