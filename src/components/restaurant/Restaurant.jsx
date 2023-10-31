import Pizza from './pizza/Pizza.jsx'
import Onion from './onion/Onion.jsx'
import Salad from './salad/Salad.jsx'

export default function Restaurant() {
    return (
        <div className='container'>
            <Pizza />
            <hr></hr>
            <Onion />
            <hr></hr>
            <Salad />
        </div>
    )
}
