import axios from "axios";
const key="df20d427d8a4472eb1c8ebd8d31e6c4d"
const axioCreate= axios.create({
    baseURL: "https://api.rawg.io/api",
    // params: {
    //   key: "18d8dc115d954615a6fe8522598e8a97",
    // },
  });
  
const getPopularGame=axioCreate.get('/games?key='+key)
const getMovieDetails=(id)=>axioCreate.get('/games/'+id+'/movies')
const getGameListByGenreId=(id)=>axioCreate.get('/games?key='+key+'&genres='+id)
export default{
    getPopularGame,
    getMovieDetails,
    getGameListByGenreId
}