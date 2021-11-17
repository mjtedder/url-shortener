import React from 'react';
import Form from './components/Form';
import Link from './components/Link';

const appStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const App = () => {
    return (
        <div style={appStyle}>
            <Form />
            <Link />
        </div>
    );
};

export default App;