import { Story, Meta } from '@storybook/react'
import PokemonCard, { PokemonCardProps } from '.'

export default {
  component: PokemonCard,
  args: {
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
} as Meta<PokemonCardProps>

export const Default: Story<PokemonCardProps> = (args) => (
  <PokemonCard {...args} />
)
