import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY='AIzaSyA4PVUt1raHNgAY79jnqJd8KL28nqPwT7Q';
//Crate a new componet should produce 
//some HTML
const App = () => {
return(
    <div>
    <SearchBar/>
</div>
);
}

//Take this component's genetated HTMl and put it
//on the page (in the DoM)
ReactDOM.render(<App />,document.querySelector('.container'));