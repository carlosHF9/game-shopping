import './style.css'
import styled from "styled-components"


const Dot = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primaryColor};
`

export default function LoadingAnimation() {

    return (
        <div className="loading-animation">
            <Dot />
            <Dot />
            <Dot />
            
        </div>
    )
}


