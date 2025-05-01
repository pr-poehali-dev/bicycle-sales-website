
import Icon from "./ui/icon";

const features = [
  {
    icon: "Bike",
    title: "Большой выбор",
    description: "Более 1000 моделей велосипедов от ведущих производителей для любых целей и бюджетов."
  },
  {
    icon: "Medal",
    title: "Гарантия качества",
    description: "Все велосипеды проходят предпродажную подготовку и имеют официальную гарантию производителя."
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем по всей России. Бесплатная доставка при заказе от 10 000 рублей."
  },
  {
    icon: "Wrench",
    title: "Сервисное обслуживание",
    description: "Профессиональная настройка и обслуживание велосипедов в наших сервисных центрах."
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description: "Наличными, картой, онлайн, в рассрочку или кредит - выберите удобный способ оплаты."
  },
  {
    icon: "Trophy",
    title: "Программа лояльности",
    description: "Скидки постоянным клиентам до 15%, специальные предложения и бонусы за покупки."
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground">
            Наш магазин ВелоМир - это команда профессионалов с многолетним опытом работы в велоиндустрии. 
            Мы любим то, что делаем, и готовы поделиться своими знаниями с вами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
