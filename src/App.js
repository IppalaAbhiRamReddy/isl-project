import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import IslTranslation from "./Translation";
import CommunityPage from "./Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/isl-translation" element={<IslTranslation/>} />
        <Route path="/community" element={<CommunityPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
