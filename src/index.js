import { BrowserRouter, Routes, Route, Navigate } from "https://unpkg.com/react-router-dom@6/umd/react-router-dom.development.js";
import Login from './login.js';
import Dashboard from './dashboard.js';

function App() {
  return (
    React.createElement(BrowserRouter, null,
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(Login, null) }),
        React.createElement(Route, { path: '/app/*', element: React.createElement(RequireAuth, null) })
      )
    )
  );
}

function RequireAuth() {
  const stored = localStorage.getItem('consorcio');
  if (!stored) return React.createElement(Navigate, { to: '/' });
  return React.createElement(Dashboard, { consorcio: stored });
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
