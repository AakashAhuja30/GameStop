import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import {useEffect} from 'react';
import Game from '../components/Game';
import styled from 'styled-components';
import {motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion';
import GameDetail from '../components/GameDetail';
import {useLocation} from 'react-router-dom';

const Home = () => {
    const  location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const dispatch = useDispatch();

    
    useEffect(() => {
    dispatch(loadGames());
  },[dispatch]);
  const {newGames,popularGames,upcomingGames,searched} = useSelector((state)=>state.games)
//   console.log(newGames);

  return(
      <StyledGameList>
          <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
              {/* Animate Presence component should have some toggling enabled */}
          { pathId && <GameDetail pathId = {pathId}/>} 
          </AnimatePresence>
          {searched.length > 0 ? (
          <div className='searched'>
          <h3>{`${searched.length} results found..`}</h3>
          <h2>Searched Games</h2>
          <StyledGames>
              {searched.map((Sgame) => (
                  <Game 
                  name ={`${Sgame.name}`}
                  released={Sgame.released} 
                  id={Sgame.id}
                  image={Sgame.background_image}
                  key={Sgame.id}
                  />

              ) )}

          </StyledGames>
          </div> ):''}

          <h2>Upcoming Games</h2>
          <StyledGames>
              {upcomingGames.map((Ugame) => (
                  <Game 
                  name ={`${Ugame.name}`}
                  released={Ugame.released} 
                  id={Ugame.id}
                  image={Ugame.background_image}
                  key={Ugame.id}
                  />

              ) )}

          </StyledGames>

          <h2>New Games</h2>
          <StyledGames>
              {newGames.map((Ngame) => (
                  <Game 
                  name = {Ngame.name} 
                  released={Ngame.released} 
                  id={Ngame.id}
                  image={Ngame.background_image}
                  key={Ngame.id}
                  />

              ) )}

          </StyledGames>

          <h2>Popular Games</h2>
          <StyledGames>
              {popularGames.map((Pgame) => (
                  <Game 
                  name = {Pgame.name} 
                  released={Pgame.released} 
                  id={Pgame.id}
                  image={Pgame.background_image}
                  key={Pgame.id}
                  />

              ) )}

          </StyledGames>

        </AnimateSharedLayout>

      </StyledGameList>
  )

};

const StyledGameList = styled(motion.div)`
padding:0rem 5rem;
h2{
    padding:5rem 0rem;
}

`

const StyledGames = styled(motion.div)`
min-height:80vh;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
grid-column-gap:3rem;
grid-row-gap:5rem;

`

export default Home;

