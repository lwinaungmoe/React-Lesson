import React,{Component} from 'react';

class SearchBar  extends Component {
    constructor(props){
    super(props);
//User///
    this.state={term :''};
    }
    render(){
        return <input  onChange={event=>console.log(event.target.value)} />;

    }
   // onInputChange(event){
     ///   console.log(event)
   // }
       

        
    

}


export default SearchBar;