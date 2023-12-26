"use client";

import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const Navbar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { logout } = useAuthCalls();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <nav className="navbar navbar-expand-lg  bg-black py-3">
      <div className="container-fluid d-flex align-items-end">
        <Link className="navbar-brand text-white fs-2 " href="/">
          Turkel's E-Commerce
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-end gap-4 w-100 px-5">
            {!user ? (
              <Link
                className="nav-link text-white fs-4"
                aria-current="page"
                href="/login"
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  className="nav-link text-white fs-4"
                  aria-current="page"
                  href="/my-basket"
                  prefetch={false}
                >
                  My Basket
                </Link>
                <Link className="nav-link text-white fs-4" href="/my-purchases" prefetch={false}>
                  My Purchases
                </Link>
                <button
                  className="nav-link text-white fs-4"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
