import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /pokemon/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#fff' })
  })

  it('should render pokedex and hand', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { level: 3, name: /Your Hand/i })
    ).toBeInTheDocument()
  })
})
