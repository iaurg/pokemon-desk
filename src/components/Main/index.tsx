import HandList from 'components/HandList'
import PokemonList from 'components/PokemonList'
import Search from 'components/Search'
import { ListProvider } from 'context/useList'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import * as S from './styles'

function Main({
  title = 'Pokedex',
  description = 'Search for pokemons and add into your hand'
}) {
  const [search, setSearch] = useState('')

  return (
    <ListProvider>
      <Toaster />
      <S.Wrapper>
        <S.Content>
          <S.Hand>
            <S.HandTitle>Your hand 👋</S.HandTitle>
            <HandList />
          </S.Hand>
          <S.Listing>
            <S.Title>{title} 👾</S.Title>
            <S.Description>{description}</S.Description>
            <Search search={search} setSearch={setSearch} />
            <PokemonList search={search} />
          </S.Listing>
        </S.Content>
      </S.Wrapper>
    </ListProvider>
  )
}

export default Main
