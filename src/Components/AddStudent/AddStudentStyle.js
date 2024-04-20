import styled from "styled-components";

export const PageContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
padding-top: 50px;
`;

export const StyledText = styled.h1`
font-size: 38px;
color: #000814;
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
width: 25%;
`;

export const StyledInput = styled.input`
padding: 10px;
border-radius: 8px;
border: 1px solid #adb5bd;

&:focus{
    outline: none;
}
 &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
`;
export const StyledButton = styled.button`
padding: 10px;
border-radius: 8px;
border-color: transparent;
background-color: ${(props) => (props.$cancel ? '#9e2a2b' : '#274c77')};
color: #ffffff;
cursor: pointer;
`;



