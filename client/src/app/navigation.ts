import { IconLink, NavLink } from "../common/types";
import { ReactComponent as Store } from "../assets/images/icons/store.svg";
import { ReactComponent as User } from "../assets/images/icons/user.svg";
import { ReactComponent as Heart } from "../assets/images/icons/heart.svg";
import { ReactComponent as Cart } from "../assets/images/icons/cart-nav.svg";

export const topbarLinks: Array<IconLink> = [
  {
    name: "store",
    icon: Store,
    linkTo: "/",
  },
  {
    name: "user",
    icon: User,
    linkTo: "/",
  },
  {
    name: "heart",
    icon: Heart,
    linkTo: "/",
  },
  {
    name: "cart",
    icon: Cart,
    linkTo: "/",
  },
];

export const topActionBarLinks: Array<NavLink> = [
  {
    display: "Pickup & Delivery",
    linkTo: "/",
  },
  {
    display: "Walmart.com",
    linkTo: "/",
  },
];
