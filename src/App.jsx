import React, { useState } from 'react';

const App = () => {

    let CurrentTime = new Date().toLocaleTimeString();

    const [count, setCount] = useState(CurrentTime);

    const increment = () => {

        let CurrentTime = new Date().toLocaleTimeString();

        return setCount(CurrentTime);

    };

    setInterval(increment, 1000);

    return (

        <>

            <h1 >{count}</h1>

        </>

    );

};

export default App;