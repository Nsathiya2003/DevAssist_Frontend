import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Example from "./components/example";
import ChatPage from "./pages/ChatPage";
// import Sample from "./components/sample";

function App() {
  let clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="example" element={<Example />} />
              <Route path="chat/:id" element={<ChatPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>

      {/*For toastify styling */}
      <ToastContainer />
    </>
  );
}

export default App;
