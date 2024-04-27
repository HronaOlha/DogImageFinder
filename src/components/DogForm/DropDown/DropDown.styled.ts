import styled from "styled-components";

interface DropDown {
  readonly showError?: boolean;
}

export const DropdownContainer = styled.div<DropDown>`
  margin: 0px 10px;
  width: 300px;
  @media (max-width: 375px) {
    width: 230px;
  }

  select {
    background-color: ${(props) => props.theme.light};
    font-weight: bold;
    font-size: 0.8rem;
    outline: none;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 8px;

    &.error {
      border: solid 2px red;
    }
  }
`;

export const Container = styled.div`
  h5 {
    font-weight: bold;
    font-size: 1rem;
    margin: 5px 0;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.error};
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
`;
