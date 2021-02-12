import styled from 'styled-components';
import {motion} from 'framer-motion';
import {loadDetail} from '../actions/detailAction';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {SmallImage} from '../util';


const Game = ({name, released,id,image}) => {
    const dispatch = useDispatch();


   const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
   }

    return(
        <StyledGame layoutId={id.toString()} onClick={loadDetailHandler}>
          <Link to= {`/game/${id}`} >
            <motion.h3 layoutId ={`title ${id.toString()}`} >{name}</motion.h3>
            <p>{released}</p>
            <motion.img 
            layoutId ={`image ${id.toString()}`} 
            src={SmallImage(image,640)} alt={name}/>
          </Link>

        </StyledGame>
    )
};

const StyledGame = styled(motion.div)`
min-height:30vh;
text-align:center;
border-radius:1rem;
box-shadow: 0px 5px 20px rgba(0, 0, 0,0.2);
overflow:hidden;
img{
    width:100%;
    height:40vh;
    object-fit:cover;
}
cursor:pointer;

`

export default Game;
