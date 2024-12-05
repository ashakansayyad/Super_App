import React from "react";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenrePage from "./pages/GenrePage";
import Carousel from "./pages/Carousel";
import DashbordPage from "./pages/DashbordPage";
import MoviePage from "./pages/MoviePage";
import { Navigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import "./App.css";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AppContext);

  return user ? children : <Navigate to="/RegistrationPage" />;
};

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route
            path="/Genre"
            element={
              <ProtectedRoute>
                <GenrePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/carousel"
            element={
              <ProtectedRoute>
                <Carousel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashbord"
            element={
              <ProtectedRoute>
                <DashbordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MoviePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
