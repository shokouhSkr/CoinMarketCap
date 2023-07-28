const Recipe = ({ params }: { params: { recipeId: string } }) => {
  return <div>Recipe n.{params.recipeId}</div>;
};

export default Recipe;
