import { Link } from 'react-router-dom';
import { Nav } from './style'

export default function NavBar({ user }) {
    return (
        <Nav>
            <div>
                <Link to='/orders'>Order History</Link>
                &nbsp; | &nbsp;
                <Link to='/orders/new'>New Order</Link>
            </div>
            <p>Welcome, {user.name}!</p>
        </Nav>
    );
}
