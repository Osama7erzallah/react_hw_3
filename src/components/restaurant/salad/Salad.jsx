import { useEffect, useState } from 'react'
import Recipe from '../Recipe.jsx'


export default function Proudcts() {

    const [recipe, setRecipe] = useState([]);

    const getRecipe = async () => {
        let reponse = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
        let data = await reponse.json();
        setRecipe(data.recipes);
    }
    useEffect(() => {
        getRecipe();
    }, [])
    return (
        <div className='row' >
            <h2>SALAD</h2>
            {recipe.map((e) => {
                return (<Recipe image={e.image_url} title={e.title} key={e.id} />);
            }
            )}
        </div>
    )
}