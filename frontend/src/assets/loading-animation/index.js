import './style.css'
import styled from "styled-components"


const DotComponent = ({className, animatedClassName}) => {

    return <div className={`${className} ${animatedClassName}`}></div>
}

const Dot = styled(DotComponent)`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.animationInsidePrimary};
`

export default function LoadingAnimation() {

    return (
        <div className="loading-animation">
            <Dot animatedClassName="dot--animated-1" />
            <Dot animatedClassName="dot--animated-2"/>
            <Dot animatedClassName="dot--animated-3"/>
            
        </div>
    )
}


