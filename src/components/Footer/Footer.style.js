import Styled from 'styled-components';
import { device } from '../../helper/Responsive/Responsive';

export const Footer = Styled.div`
background: ${(props) => props.theme.primary};
margin-top: 100px;
`;

export const Box = Styled.div`
max-width: 1200px;
margin: 0 auto;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
gap: 10px;
padding: 30px 5px 50px 5px;

img {
  display: none;

}

p {
  color: ${(props) => props.theme.secondary};
  text-align: center;
  width: 100%;
}

svg {
  color: ${(props) => props.theme.secondary};
}

@media ${device.tablet} {
  align-items: center;
justify-content:center;
flex-direction: row;
padding: 20px 0;

img {
  height: 100px;
  display: block;
}

p {
text-align: left;
}
}
`;