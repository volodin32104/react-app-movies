import React from 'react'

class Search extends React.Component {

    state = {

        search: '',
        type: 'all',



    }

    handleKey = (event) => {

        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }

    }

    onTypeHandler = (e) => {
        this.setState({type: e.target.dataset.type}, ()=> {
            this.props.searchMovies(this.state.search, this.state.type)
        })
        
    }

      render() {  
          return <div>
              <div className="search">
            <input
            value={this.state.search}
            onChange= {(e) => {this.setState({search: e.target.value})}}
            onKeyDown={this.handleKey}
             placeholder="search" 
             type="search" 
             data-length="10"/>
              <button
              className="btn search-btn"
               onClick={() => {this.props.searchMovies(this.state.search, this.state.type)}}>
                   Search</button>
          </div>
      <div className='search-type' >
          <p>
          <label>
        <input 
        className="with-gap" 
        name="group1" type="radio"  
        data-type="all" 
        onChange={this.onTypeHandler}
        checked={this.state.type === 'all'}
        />
        <span>All</span>
      </label>
    </p>
    <p>
      <label>
        <input  
        className="with-gap" 
        name="group1" 
        type="radio" 
        data-type="movie"  
        onChange={this.onTypeHandler}
        checked={this.state.type === 'movie'}/>
        <span>Movies only</span>
      </label>
    </p>
    <p>
      <label>
        <input 
         className="with-gap" 
         name="group1" 
         type="radio" 
         data-type="series"  
         onChange={this.onTypeHandler}
         checked={this.state.type === 'series'}/>
        <span>Series only</span>
      </label>
    </p>
      </div>
          </div>
          

}

}

export default Search;