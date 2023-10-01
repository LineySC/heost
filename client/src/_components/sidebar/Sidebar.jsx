import React, { useEffect, useState } from "react";
import { logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

import ConfigFile from "./../../configfile.json";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subNavs = document.querySelectorAll(`.subnav`);
  const buttons = document.querySelectorAll(`.sidebar button`);

  /**
   * Logout
   */

  const [navigateToLogin, setNavigateToLogin] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setNavigateToLogin(true);
  };

  useEffect(() => {
    if (navigateToLogin) {
      navigate("/login");
    }
  }, [navigateToLogin, navigate]);

  const resetSidebar = () => {
    subNavs.forEach((nav) => {
      nav.style.height = 0;
    });

    buttons.forEach((b) => {
      b.classList.remove("active");
    });
  };

  const handleHeaderClicked = (subNav) => {
    resetSidebar();

    const subNavOuter = document.querySelector(`#${subNav}`),
      subNavInner = document.querySelector(`#${subNav} .subnav-inner`),
      button = subNavOuter.previousElementSibling;

    if (subNavOuter.clientHeight > 0) {
      subNavOuter.style.height = 0;
      button.classList.remove("active");
      return;
    }

    button.classList.toggle("active");
    const newHeight = `${subNavInner.clientHeight}px`;
    subNavOuter.style.height = newHeight;
  };

  return (
    <aside className="sidebar">
      <header>
        <img src="logo.svg" />
        <span> {ConfigFile.name} </span>
      </header>

      <button>
        <span className="material-symbols-outlined"> home </span>
        <span>Home</span>
      </button>

      <button onClick={() => handleHeaderClicked("tools")}>
        <span className="material-symbols-outlined"> euro </span>
        <span>Finance</span>
        <span className="material-symbols-outlined"> expand_more </span>
      </button>
      <div id="tools" className="subnav">
        <div className="subnav-inner">
          <button>
            <span>Documents</span>
          </button>
          <button>
            <span>Editor</span>
          </button>
          <button>
            <span>Themes</span>
          </button>
        </div>
      </div>

      <button onClick={() => handleHeaderClicked("settings")}>
        <span className="material-symbols-outlined"> Groups </span>
        <span>Ressource Humaines</span>
        <span className="material-symbols-outlined"> expand_more </span>
      </button>
      <div id="settings" className="subnav">
        <div className="subnav-inner">
          <button>
            <span>Display</span>
          </button>
          <button>
            <span>Audio</span>
          </button>
          <button>
            <span>Interface</span>
          </button>
          <button>
            <span>Accessibility</span>
          </button>
        </div>
      </div>

      <button>
        <span className="material-symbols-outlined"> Inventory </span>
        <span>Stocks</span>
      </button>

      <button>
        <span className="material-symbols-outlined">Point_of_sale</span>
        <span>Ventes</span>
      </button>

      <button>
        <span className="material-symbols-outlined"> Storefront </span>
        <span>Achats</span>
      </button>

      <button>
        <span className="material-symbols-outlined"> Conveyor_Belt </span>
        <span>Production</span>
      </button>

      <button>
        <span className="material-symbols-outlined"> Local_Shipping </span>
        <span>Logistique</span>
      </button>

      <button onClick={() => handleHeaderClicked("project")}>
        <span className="material-symbols-outlined"> Note_Alt </span>
        <span>Affaire</span>
        <span className="material-symbols-outlined"> expand_more </span>
      </button>
      <div id="project" className="subnav">
        <div className="subnav-inner">
          <button>
            <span>
              <Link to={"/business/new"}>Nouveau</Link>
            </span>
          </button>
          <button>
            <span>
              <Link to={"/business/all"}>Liste des projets</Link>
            </span>
          </button>
          <button>
            <span>
              <Link to={"/new_estimate"}>Crée un devis</Link>
            </span>
          </button>
        </div>
      </div>

      <button>
        <span className="material-symbols-outlined"> Contacts </span>
        <span>
          <Link to={"/client"}> Relation client </Link>
        </span>
      </button>

      <button>
        <span className="material-symbols-outlined"> logout </span>
        <span onClick={handleLogout}>Déconnexion</span>
      </button>
    </aside>
  );
}
