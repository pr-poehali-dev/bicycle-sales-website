
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import Icon from "./ui/Icon";

const Footer = () => {
  const footerLinks = [
    {
      title: "Каталог",
      links: [
        { name: "Горные велосипеды", href: "/catalog/mountain" },
        { name: "Городские велосипеды", href: "/catalog/city" },
        { name: "Шоссейные велосипеды", href: "/catalog/road" },
        { name: "Электровелосипеды", href: "/electric" }
      ]
    },
    {
      title: "Информация",
      links: [
        { name: "О компании", href: "/about" },
        { name: "Доставка и оплата", href: "/delivery" },
        { name: "Гарантия", href: "/warranty" },
        { name: "Контакты", href: "/contacts" }
      ]
    },
    {
      title: "Сервис",
      links: [
        { name: "Техобслуживание", href: "/service" },
        { name: "Ремонт", href: "/repair" },
        { name: "FAQ", href: "/faq" },
        { name: "Возврат товара", href: "/return" }
      ]
    }
  ];

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 mb-6 text-muted-foreground max-w-md">
              Мы предлагаем широкий выбор качественных велосипедов для любого стиля катания и уровня подготовки.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter", "Youtube"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon name={social as any} size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Велосипеды. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
