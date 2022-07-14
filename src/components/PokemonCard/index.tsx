import * as S from './styles'

export type PokemonCardProps = {
  name: string
  image: string
  types: {
    slot: number
    type: {
      name: string
    }
  }[]
}

function PokemonCard({ name, image, types }: PokemonCardProps) {
  return (
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
}

export default PokemonCard
