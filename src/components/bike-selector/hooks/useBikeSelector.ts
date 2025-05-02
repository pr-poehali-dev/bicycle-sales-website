
import { useState } from "react";
import { bikeData } from "../bike-data";
import { BikeHeight, BikeTerrain, BikeExperience, BikeModel } from "../types";

export const useBikeSelector = (
  initialHeight: BikeHeight = "160-170",
  initialTerrain: BikeTerrain = "город",
  initialExperience: BikeExperience = "новичок"
) => {
  const [height, setHeight] = useState<BikeHeight>(initialHeight);
  const [terrain, setTerrain] = useState<BikeTerrain>(initialTerrain);
  const [experience, setExperience] = useState<BikeExperience>(initialExperience);

  const selectedBike: BikeModel | undefined = 
    bikeData[terrain]?.[experience]?.[height];

  const getTerrainDisplayName = (): string => {
    switch (terrain) {
      case "город": return "городских условий";
      case "горы": return "горной местности";
      case "шоссе": return "шоссейных дорог";
      default: return "";
    }
  };

  return {
    height,
    setHeight,
    terrain,
    setTerrain,
    experience,
    setExperience,
    selectedBike,
    getTerrainDisplayName
  };
};
