import styled from 'styled-components';
import {motion} from 'framer-motion';
// import {loadDetail} from '../actions/detailAction';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {SmallImage} from '../util';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import ReactStars from "react-rating-stars-component";


const GameDetail = ({pathId}) => {
    const history = useHistory();
    console.log(typeof pathId);
    const {game,game_screenshot,isLoading} = useSelector((state)=>state.detail)

    const exitDetailhandler = (e) => {
        
        const element=e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/');
        }

    }

    const imagePlatformHandler = (platform) => {
        if (platform.includes("PlayStation")) {
            return playstation;
          } else if (platform.includes("Xbox")) {
            return xbox;
          } else if (platform === "PC") {
            return steam;
          } else if (platform === "Nintendo Switch") {
            return nintendo;
          } else if (platform.includes("OS")) {
            return apple;
          } else {
            return gamepad;
          }

    }

    return(
        <>
        
        {!isLoading && (
        <StyledCardShadow className='shadow' onClick= {exitDetailhandler}>
            <StyledDetail layoutId={pathId.toString()}>
                <StyledStats>
                    <div className="rating">
                        <motion.h3 layoutId ={`title ${pathId.toString()}`}>{game.name}</motion.h3>
                        <ReactStars value = {game.rating} edit = {false} isHalf = {true} size = {20}  activeColor = {'#ff7676'} />
                        {/* <p>Rating:{game.rating}</p> */}
                    </div>
                    <StyledInfo>
                        <h3 >Platforms:</h3>
                        <StyledPlatforms>
                            {game.platforms.map(data =>(
                                <img
                                key={data.platform.id}
                                src={imagePlatformHandler(data.platform.name)}
                                alt={data.platform.name}
                                title={data.platform.name}/>
                                // <h3 key ={data.platform.id} >{data.platform.name}</h3>
                            ))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStats>
                <StyledMedia>
                    <motion.img
                    layoutId ={`image ${pathId.toString()}`} 
                    src={SmallImage(game.background_image,1280)} alt="background"/>
                </StyledMedia>
                <StyledDescription>
                    <p> {game.description_raw} </p>
                </StyledDescription>
                <StyledGallery>
                    {game_screenshot.map(screenshot =>(
                        <img src={SmallImage(screenshot.image,1280)} key={screenshot.id} alt="background"/>
                    ))}
                </StyledGallery>
            </StyledDetail>

        </StyledCardShadow>
        )}
        </>
    )
};


const StyledCardShadow = styled(motion.div)`
width:100%;
min-height:100vh;
background:rgba(0,0,0,0.5);
overflow-y : scroll;
position:fixed; 
top:0;
left:0;
z-index: 5;

&::-webkit-scrollbar{
    width:0.5rem;
}

&::-webkit-scrollbar-thumb{
    background-color:#ff7676;
}

&::-webkit-scrollbar-track{
    background:white;
}

`

const StyledDetail = styled(motion.div)`
width:80%;
border-radius:1rem;
padding:2rem 5rem;
background:white;
color:black;
position:absolute;
z-index: 10;
left:10%;
img{
    width:100%;
}
@media (max-width: 1000px) {
    padding: 1rem 0.5rem;
  }

`

const StyledStats = styled(motion.div)`
display:flex;
align-items:center;
justify-content:space-between;

@media (max-width: 1050px) {
    h3 {
      display: inline;
    }
    img {
      width: 1rem;
      height: 1rem;
    }
    .rating {
      max-width: 10rem;
    }
  }

`
const StyledInfo = styled(motion.div)`
text-align:center;
@media (max-width: 1050px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    h3 {
      padding: 0.5rem;
    }
  }

`

const StyledPlatforms = styled(motion.div)`
display:flex;
justify-content:space-evenly;
img{
    margin-left:3rem;
}

@media (max-width: 1050px) {
    img {
      margin-left: 0.5rem;
      margin-right: 0;
    }
  }

`

const StyledMedia = styled(motion.div)`
margin-top:2rem;
img{
    width:100%;
}
@media (max-width: 1050px) {
    margin-top: 1rem;
  }
`
const StyledDescription = styled(motion.div)`
margin:2rem 0rem;
@media (max-width: 1050px) {
    margin: 1rem 0;
  }
`

const StyledGallery = styled(motion.div)`
img{
    margin:0.5rem 0rem;
}


`

export default GameDetail;