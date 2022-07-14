import { Story, Meta } from '@storybook/react'
import PokemonList from '.'

export default {
  title: 'PokemonList',
  component: PokemonList
} as Meta

export const Default: Story = () => <PokemonList />
