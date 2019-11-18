import { get, post } from './http'
export const getMoviesRy = (city,start,count) => get('/v2/movie/in_theaters?city='+city+'&start='+start+'&count='+count);
export const getMoviesTop = (start,count) => get('/v2/movie/top250?&start='+start+'&count='+count);