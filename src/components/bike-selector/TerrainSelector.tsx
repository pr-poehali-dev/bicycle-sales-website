
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "../ui/icon";
import { BikeTerrain } from "./types";

interface TerrainSelectorProps {
  value: BikeTerrain;
  onChange: (value: BikeTerrain) => void;
}

const TerrainSelector = ({ value, onChange }: TerrainSelectorProps) => {
  return (
    <div className="animate-fade-in delay-200">
      <h3 className="text-xl font-semibold mb-4">Где планируете кататься?</h3>
      <Tabs value={value} onValueChange={onChange as (value: string) => void} className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="город" className="flex gap-1 items-center">
            <Icon name="Building2" size={14} />
            Город
          </TabsTrigger>
          <TabsTrigger value="горы" className="flex gap-1 items-center">
            <Icon name="Mountain" size={14} />
            Горы
          </TabsTrigger>
          <TabsTrigger value="шоссе" className="flex gap-1 items-center">
            <Icon name="Road" size={14} />
            Шоссе
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TerrainSelector;
