import { render, screen } from '@testing-library/react'

import PokemonList from '.'

describe('<PokemonList />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokemonList />)

    expect(
      screen.getByRole('heading', { name: /PokemonList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
