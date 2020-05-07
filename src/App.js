import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
    constructor(){
        super() 
    //super() calls the constructor of the parent, Component - you can only have one constructor per class    
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})       
    }
    // event.target.value = retrieves the value of whatever input it was called on,
    // in this case - the <input> in the SearchBox.js  

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>loading</h1>
        }
        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>    
        );
    }
}

export default App;