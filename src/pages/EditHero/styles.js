import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
  }

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  background-color: #7159c1;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
    margin-top: 15px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
