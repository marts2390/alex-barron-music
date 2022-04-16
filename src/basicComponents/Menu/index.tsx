import { FC, useContext } from 'react'
import { Link } from 'react-scroll'
import { Box } from '@mui/material'

import { ActiveLinkContext } from 'context/AppContext'
import { ActiveLinkContextModel } from '../../@types/activeLink'
import { menuItems } from 'common/menuItems'

import { styles } from './styles'

interface IMenuComponentProps {
  theme?: string;
  isSticky: boolean;
}

const MenuComponent:FC<IMenuComponentProps> = ({
  theme = 'light',
  isSticky
}) => {
  const { activeLink } = useContext(ActiveLinkContext) as ActiveLinkContextModel

  return (
    <Box sx={ styles.headerMenu }>
      {menuItems.map((item) => {
        return (
          <Box
            key={ item.name }
            sx={ [
              styles.headerMenuItem,
              theme === 'light' ? styles.light : styles.dark,
              activeLink === item.url && styles.active,
              isSticky && styles.sticky,
            ] }
          >
            <Link
              smooth={ true }
              to={ item.url }
              offset={ item.url === 'home' ? -1000 : -100 }
            >
              {item.name}
            </Link>
          </Box>
        )
      })}
    </Box>
  )
}

export default MenuComponent