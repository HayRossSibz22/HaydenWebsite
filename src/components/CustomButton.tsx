import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
    href: string;
    title: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ href, title }) => {
    return <Button href={href}>
        {title}
    </Button>;
}
