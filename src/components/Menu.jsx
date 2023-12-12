
import { Pizza } from './Pizza'
import { pizzaData } from '../data/data'


export const Menu = () => {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            <ul className='pizzas' >


                {pizzaData.map(pizza => <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut} />)}
            </ul>

        </main>
    )
}
