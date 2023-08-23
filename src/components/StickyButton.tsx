import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
    href: string;
    title: string;
}

const CustomButtonStyles = {
    color: 'purple',
    fontWeight: '2rem',
    border: '2px solid purple',
};
//q: how do i add to the component below to make it stick in place?
//a: https://stackoverflow.com/questions/56616776/how-to-make-a-button-sticky-in-react
export const StickyButton: React.FC<CustomButtonProps> = ({ href, title, }) => {
    return (
        <Button
            style={CustomButtonStyles}
            // variant="contained"
            //color="secondary"
            href={href}
            // target="_blank"
            // rel="noopener noreferrer"
            sx={{ ml: 2 }}
            
        >
            {title}
        </Button>
    );
}

//q: what file should i edit style of Sticky Button component to make it sticky?
//a: src\components\StickyButton.tsx
//q: how do i edit the style in a tsx file?
//a: https://stackoverflow.com/questions/45858017/how-to-add-css-to-react-component
