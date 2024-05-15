import { List, ListItem, Typography } from '@mui/material';
import {} from 'react';

interface FooterProps {
    items?: string[];
}

const footer = [
    { title: 'About', items: ['About', 'Contact', 'Privacy Policy', 'Terms of Service'] },
    { title: 'Services', items: ['Services', 'Pricing', 'Documentation', 'FAQs'] },
    { title: 'Social', items: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'] },
];

function Footer({ items }: FooterProps) {
    console.log(items);

    return (
        <nav className="">
            {footer.map((section) => (
                <List key={section.title}>
                    <Typography component="h2">{section.title}</Typography>
                    {section.items.map((item) => (
                        <ListItem key={item}>{item}</ListItem>
                    ))}
                </List>
            ))}
        </nav>
    );
}

export default Footer;
