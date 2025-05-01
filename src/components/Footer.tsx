
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import Icon from "./ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Магазин качественных велосипедов и аксессуаров с доставкой по всей России.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/mountain" className="text-gray-400 hover:text-white transition-colors">Горные велосипеды</Link></li>
              <li><Link to="/catalog/road" className="text-gray-400 hover:text-white transition-colors">Шоссейные велосипеды</Link></li>
              <li><Link to="/catalog/city" className="text-gray-400 hover:text-white transition-colors">Городские велосипеды</Link></li>
              <li><Link to="/catalog/kids" className="text-gray-400 hover:text-white transition-colors">Детские велосипеды</Link></li>
              <li><Link to="/catalog/accessories" className="text-gray-400 hover:text-white transition-colors">Аксессуары</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-white transition-colors">Гарантия и возврат</Link></li>
              <li><Link to="/service" className="text-gray-400 hover:text-white transition-colors">Сервисное обслуживание</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="text-primary mt-1" />
                <span>Москва, ул. Велосипедная, 42</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="text-primary" />
                <a href="mailto:info@velomir.ru" className="hover:text-white transition-colors">info@velomir.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" className="text-primary" />
                <span>Пн-Вс: 10:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {currentYear} ВелоМир. Все права защищены.</p>
          <div className="flex gap-6">
            <Link to="/policy" className="text-sm text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
