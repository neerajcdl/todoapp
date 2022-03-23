import React, { useState } from 'react';
import '../components/Todopage.css'
import img from '../image/notepad.jpg'

function Todopage() {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const handleOnChange = (e) => {
        setInputData(e.target.value)
        // console.log('setInputValue',setInputValue)
    }

    const handleOnClick = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData])
            setInputData("")
        }
    }

    const deleteItem = (id) =>{
        const updateditems = items.filter((elem, ind) =>{
            return ind !=id;
        });
        setItems(updateditems)
    }
    const removeAll = () =>{
        setItems([])
    }

    return (
        <>
            <div className='outerdiv'>
                <div className='innterdiv'>
                    <div className='heading_of_todo'>
                        <h2>Our Todo List</h2>
                    </div>
                    <div className='logo_of_todo'>
                        <img src={img} alt="not founds" />
                    </div>
                    <div className='description_of_todo'>
                        <p>we can create a list of work &#128076;</p>
                    </div>
                    <div className='texthere'>
                        <input type="text" placeholder='&#9997; write your to do' value={inputData} onChange={handleOnChange} />
                        <i className="fas fa-plus plus-icons" onClick={handleOnClick}></i>
                    </div>

                    {
                        items.map((elem, index) => {
                            return <div className='text-item' key={index}>
                                <h4>{elem}</h4>
                                <i className="far fa-trash-alt delete-item-icon" onClick={() => deleteItem(index)}></i>
                            </div>
                        })
                    }

                    <div className='showItems'>
                        <button className='btn removeall-btn' onClick={removeAll}>Remove All</button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Todopage