interface CustomButtonProps {
    href: string;
    title: string;
}

const CustomButtonStyles = {
    color: 'white',
    fontWeight: 'bold', // Corrected fontWeight value
    backgroundColor: 'purple', // Added missing backgroundColor
    border: ' .15rem solid purple', // Combined border with string
    padding: '0.7rem 1rem', // Added padding for better spacing
    textDecoration: 'none', // Remove underline for links
    display: 'inline-block', // Display as inline-block
    marginLeft: '0.5rem', // Added margin for spacing
};

export const CustomButton: React.FC<CustomButtonProps> = ({ href, title }) => {
    return (
        <a
            style={CustomButtonStyles}
            href={href}
            rel="noopener noreferrer" // Required for security when using target="_blank"
        >
            {title}
        </a>
    );
};
