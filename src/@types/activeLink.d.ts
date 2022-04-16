import { LinkModel } from 'models/linkModel'

export type ActiveLink = LinkModel
export type ActiveLinkContextModel = {
  activeLink: ActiveLink;
  setActiveLink: (link: ActiveLink) => void;
}
