import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const [display, setDisplay] = useState(false);

    console.log(display);
    const click = () =>  { setDisplay(!display); };

    return (
        <div className="App">
            <button onClick={click}/>
            {display && <div>button clicked</div> }
        </div>
    );
}

export default App;
