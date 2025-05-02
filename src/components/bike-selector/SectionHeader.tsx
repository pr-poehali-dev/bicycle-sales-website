
interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SectionHeader;
