import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/questions" element={<h1> List my Questions</h1>} />
          <Route path="/add-question" element={<h1> Create Question</h1>} />
          <Route path="/questions/:id" element={<h1> See Question</h1>} />
          <Route path="/profile" element={<h1> Profile User</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
