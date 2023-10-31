import { useEffect, useState } from 'react'
import Recipe from '../Recipe.jsx'


export default function Proudcts() {
    const [recipe, setRecipe] = useState([]);
    const getRecipe = async () => {
        let reponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await reponse.json();
        setRecipe(data.recipes);
    }

    useEffect(() => {
        getRecipe();
    }, [])

    let getData = ()=>{
        console.log('fdsfs')
        console.log(recipeData)
        setRecipeData(recipe);

        
    }

    // const [recipeData, setRecipeData] = useState([recipe[0], recipe[1], recipe[2], recipe[3]]);



    return (
        <div className='row' >
            <h2>PIZZA</h2>
            {recipe.map((e) => {
                return (<Recipe image={e.image_url} title={e.title} key={e.id} />);
            }
            )}
{/* <button onClick={getData}>osama</button> */}
        </div>
    )
}
