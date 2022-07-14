import * as S from './styles'

export type PokemonType = {
  slot: number
  type: {
    name: string
  }
}

export type PokemonCardProps = {
  name: string
  types: PokemonType[]
  image: string
}

const PokemonCard = ({ name, types, image }: PokemonCardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Types>
        {types.map(({ type: { name: typeName } }, index) => (
          <S.Type color={typeName} key={index}>
            {typeName}
          </S.Type>
        ))}
      </S.Types>
    </S.Content>
    <S.Image src={image} alt={name} />
  </S.Wrapper>
)

export default PokemonCard
