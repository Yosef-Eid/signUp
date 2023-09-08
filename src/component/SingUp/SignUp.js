import React, {useState} from 'react';
import './SingUp.css'

const SignUp = () => {

    let [name, setName] = useState('')
    let [emile, setEmile] = useState('')
    let [password, setPassword] = useState('')
    let [repeat, setRepeat] = useState('')  
    let [colorChickPAss, setColorChickPAss] = useState('')
    let [colorChickR, setColorChickR] = useState('')

    function Accept(e) {
        e.preventDefault()
        // setAccept(true)
        if(password.length < 8){ setColorChickPAss('red')}
        if(password !== repeat) setColorChickR('red')
    }

    function nameValue(e) {
        setName(e.target.value)
    }

    function emileValue(e) {
        setEmile(e.target.value)
    }

    function passwordValue(e) {
        setPassword(e.target.value)
    }

    function repeatVAlue(e) {
        setRepeat(e.target.value)
    }

    return(
    <>
    
        <div className='father'>
            <form className='from' onSubmit={Accept}>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' placeholder='name...' value={name} onChange={nameValue} />

                <label htmlFor='emile'>Emile</label>
                <input id='emile' type='emile' placeholder='Emile...' value={emile} onChange={emileValue} required />

                <label htmlFor='password'>password</label>
                <input id='password' type='password' placeholder='password...' value={password} onChange={passwordValue}  />
                <span style={{color:colorChickPAss}} className='chickPassword'>password must be more than 8 char</span>

                <label htmlFor='repeat'>Repeat password</label>
                <input id='repeat' type='password' placeholder='Repeat Password...' value={repeat} onChange={repeatVAlue} />
                <span style={{color:colorChickR}} className='chickRepeat'>password</span>

                <div style={{textAlign:'center'}}>
                    <button type='submit'>Register</button>
                </div>

            </form>
        </div>
    </>
    )
}

export default SignUp;
