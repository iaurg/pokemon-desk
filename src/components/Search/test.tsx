import { render, screen } from '@testing-library/react'

import Search from '.'

describe('<Search />', () => {
  it('should render the search', () => {
    const { container } = render(<Search search="" setSearch={() => null} />)

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
