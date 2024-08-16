import { Ingredient } from "@types";
import { IngredientType } from "@types";

interface FilterCardProps {
  ingredient: IngredientType;
  removeFilter: (ingredient: Ingredient) => void;
}

const FilterCard = ({ ingredient, removeFilter }: FilterCardProps) => {
  return (
    <div className="card" onClick={() => removeFilter(ingredient)}>
      {ingredient}
    </div>
  )
}
export { FilterCard };

interface FilterProps {
  filters: IngredientType[];
  updateFilter: (filters: IngredientType[]) => void;
}

const Filter = ({ filters, updateFilter }: FilterProps) => {
  const removeSingleFilter = (ingredient: Ingredient) => {
    const updatedFilter = filters.filter(someIngredient => someIngredient !== ingredient)
    updateFilter(updatedFilter)
  }
  return (
    <div className="container">
      {filters.map((filter) => (
        <FilterCard
          ingredient={filter}
          removeFilter={(ingredient) => removeSingleFilter(ingredient)}
        />
      ))}
    </div>
  )
}
export { Filter };