
import { Card, CardContent } from "@/components/ui/card";
import Icon from "./ui/icon";

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Любитель горных трасс",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 5,
    content: "Купил горный велосипед Mountain Pro X3. Качество сборки превзошло ожидания. Консультанты помогли подобрать размер и дали много полезных советов по обслуживанию. Рекомендую!"
  },
  {
    name: "Екатерина Соколова",
    role: "Городской велосипедист",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 5,
    content: "Долго выбирала городской велосипед. В ВелоМире подобрали идеальную модель под мои нужды. Быстрая доставка, велосипед приехал полностью настроенный. Большое спасибо за сервис!"
  },
  {
    name: "Михаил Соловьев",
    role: "Профессиональный спортсмен",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4,
    content: "Приобрел шоссейный велосипед для тренировок. Качественная рама, компоненты высокого класса. Единственное, немного затянули с доставкой, но в остальном всё отлично."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground">
            Более 10 000 довольных клиентов уже выбрали нас. Присоединяйтесь к сообществу велосипедистов ВелоМир!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={i < testimonial.rating ? "text-amber-400" : "text-gray-300"} 
                      size={18} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
