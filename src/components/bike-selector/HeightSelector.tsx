
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BikeHeight } from "./types";

interface HeightSelectorProps {
  value: BikeHeight;
  onChange: (value: BikeHeight) => void;
}

const HeightSelector = ({ value, onChange }: HeightSelectorProps) => {
  return (
    <div className="animate-fade-in delay-100">
      <h3 className="text-xl font-semibold mb-4">Ваш рост</h3>
      <Tabs value={value} onValueChange={onChange as (value: string) => void} className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="160-170">160-170 см</TabsTrigger>
          <TabsTrigger value="170-180">170-180 см</TabsTrigger>
          <TabsTrigger value="180+">180+ см</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default HeightSelector;
