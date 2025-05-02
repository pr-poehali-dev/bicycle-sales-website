
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BikeExperience } from "./types";

interface ExperienceSelectorProps {
  value: BikeExperience;
  onChange: (value: BikeExperience) => void;
}

const ExperienceSelector = ({ value, onChange }: ExperienceSelectorProps) => {
  return (
    <div className="animate-fade-in delay-300">
      <h3 className="text-xl font-semibold mb-4">Уровень опыта</h3>
      <Tabs value={value} onValueChange={onChange as (value: string) => void} className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="новичок">Начинающий</TabsTrigger>
          <TabsTrigger value="опытный">Опытный</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ExperienceSelector;
