import styled,{css} from 'styled-components';


export const Title = styled.h1`
  text-decoration: underline;
  color: blue;
  font-size: 30px;
  ${ props => props.theme === 'dark' && css`
    background: black;
    color: white;
    &:hover {
      background: blue; 
    }
  `}
`
