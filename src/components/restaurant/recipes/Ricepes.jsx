import { useEffect, useState } from 'react'
import Recipe from '../Recipe.jsx'


export default function Proudcts(props) {
    const [recipe, setRecipe] = useState([]);
    const [recipeData, setRecipeData] = useState([]);

    const getRecipe = async () => {
        let reponse = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${props.title}`);
        let data = await reponse.json();
         setRecipe(data.recipes);
        setRecipeData(data.recipes.slice(0, 4));

    }

    useEffect(() => {
        getRecipe();
    }, [])

    let getData = ()=>{
    
        console.log(recipeData)
        setRecipeData(recipe);

    }




    return (<>
        <div className='row' >
            <h2>{props.title}</h2>
            {recipeData.map((e) => {
                return (<Recipe image={e.image_url} title={e.title} key={e.id} />);
            }
            )}
        </div>
<button onClick={getData} className='view'>view more</button>
    </>)
}
