import { useState } from 'react'
import * as S from './styles'

/*
Poke API provide no search functionality, so this is a "trick" to get the search functionality.
*/

type SearchProps = {
  search: string
  setSearch: (search: string) => void
}

function Search({ search, setSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState(search)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <S.Wrapper>
      <input
        onChange={(e) => handleChange(e)}
        defaultValue={searchValue}
        type="text"
        placeholder="Search for pokemons"
      />
    </S.Wrapper>
  )
}

export default Search
