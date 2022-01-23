import SearchBox from '/Searchbox';
import payload from './payload';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-Component">
                    <div className="App-Component">
                        <SearchBox items={countries}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
