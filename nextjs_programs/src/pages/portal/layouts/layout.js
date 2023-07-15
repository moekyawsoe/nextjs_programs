import React, { useEffect, useState } from "react";
import { useRouter, Router } from "next/router";
import SplashPage from "../../splash";
import Header from "../../../app/components/header";
import MenuAppBar from "../../../app/components/appbar";
import Footer from "../../../app/components/footer";
import "../../../app/styles/global.css";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  Router.events.on("routeChangeStart", (url) => {
    console.log("Route is changing...");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log("Route changing is complete.");
    setLoading(false);
  });

  return (
    <>
      <MenuAppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
