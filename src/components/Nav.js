import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/memoji.png';
import {useDispatch} from 'react-redux';
import {fetchSearch} from '../actions/gamesAction';
import {useState} from 'react';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput,setTextInput] = useState("")

    const inputChangeHandler = (e) => {
        setTextInput(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    }

    const clearSearchHandler = (e) => {
        dispatch({type:'CLEAR_SEARCHED'});
        setTextInput("");
    }

    return (
        <StyledNav>
            <StyledLogo onClick={clearSearchHandler}>
              <img src={logo} alt="logo"/>
              <h1>GameStop</h1>
            </StyledLogo>

            <form className="search" onSubmit = {searchHandler}>
                <input value = {textInput} type="text" onChange={inputChangeHandler}/>
                <button type='submit'>Search</button>
            </form>

        </StyledNav>

    )
};

const StyledNav = styled(motion.div)`
padding:3rem 5rem;
text-align:center;
input{
    width:50%;
    font-size:1.5rem;
    padding:0.5rem;
    border:none;
    margin:1rem 1rem 0rem 0rem;
    outline:none;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);

}

button{
    font-size:1.5rem;
    border:none;
    padding:0.5rem 2rem;
    cursor:pointer;
    background: #ff7676;
    color:white;
}
`

const StyledLogo = styled(motion.div)`
display:flex;
justify-content:center;
cursor:pointer;

img{

    height:4rem;
    width:4rem;
    object-fit:cover;
}

h1{
    margin-top:0.5rem;
}

`

export default Nav;