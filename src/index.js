//index.js
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import store from './store'
import { Provider } from 'react-redux'
import './styles/App.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StyledEngineProvider>
);