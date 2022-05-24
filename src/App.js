import { useEffect } from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./app/nameSlice";
import { setDressSuggestions } from "./app/dressSuggestionsSlice";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Notfound from "./components/Notfound";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const URL = process.env.HEROKU_URL || "http://localhost:4000";

  const getDressSuggestions = async () => {
    const res = await axios.get(`${URL}/dressSuggestions`, {
      headers: { authorization: token },
    });
    const data = await res.data;
    dispatch(setName(data.name));
    dispatch(setDressSuggestions(data.dressSuggestions));
  };

  useEffect(() => {
    getDressSuggestions();
  }, [token]);

  return (
    <div className="App">
      <div class="h-screen">
        <NavigationDrawer />
        <Routes>
          <Route index element={token ? <Home /> : <Login />} />
          <Route
            path="/signup"
            element={token ? <Navigate replace to="/" /> : <Signup />}
          />
          <Route
            path="/login"
            element={token ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
