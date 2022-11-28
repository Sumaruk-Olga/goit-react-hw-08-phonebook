import { Page } from "components/common/common.styled";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange=(e)=>{
       switch (e.target.name) {        
            case 'email':
                setEmail(e.target.value);
            break;
            case 'password':
                setPassword(e.target.value);
            break;       
        default:
            break;
       }
    }

    const reset=()=>{
        setEmail('');
        setPassword('');
    }

    const onSubmit=(e)=>{        
        e.preventDefault();
        
        console.log(e.target.elements.email.value);
        console.log(e.target.elements.password.value);
        // збираємо в один об'єкт 
        // відправляємо на бєк і чекаємо відповіді
        // якщо все ок, кидаємо на сторінку контактів
        reset();
    }
    return <Page>        
        <form onSubmit={onSubmit} autoComplete="off">                
                <label>Email: 
                    <input name="email" type="email" value={email} onChange={handleChange}/>
                </label>
                <label>Password: 
                    <input name="password" type="password" value={password} onChange={handleChange}/>
                </label>
                <button type="submit">Register</button>
                </form>
     </Page>
 };
 export default Login;