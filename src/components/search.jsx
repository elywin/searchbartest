import React from "react";


class SearchBar extends React.Component {
  state = { result: "" };

  render() {
    return (
    
       
          <div className="searchbar">
            <input

              type="text"
              Search="Search here"
              placeholder="Enter text here"
              value={this.state.result}
              onChange={(e) => this.setState({ result: e.target.value })}
               />
              <p className="result">{this.state.result}</p>
            
          </div>
      
      
    );
  }
}

export default SearchBar;
