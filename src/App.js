import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (    
            <BrowserRouter>
            {/* Connects everything inside to Routing paths */}
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>     
        );
    }
}

export default App;
