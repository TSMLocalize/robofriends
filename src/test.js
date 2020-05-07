class App extends Component {
    constructor(){
        super() 
        this.state = {
            robots: robots,
            searchfield: ' ',
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
}