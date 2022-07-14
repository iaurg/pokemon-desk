import { useList } from 'context/useList'
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
  handleRemove?: (pokemon: Omit<PokemonCardProps, 'handleRemove'>) => void
}

function PokemonCard({ name, image, types, handleRemove }: PokemonCardProps) {
  const { addPokemon } = useList()

  const handleAddPokemon = () => {
    addPokemon({ name, image, types })
  }

  const handleRemovePokemon = () => {
    const pokemon = { name, image, types }
    if (!handleRemove) return
    handleRemove(pokemon)
  }

  return (
    <S.Wrapper onClick={handleRemove ? handleRemovePokemon : handleAddPokemon}>
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
