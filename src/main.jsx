import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import InfoProvider from './components/context/InfoProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <InfoProvider>
            <App />
        </InfoProvider>
    </React.StrictMode>,
);
