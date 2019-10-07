import styled from 'styled-components';

const Footer = styled.footer`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  p {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #7159c1;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Footer;
