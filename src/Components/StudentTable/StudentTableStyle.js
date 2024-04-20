import styled from "styled-components";

export const TableContainer = styled.div`
width: 70%;
`;

export const Table = styled.table`
  margin: auto;
  border-collapse: collapse;
  border: 1px solid #ddd; 
  width: 100%;

  thead{
    background-color: #184e77;
    color: #ffffff;
  }

  th{
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd; 

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  &:nth-child(4) {
        color: ${(props) => (props.$color === "PASS" ? '#007f5f' : '#d90429')};
        font-weight: bold;
    }

  &:last-child {
   display: flex;
   justify-content: center;
   gap: 20px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px 0;
`;