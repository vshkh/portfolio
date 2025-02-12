import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Layout() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Enclose everything in container to apply formatting to every rendered page */}
            <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
                <Outlet />
            </Container>

            {/* Footer */}
            <Footer/>
            
            
            
        </>
    );
}