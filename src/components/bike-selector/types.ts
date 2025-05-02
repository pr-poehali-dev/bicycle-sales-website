
export type BikeHeight = "160-170" | "170-180" | "180+";
export type BikeTerrain = "город" | "горы" | "шоссе";
export type BikeExperience = "новичок" | "опытный";

export interface BikeModel {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface BikeCategoryData {
  [height: string]: BikeModel;
}

export interface BikeExperienceData {
  [experience: string]: BikeCategoryData;
}

export interface BikeTerrainData {
  [terrain: string]: BikeExperienceData;
}

export interface BikeSelectorProps {
  initialHeight?: BikeHeight;
  initialTerrain?: BikeTerrain;
  initialExperience?: BikeExperience;
}
