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
                                <div className="movie-card">
                                    <img src={movie[1].poster} alt="" />
                                </div>
                                <div className="movie-title">
                                    <h4> {movie[1].title}</h4>
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
