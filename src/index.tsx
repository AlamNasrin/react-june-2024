import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';
import './axios/interceptors';
import AppThemeContextProvider, { AppThemeContext, initialState } from './components/context/AppThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Makes the context available in the entire application */}
    {/* <AppThemeContext.Provider value={initialState}>  */}
    {/* <AppThemeContextProvider> can replace </AppThemeContext> once AppThemeContextProvider is declared in AppThemeContext.tsx */}
    <AppThemeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AppThemeContextProvider>
    {/* </AppThemeContext.Provider>   */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
