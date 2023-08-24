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

export const CustomButton: React.FC<CustomButtonProps> = ({ href, title }) => {
    return (
        <Button
            style={CustomButtonStyles}
            href={href}
            sx={{ ml: 2 }}
        >
            {title}
        </Button>
    );
}
