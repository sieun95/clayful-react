import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clayful from  "clayful/client-js";
import axios from "axios"
import { BrowserRouter } from 'react-router-dom';
import "./css/auth.css"


Clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM0MWVhZjk0ZmU0MTc0OGVjYmQwMjg3Yjk0ZmIzZjM3NWRjN2U5MmIyZmE4NDBlMzhkZDg3MDI4ZTE2Yjk2OGEiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ5NTEyNDg1LCJzdG9yZSI6IlEzWVlCOVA3TURINy5GWDdOODNYS0s0MlAiLCJzdWIiOiI1MzZBTTVBN1paQzQifQ.674WA_Y9FoEZH6WN2Y9JL9TBE9UMoRZfzxxYoxHmL-U'
});

Clayful.install('request', require('clayful/plugins/request-axios')(axios));

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();