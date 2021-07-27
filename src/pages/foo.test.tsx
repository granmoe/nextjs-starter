import { render, screen } from '@testing-library/react'

describe('thing', () => {
  it('does stuff', () => {
    render(<p>asdf</p>)

    expect(screen.getByText('asdf')).toBeTruthy()
  })
})
