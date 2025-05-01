
import { Button } from "@/components/ui/button";
import Icon from "./ui/icon";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Твой идеальный велосипед в <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">ВелоЭксперт</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Классические и электрические велосипеды мировых брендов с гарантией качества и бесплатной доставкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all">
                <Icon name="ShoppingBag" />
                Каталог
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-2 hover:bg-blue-50">
                <Icon name="Zap" />
                Электровелосипеды
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Icon name="Truck" className="text-primary" />
                <span>Быстрая доставка</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Icon name="Shield" className="text-primary" />
                <span>Гарантия 2 года</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <Icon name="RefreshCw" className="text-primary" />
                <span>30 дней на возврат</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute -top-16 -right-16 h-72 w-72 bg-primary/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 bg-primary/5 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            <img 
              src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?auto=format&fit=crop&q=80&w=1470" 
              alt="Современный велосипед" 
              className="relative z-10 rounded-lg shadow-xl object-cover h-[500px] w-full"
            />
            <div className="absolute -right-4 top-10 bg-white p-3 rounded-lg shadow-xl z-20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '2s', animationIterationCount: '3' }}>
              <Icon name="Award" className="text-amber-500" />
              <span className="font-bold">Топ продаж 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Волнистый разделитель */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
