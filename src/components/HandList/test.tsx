import { render, screen } from '@testing-library/react'

import HandList from '.'

describe('<HandList />', () => {
  it('should render the heading', () => {
    const { container } = render(<HandList />)

    expect(
      screen.getByRole('heading', { name: /HandList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
