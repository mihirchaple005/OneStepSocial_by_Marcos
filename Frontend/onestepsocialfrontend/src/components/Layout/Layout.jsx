import Navbar from "./Navbar"
import PropTypes from 'prop-types';
import { Toaster } from "react-hot-toast"
import './layout.css';
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <Toaster/>
    <div className="layout">
    {children}
    </div>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout