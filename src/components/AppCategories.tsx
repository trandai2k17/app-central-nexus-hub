
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface AppCategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const AppCategories = ({ categories, onSelectCategory }: AppCategoriesProps) => {
  return (
    <div className="flex justify-center mb-8">
      <ToggleGroup type="multiple" variant="outline" className="flex flex-wrap justify-center gap-2">
        {categories.map((category, index) => (
          <ToggleGroupItem 
            key={index} 
            value={category.toLowerCase()}
            onClick={() => onSelectCategory(category)}
            className="px-4 filter-button"
          >
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default AppCategories;
