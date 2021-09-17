import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes } from '../../redux/actionCreators/recipeAC';
import RecipeItem from '../RecipeItem/RecipeItem';

function RecipeList() {
  const recipeList = useSelector(state => state.recipe)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [])

  return (
    <div className=" d-flex justify-content-center">
      <div className="list-group w-50 mt-3">
        {recipeList.map(el =>
          <RecipeItem
            key={el.id}
            series={el.series}
            number={el.number}
            patient={el.patient}
            preparation={el.preparation}
          />
        )}
      </div>
    </div>
  )
}

export default RecipeList;
