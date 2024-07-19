import classNames from "classnames";
import { Outlet, Link, useLocation } from "react-router-dom";
import ProgressItem from "./ProgressItem";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="base-layout">
      <div className="wrap-left-sidebar">
        <aside className="main-left-sidebar">
          <div>
            <div className="d-flex gap-3">
              <a href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="Zeely" />
              </a>
              <button className="btn btn-secondary d-flex">
                <img
                  src="/images/lightning-bolt.svg"
                  alt="Growth"
                  className="icon"
                  width={14}
                  height={14}
                />
                Growth
              </button>
            </div>

            <ul className="flex-column main-menu nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={classNames("nav-link", {
                    active: pathname === "/",
                  })}
                >
                  <img src="/images/home.svg" alt="Home" className="icon" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/creatives"
                  className={classNames("nav-link", {
                    active: pathname === "/creatives",
                  })}
                >
                  <img
                    src="/images/creatives.svg"
                    alt="Creatives"
                    className="icon"
                  />
                  Creatives
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/video"
                  className={classNames("nav-link", {
                    active: pathname === "/video",
                  })}
                >
                  <img src="/images/video.svg" alt="Video" className="icon" />
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/promotion"
                  className={classNames("nav-link", {
                    active: pathname === "/promotion",
                  })}
                >
                  <img
                    src="/images/promotion.svg"
                    alt="Promotion"
                    className="icon"
                  />
                  Promotion
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/account"
                  className={classNames("nav-link", {
                    active: pathname === "/account",
                  })}
                >
                  <img
                    src="/images/account.svg"
                    alt="Account"
                    className="icon"
                  />
                  Account
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex flex-column gap-2">
            <button className="btn btn-market">
              <img src="/images/apple.svg" alt="AppStore" />
            </button>
            <button className="btn btn-market">
              <img src="/images/google.svg" alt="GooglePlay" />
            </button>
          </div>
        </aside>
      </div>

      <Outlet />

      <div className="wrap-right-sidebar">
        <div>
          <div className="right-sidebar d-flex">
            <div className="wrap-avatar px-0 col-xl-6 col-12">
              <img
                src="/images/account-photo.png"
                alt="Account"
                className="user-avatar rounded-circle"
              />
              Hi, Michelle
            </div>
            <div className="col">
              <div className="d-flex justify-content-end align-items-center">
                <div className="p-1 wrap-email text-end col-3">
                  <button className="btn-icon btn btn-link">
                    <img src="/images/letter.svg" alt="Letter logo" />
                    <span className="badge bg-danger">2</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="right-sidebar-progress">
            <ProgressItem isCompleted title="Add you first product" />
            <ProgressItem
              title="Build a static creative"
              info="Generate a high-selling AI creative and boost your ad performance"
              imgUrl="/images/static.png"
              imgAlt="Static image"
            />
            <ProgressItem
              title="Create an AI avatar video"
              info="Make your first UGC-style video & crush your socials with viral content"
              imgUrl="/images/video.png"
              imgAlt="AI avatar video"
            />
            <ProgressItem isLocked title="Launch your first ad campaign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
