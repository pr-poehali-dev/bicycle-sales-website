
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import { Button } from "./ui/button";
import Icon from "./ui/icon";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/catalog" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contacts" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        
        {/* Мобильное меню */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} />
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Поиск">
              <Icon name="Search" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Избранное">
              <Icon name="Heart" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <Icon name="ShoppingCart" />
            </Button>
          </div>
          <Button>Войти</Button>
        </nav>

        {/* Мобильное меню (выпадающее) */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-50 bg-background p-4 md:hidden border-b">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" aria-label="Поиск">
                  <Icon name="Search" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Избранное">
                  <Icon name="Heart" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Корзина">
                  <Icon name="ShoppingCart" />
                </Button>
              </div>
              <Button className="w-full">Войти</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
