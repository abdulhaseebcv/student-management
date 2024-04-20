import styled from "styled-components";

export const PageContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 70px;
`;
export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
gap: 30px;
padding-bottom: 30px;
`;

export const Button = styled.button`
padding: 18px;
border-radius: 8px;
border: none;
cursor: pointer;
font-size: 14px;
background: #184e77;
color: #ffffff;
`;

export const SearchInput = styled.input`
padding: 8px;
border-radius: 8px;
border: 1px solid #adb5bd;
&:focus{
    outline: none;
}
`;


export const FilterContainer = styled.div`
display: flex;
gap: 10px;
`;

export const SelectFilter = styled.select`
    padding: 8px 0;
    border: 1px solid #adb5bd;
    border-radius: 8px;
    outline: none;
`;