import styled from 'styled-components';

export const ReusableButton = styled.button`
    
    width: auto;
    height: 7vh;
    font-size: 2vh;
    font-family: anurati;
    background: linear-gradient(45deg, transparent 5%, #f39db6 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 0px;
    box-shadow: 6px 0px 0px #d46a92;
    outline: transparent;
    position: relative;
    padding-left: 5vh;
    padding-right: 5vh;

    :after{
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #d46a92 3%, #d46a92 5%, #f39db6 5%);
        text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #d46a92;
        clip-path: var(--slice-0);
    }

     @keyframes glitch{
        0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
        }
        10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
        }
        20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
        }
        30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
        }
        40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
        }
        50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
        }
        60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
        }
        70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
        }
        80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
        }
        90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
        }
        100% {
        clip-path: var(--slice-1);
        transform: translate(0);
        }
    }

    &:hover{
        
            animation: 1s glitch;
            animation-timing-function: steps(2, end);
        
    }
`;