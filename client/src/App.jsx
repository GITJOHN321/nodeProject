import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";
import QuestionFormPage from "./pages/QuestionFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { QuestionProvider } from "./context/QuestionContext";
import Navbar from "./components/navbar";

function App() {
  return (
    <AuthProvider>
      <QuestionProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/questions" element={<QuestionPage />} />
                <Route path="/questions/new" element={<QuestionFormPage />} />
                <Route path="/questions/:id" element={<QuestionFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </QuestionProvider>
    </AuthProvider>
  );
}
export default App;
