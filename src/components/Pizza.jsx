import { pizzaData } from "../data/data.js"


export const Pizza = () => {
    return (
        <>
            <img src="pizzas/margherita.jpg" alt="funghi" />
            {pizzaData.map((pizza, index) => {
                return (



                    <div key={index}>

                        <h1> {pizza.name} </h1>

                    </div>

                )




            })}





        </>

    )
}
