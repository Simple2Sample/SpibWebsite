import { styled } from "styled-components";

const DividerContainer = styled.div`
height: 32px;
width: 100%;
grid-column: 1 / -1;
grid-row: 3;
align-self: flex-start;
// add opacity on the top and bottom
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%);
`;

const Divider = () => {
    return (
        <DividerContainer className="divider bg-light" ></DividerContainer>
    );
    }

export default Divider;