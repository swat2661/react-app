import React, { useState, useEffect } from 'react'
import "./style.css";

// to get back our data 

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist")
    if (lists) {
        return JSON.parse(lists)
    } else {
        return []
    }
}


const TodoList = () => {
    const [InputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    // ADD item to list function 

    const addItem = () => {
        if (!InputData) {
            alert('Please fill the data')
        } else if (InputData && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: InputData };
                    }
                    return curElem;
                })
            );

            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);


        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: InputData,
            }
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

    //edit the items


    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    };


    // Delete items from the list 
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };

    //   to remove all function 

    const removeAll = () => {
        setItems([])



    }

    // Adding localStorage 
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items])



    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/Todo.jpg" alt="todolistlogo" />
                    </figure>
                    <figcaption>Add Your Items Here </figcaption>
                    <div className="addItems">
                        <input type="text"
                            placeholder="✍  Add Item"
                            className="form-control"
                            value={InputData}
                            onChange={(event) => setInputData(event.target.value)} />
                        <i className="fa fa-plus-square add-btn" onClick={addItem}></i>
                    </div>
                    {/* Show items*/}
                    <div className="showItems" >
                        {
                            items.map((curElem) => {
                                return (
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                            <i class="fas fa-edit" onClick={() => editItem(curElem.id)}></i>
                                            <i class="fas fa-trash-alt" onClick={() =>
                                                deleteItem(curElem.id)}></i>
                                        </div>
                                    </div>

                                )

                            })
                        }

                    </div>




                    {/* Remove all buttons*/}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span><b>CHECK LIST</b></span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoList
