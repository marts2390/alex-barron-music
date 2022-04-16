import * as React from 'react'
import { ActiveLink, ActiveLinkContextModel } from '../@types/activeLink'
import { LinkModel } from 'models/linkModel'

export const ActiveLinkContext = React.createContext<ActiveLinkContextModel | null>(null)

const ActiveLinkProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [activeLink, setActiveLink] = React.useState<ActiveLink>(LinkModel.home)

  return (
    <ActiveLinkContext.Provider value={ { activeLink: activeLink, setActiveLink: setActiveLink } }>
      {children}
    </ActiveLinkContext.Provider>
  )
}

export default ActiveLinkProvider
