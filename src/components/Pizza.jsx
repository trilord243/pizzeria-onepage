/* eslint-disable react/prop-types */



export const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {




    return (
        <li className={`pizza ${soldOut ? "sold-out" : ""}  `}>

            <img src={photoName} alt={name} />
            <div>


                <h3> {name} </h3>
                <p>{ingredients}</p>
                {!soldOut ? <span> {price}$  </span> : <span> Sold Out </span>}
            </div>


        </li>

    )
}
