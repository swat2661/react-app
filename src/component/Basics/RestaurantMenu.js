import React from 'react'
import "./style.css";
import Menu from './MenuAPI';
import Menucard from './Menucard';

const RestaurantMenu = () => {

    const [menuData, setmenuData] = React.useState(Menu)

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;

        })
        setmenuData(updatedList)
    }

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>
                        Breakfast

                    </button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>
                        Lunch

                    </button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>
                        Dinner

                    </button>
                    <button className="btn-group__item" onClick={() => setmenuData(Menu)}>
                        All

                    </button>
                </div>
            </nav>
            <Menucard menuData={menuData} />                   {/*props passing*/}

        </>

    )
}

export default RestaurantMenu;
