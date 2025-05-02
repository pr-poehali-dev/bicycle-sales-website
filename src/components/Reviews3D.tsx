
import { reviewsData } from "./reviews/ReviewData";
import { useReviewCarousel } from "./reviews/hooks/useReviewCarousel";
import ReviewCard from "./reviews/ReviewCard";
import ReviewIndicators from "./reviews/ReviewIndicators";
import WaveDivider from "./reviews/WaveDivider";

const Reviews3D = () => {
  const { reviews } = reviewsData;
  
  const {
    active,
    direction,
    containerRef,
    nextReview,
    prevReview,
    goToReview,
    resetAutoplayTimer,
    pauseAutoplay
  } = useReviewCarousel(reviews.length);

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden relative">
      <div className="container">
        <SectionHeader />

        <div className="relative max-w-4xl mx-auto perspective-1000">
          <div 
            ref={containerRef} 
            className="relative h-[280px] preserve-3d"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resetAutoplayTimer}
          >
            <div
              key={active}
              className={`absolute w-full h-full transition-all duration-500 ${
                direction > 0 ? "animate-slide-in-right" : "animate-slide-in-left"
              }`}
            >
              <ReviewCard 
                review={reviews[active]} 
                onNext={nextReview} 
                onPrev={prevReview}
              />
            </div>
          </div>

          <ReviewIndicators 
            count={reviews.length} 
            active={active} 
            onChange={goToReview} 
          />
        </div>
      </div>
      
      <WaveDivider rotate={true} />
    </section>
  );
};

const SectionHeader = () => (
  <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Что говорят наши клиенты</h2>
    <p className="text-muted-foreground">
      Реальные отзывы от тех, кто уже выбрал ВелоЭксперт
    </p>
  </div>
);

export default Reviews3D;
