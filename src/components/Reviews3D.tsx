
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "./ui/icon";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
}

const Reviews3D = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Алексей П.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      text: "Велосипед превзошел все ожидания. Быстрая доставка, отличная сборка. Всем рекомендую магазин ВелоЭксперт!",
      rating: 5,
      date: "12.04.2025"
    },
    {
      id: 2,
      name: "Мария К.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      text: "Огромное спасибо консультанту за помощь в выборе. Уже месяц катаюсь на новом велосипеде и очень довольна!",
      rating: 5,
      date: "02.04.2025"
    },
    {
      id: 3,
      name: "Игорь С.",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      text: "Второй раз покупаю в ВелоЭксперт. Сервис на высоте, цены адекватные. Буду рекомендовать знакомым.",
      rating: 4,
      date: "28.03.2025"
    },
    {
      id: 4,
      name: "Елена В.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      text: "Купила электровелосипед. Очень удобно передвигаться по городу. Батарея держит даже дольше заявленного.",
      rating: 5,
      date: "15.03.2025"
    },
    {
      id: 5,
      name: "Дмитрий Н.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      text: "Профессиональный подход и отличное знание велосипедов. Подобрали идеальную модель под мои требования.",
      rating: 5,
      date: "01.03.2025"
    }
  ];

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextReview = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setTimeout(() => {
      nextReview();
    }, 5000);
  };

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [active]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.8,
      transition: {
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-muted-foreground">
            Реальные отзывы от тех, кто уже выбрал ВелоЭксперт
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto perspective-1000">
          <div 
            ref={containerRef} 
            className="relative h-[280px] preserve-3d"
            onMouseEnter={() => {
              if (autoplayTimerRef.current) {
                clearTimeout(autoplayTimerRef.current);
                autoplayTimerRef.current = null;
              }
            }}
            onMouseLeave={resetAutoplayTimer}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <Card className="shadow-lg bg-white/90 backdrop-blur border-0 overflow-hidden h-full">
                  <CardContent className="p-0 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                      <div className="hidden md:block relative bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur"></div>
                        </div>
                        <div className="absolute -left-12 -bottom-12">
                          <div className="w-24 h-24 bg-white/5 rounded-full backdrop-blur"></div>
                        </div>
                        <div className="relative z-10">
                          <div className="text-3xl font-bold mb-2">
                            {reviews[active].rating}.0
                          </div>
                          <div className="flex mb-4">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Icon 
                                key={idx} 
                                name="Star" 
                                className={idx < reviews[active].rating ? "text-amber-300" : "text-gray-400"} 
                              />
                            ))}
                          </div>
                          <div className="text-sm opacity-80 mt-auto pt-8">
                            Дата отзыва: {reviews[active].date}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <img 
                            src={reviews[active].avatar} 
                            alt={reviews[active].name}
                            className="w-12 h-12 rounded-full object-cover" 
                          />
                          <div>
                            <div className="font-semibold">{reviews[active].name}</div>
                            <div className="text-sm text-muted-foreground">Клиент ВелоЭксперт</div>
                          </div>
                          <div className="flex ml-auto md:hidden">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Icon 
                                key={idx} 
                                name="Star" 
                                size={16}
                                className={idx < reviews[active].rating ? "text-amber-400" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 text-lg italic leading-relaxed">
                            "{reviews[active].text}"
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                          <div className="text-sm text-muted-foreground md:hidden">
                            Дата: {reviews[active].date}
                          </div>
                          <div className="flex gap-2 ml-auto">
                            <motion.div
                              className="inline-flex"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <button
                                onClick={prevReview}
                                className="p-2 rounded-full border hover:bg-primary/5 transition-colors"
                                aria-label="Предыдущий отзыв"
                              >
                                <Icon name="ChevronLeft" />
                              </button>
                            </motion.div>
                            <motion.div
                              className="inline-flex"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <button
                                onClick={nextReview}
                                className="p-2 rounded-full border hover:bg-primary/5 transition-colors"
                                aria-label="Следующий отзыв"
                              >
                                <Icon name="ChevronRight" />
                              </button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > active ? 1 : -1);
                  setActive(idx);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === active ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Перейти к отзыву ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Волнистый разделитель */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Reviews3D;
