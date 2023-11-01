import Recipes from './recipes/Ricepes.jsx'

export default function Restaurant() {
    return (
        <div className='container'>
            <Recipes title='pizza' />
            <hr></hr>
            <Recipes title='salad' />
            <hr></hr>
            <Recipes title='onion' />


        </div>
    )
}
