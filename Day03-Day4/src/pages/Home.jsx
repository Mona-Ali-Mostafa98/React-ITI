import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MyNav } from "../components/MyNav";

export function Home() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center align-items-center">
          <div className="col-12 col-lg-8 mt-5">
            <div className="card shadow bg-body-tertiary rounded">
              <div className="card-header">
                <h2 className="text-center">Home Page</h2>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <Link
                    to={`/books`}
                    className="btn btn-primary p-2"
                  >
                    Go to books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
