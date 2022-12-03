import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route index element={<LoginPage />} />
            <Route path="chat" element={<ChatPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
