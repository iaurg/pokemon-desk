import { render, screen } from '@testing-library/react'

import PokemonCard from '.'

const props = {
  name: 'bulbasaur',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  types: [
    {
      slot: 1,
      type: {
        name: 'grass'
      }
    },
    {
      slot: 2,
      type: {
        name: 'poison'
      }
    }
  ]
}

describe('<PokemonCard />', () => {
  it('should render the component', () => {
    const { container } = render(<PokemonCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /bulbasaur/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /bulbasaur/i })).toBeInTheDocument()

    expect(screen.getByText(/grass/i)).toBeInTheDocument()
    expect(screen.getByText(/poison/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
