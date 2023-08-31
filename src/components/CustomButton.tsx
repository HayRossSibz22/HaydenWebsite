import React from 'react';
import { Button } from '@mui/material';
import {colors} from '@mui/material';
interface CustomButtonProps {
    href: string;
    title: string;
}

const CustomButtonStyles = {
    color: colors.amber[500],
    fontWeight: '2rem',
    border: '2px solid' + colors.amber[500],
    

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
