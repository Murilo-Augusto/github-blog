import styled from 'styled-components'
import coverImg from '../../../../assets/cover.jpg'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: 100%;
  padding: 4rem 1.5rem 8.375rem;
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;

  img {
    max-width: 148px;
    height: fit-content;
  }
`
