import React, { useMemo } from "react";
import "../styles/navbar.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export default function Navbar() {
  const userStore = useSelector((state: RootState) => state.user);
  const initials = useMemo(() => {
    const [firstName, lastName] = userStore.username.split(" ");
    return firstName.charAt(0) + lastName.charAt(0);
  }, [userStore]);

  return (
    <header className="navbar">
      <section className="navbar-section">
        <figure
          className="avatar avatar-x2"
          data-initial={initials}
          style={{ backgroundColor: "#5755d9" }}>
          <img src={userStore.photo} alt={`${userStore.username} Avatar`} />
          <i className="avatar-presence online"></i>
        </figure>
        <span className="username">{userStore.username}</span>
      </section>
    </header>
  );
}
