import './Hero.css';
import Carousel from "react-material-ui-carousel";
import { Paper } from '@mui/material';

const Hero = ({movies})=> {
    return (
        <div className="movie-carousel-container">
            <Carousel>
            {
                movies.map((movie) => {
                    return (
                        <Paper key={movie[1].id}>
                            <div className="movie-card-container">
                                <div className="movie-card" style={{"--img": `url(${movie[1].backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie[1].poster} alt="" />
                                        </div>
                                        <div className="movie-title">
                                            <h4> {movie[1].title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
            </Carousel> 
        </div>
    )
}

export default Hero
