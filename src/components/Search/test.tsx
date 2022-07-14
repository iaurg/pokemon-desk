import { render, screen } from '@testing-library/react'

import Search from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    const { container } = render(<Search />)

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
