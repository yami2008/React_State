// src/App.js
import React, { Component } from 'react';
import './App.css'; // Import any additional CSS if needed

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: 'John Doe',
                bio: 'A passionate software developer.',
                imgSrc: 'https://via.placeholder.com/150?text=Profile+Image',
                profession: 'Software Engineer'
            },
            shows: false,
            startTime: new Date()
        };
        this.intervalId = null;
    }

    toggleShow = () => {
        this.setState((prevState) => ({
            shows: !prevState.shows
        }));
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                elapsedTime: Math.floor((new Date() - this.state.startTime) / 1000)
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { person, shows, elapsedTime } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Class-Based Component Example</h1>
                    <button onClick={this.toggleShow}>
                        {shows ? 'Hide Profile' : 'Show Profile'}
                    </button>
                    {shows && (
                        <div>
                            <h2>{person.fullName}</h2>
                            <p>{person.bio}</p>
                            <img src={person.imgSrc} alt="Profile" />
                            <p><strong>Profession:</strong> {person.profession}</p>
                        </div>
                    )}
                    <p>Time since component mounted: {elapsedTime} seconds</p>
                </header>
            </div>
        );
    }
}

export default App;
