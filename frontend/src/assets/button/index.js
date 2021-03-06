import './style.css'
import styled from "styled-components";


const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'big',
    
}

const ButtonClasses = {
    SMALL: 'button--size-small',
    MEDIUM: 'button--size-medium',
    LARGE: 'button--size-large',
    ACTIVE: 'button--active-state'
}

const ThemedButton = ({
    children,
    className,
    size
}) => {

    return (
        <button className={`
            ${className}
            ${ButtonClasses.ACTIVE}
            ${size === 'small' && ButtonClasses.SMALL}
            ${size === 'medium' && ButtonClasses.MEDIUM}
            ${size === 'large' && ButtonClasses.LARGE}
        `}>
            {children}
        </button>
    )
    
}





export const Button = styled(ThemedButton)`
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textWithPrimary};
    font-family: ${(props) => props.theme.font};
    font-weight: 600;
    border: none;
    border-radius: ${(props) => props.theme.defaultBorderRadius};
    cursor: pointer;
`





