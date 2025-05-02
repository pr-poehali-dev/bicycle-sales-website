
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";

const Navbar = () => {
  const navLinks = [
    { name: "Каталог", href: "/catalog" },
    { name: "Электровелосипеды", href: "/electric" },
    { name: "Подбор", href: "#selector" },
    { name: "Сервис", href: "/service" },
    { name: "О нас", href: "/about" },
  ];

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
