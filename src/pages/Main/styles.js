import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 3px solid #333;
    border-radius: 4px;
    background: #e6e6ea;
    }
    & + li {
      margin-top: 10px
      border-top: 1px solid;
    }

    a {
      color: #7159c1;
      text-decoration: none;
      margin-right: 20px;
    }

    img {
      border-radius: 50%;
      border: 5px solid #eee;
    }

`;

export const CardList = styled.ul`
  padding: 30px;
  margin-top: 30px;
  border-top: 2px solid #eee;
  list-style: none;

  li {
    display: flex;
    background: #e6e6ea;
    justify-content: space-between;
    padding: 15px 10px;
    border: 3px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      border-radius: 100%;
      border: 5px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;
    }

    h1 {
      font-size: 16px;
      text-align: center;
      justify-content: center;
      margin-left: 20px;
    }

    strong {
      font-size: 16px;
    }
    a {
      text-decoration: none;
      font-size: 16px;
      text-align: center;
      justify-content: right;
      margin-top: 121px;
      margin-left: 30px;
      color: #333;

      &:hover {
        color: #7159c1;
      }
    }
  }
`;
