
import { useBikeSelector } from "./bike-selector/hooks/useBikeSelector";
import HeightSelector from "./bike-selector/HeightSelector";
import TerrainSelector from "./bike-selector/TerrainSelector";
import ExperienceSelector from "./bike-selector/ExperienceSelector";
import BikeResult from "./bike-selector/BikeResult";
import SectionHeader from "./bike-selector/SectionHeader";
import { BikeSelectorProps } from "./bike-selector/types";

const BikeSelector = ({
  initialHeight,
  initialTerrain,
  initialExperience
}: BikeSelectorProps = {}) => {
  const {
    height,
    setHeight,
    terrain,
    setTerrain,
    experience,
    setExperience,
    selectedBike,
    getTerrainDisplayName
  } = useBikeSelector(
    initialHeight,
    initialTerrain,
    initialExperience
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <SectionHeader 
          title="Подберем идеальный велосипед"
          description="Ответьте на несколько вопросов, и мы порекомендуем модель, которая подойдет именно вам"
        />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8 animate-fade-in-up">
            <HeightSelector 
              value={height} 
              onChange={setHeight} 
            />
            
            <TerrainSelector 
              value={terrain} 
              onChange={setTerrain} 
            />
            
            <ExperienceSelector 
              value={experience} 
              onChange={setExperience} 
            />
          </div>

          <div className="md:col-span-3 animate-fade-in delay-400">
            {selectedBike && (
              <BikeResult 
                bike={selectedBike} 
                terrainDisplayName={getTerrainDisplayName()} 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeSelector;
