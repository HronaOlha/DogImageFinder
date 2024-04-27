import styled from "styled-components";
interface DropDown {
  readonly showError?: boolean;
}
export const DogFormContainer = styled.div<DropDown>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 15px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
`;
