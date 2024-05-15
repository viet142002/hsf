import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';

const headerNav = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Services',
        url: '/services',
    },
    {
        title: 'Contact',
        url: '/contact',
    },
];

function Header() {
    return (
        <header>
            <nav>
                <List>
                    {headerNav.map((item) => (
                        <ListItem key={item.title}>
                            <Link to={item.url}>{item.title}</Link>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </header>
    );
}

export default Header;
