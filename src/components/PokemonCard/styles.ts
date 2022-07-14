import styled, { css } from 'styled-components'

type ColorObject = {
  [key: string]: string
}

const typesColors: ColorObject = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
}

export const Wrapper = styled.main`
  background-color: #fff;
  color: #000;
  padding: 1.5rem 2rem;
  text-align: left;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  width: fit-content;
  display: flex;
  transition: all 0.2s ease-in-out;
  align-items: center;
  margin: 1rem;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  width: 220px;
  justify-content: space-between;
`

export const Content = styled.div`
  margin-right: 0.5rem;
`

export const Name = styled.h1`
  color: #081837;
  padding-bottom: 1rem;
`

export const Types = styled.div``

export const Type = styled.span`
  ${({ color }) => css`
    background-color: ${typesColors[color ? color : 'normal']};
    color: #fff;
    text-transform: uppercase;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
  `}
`

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
`
