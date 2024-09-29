import styled from 'styled-components'
import Theme from '../theme/Theme.js'

const StyledButton = styled.button`
    color: ${Theme.colors.primary};
    border: 2px solid ${Theme.colors.primary};
    font-weight: 600;
    font-size: 1.5em;
    box-shadow: 0.8em 0.8em ${Theme.colors.primary};
    padding: 1em 1em;
    margin: 0px 0.8em 0.8em 0px;
    width: 100%;
`

const StyledButtonWrapper = styled.div`
    &:hover {
        ${StyledButton} {
            box-shadow: 0.2em 0.2em ${Theme.colors.primary};
            margin: 0.6em 0.2em 0.2em 0.6em;
        }
    }
`

const Button = ({type, variant, className, id, onClick, children}) => {
    return <StyledButtonWrapper>
        <StyledButton
            type={type ? type : 'button'}
            variant={variant}
            className={className ? `btn-component ${className}` : 'btn-component'}
            id={id}
            onClick={onClick}
        >{children}</StyledButton>
    </StyledButtonWrapper>
}

export default Button;