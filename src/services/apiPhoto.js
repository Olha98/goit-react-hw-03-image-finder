import axios from 'axios'

const apiPhoto = (searchQuery, page) =>{
console.log('searchQuery',searchQuery)
const API_key = '17505359-e5f9f93771b0e5762108364f3';
return axios
.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_key}`)
}
export default apiPhoto