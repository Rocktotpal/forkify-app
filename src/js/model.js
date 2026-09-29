import { async } from "regenerator-runtime";

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const res = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`,
    // "https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886",
  );

  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} (${res.status})`);

  const { recipe } = data.data;
  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image_url,
    sourceUrl: recipe.source_url,
    publisher: recipe.publisher,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };
  console.log(state.recipe);
};
