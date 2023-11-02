import React, { useState } from 'react'
import './FormComponent.css'
export const FormComponent = () => {
    const [user, setUser] = useState("");
    const reciveData = (e) => {
        e.preventDefault();
        let l_user = {
            "name": e.target.name.value,
            "lastname": e.target.lastname.value,
            "sex": e.target.sex.value,
            "bio": e.target.bio.value
        }
        setUser(l_user);
    };

    const changeData = e =>{
        let inputName = e.target.name;        
        setUser((user)=>{
            return {...user, [inputName]: e.target.value}
        });
    }

    return (
        <div>
            <h1>Using forms in React</h1>
            <form id='myForm' onSubmit={reciveData}>
                <input type='text' name='name' onChange={changeData} placeholder='Inser your name' />
                <input type='text' name='lastname' onChange={changeData} placeholder='Inser your lastname' />
                <select name='sex' onChange={changeData}>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                </select>               
                <textarea placeholder='bibliography' name='bio' onChange={changeData}></textarea>
                <button id='sendForm' type='submit'>Save</button>
            </form>
            {user && (
                <><h2>User info</h2><div className='user_info'>
                    The name of the user is {user.name} {user.lastname}
                    and is a {user.sex}. Read his bio down below:
                    <div className='bio'>
                        {user.bio}
                    </div>
                </div></>)
            }
        </div>
    )
}
