import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <main className='bg-greenDark'>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;