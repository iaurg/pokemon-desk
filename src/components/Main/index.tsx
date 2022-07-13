import * as S from './styles'

const Main = ({ title = 'Pokedex', description = 'Hello pokemons' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
