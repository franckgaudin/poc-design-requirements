import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { RouterProvider, Link } from 'react-aria-components'


export default function Root() {
    const navigate = useNavigate();
    const location = useLocation();

    const { pathname } = location;

    const activeClass = (path: string) => {
        return path === pathname ? 'active' : ''
    }

    return (
        <RouterProvider navigate={navigate}>
            <header style={{ display: "flex", gap: "1rem"}}>
                <Link className={activeClass('/')} href="/">Home</Link>
                <Link className={activeClass('/contact')} href="/contact">Contact</Link>
            </header>
            <main>
                <Outlet />
            </main>
    </RouterProvider>
    );
}
