import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./store/user/actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from "./pages/Index";
import AlbumsPage from "./pages/Albums";
import AlbumPage from "./pages/Album";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { RootState } from "./store/reducers";
import "./styles/app.css";

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => Boolean(state.user.token.length));

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  const Routes = () => {
    return (
      <Router>
        <div className="layout">
          <div className="layout-sidebar">
            <Sidebar />
          </div>

          <div className="layout-content">
            <Navbar />

            <div className="layout-content-wrapper">
              <Switch>
                <Route path="/album/:id">
                  <AlbumPage />
                </Route>
                <Route path="/albums">
                  <AlbumsPage />
                </Route>
                <Route path="/">
                  <IndexPage />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  };

  const Loading = () => {
    return (
      <div className="app-loading">
        <div className="loading loading-lg"></div>
      </div>
    );
  };

  return isAuth ? <Routes /> : <Loading />;
}
