
import React, { useState } from 'react';
import './App.css';

function Form() {
    const [inputFields, setInputFields] = useState([
        { FirstName: '', LastName: '',mobilenmuber:'',email:'' }
    ]);

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("input", inputFields);
    };

    const addNewInput = () => {
        setInputFields([...inputFields, { FirstName: '', LastName: '',mobilenmuber:'',email:'' }]);
    };
    const removeButton = () => {
        setInputFields(inputFields.filter((item, index) => index !== 0));
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                {inputFields.map((inputField, index) => (
                    <div key={index} className='form'>
                        <input
                            placeholder="FirstName"
                            className="input"
                            name="FirstName"
                            type="text"
                            value={inputField.FirstName}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <input
                            placeholder="LastName"
                            className="input"
                            name="LastName"
                            type="text"
                            value={inputField.LastName}
                            onChange={event => handleChangeInput(index, event)}
                        />
                         <input
                            placeholder="mobilenmuber"
                            className="input"
                            name="mobilenmuber"
                            type="number"
                            value={inputField.mobilenmuber}
                            onChange={event => handleChangeInput(index, event)}
                        />
                         <input
                            placeholder="Enter email"
                            className="input"
                            name="email"
                            type="mail"
                            value={inputField.email}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <button
                            type="button"
                            className='butn'
                            onClick={addNewInput}
                        >
                            ADD
                        </button>
                        <button
                            type="button"
                            className='butn'
                            onClick={removeButton}
                        >
                            REMOVE
                        </button>
                        </div>
                ))}
                <div className='buttonname'>
                    <button className="btn" type='submit'>SEND</button>
                </div>
                
            </form>
        </div>
    );
}

export default Form;
