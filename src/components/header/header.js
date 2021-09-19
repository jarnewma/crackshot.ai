/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import styles from 'style/header'

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        {/* <Button className="donate__btn">Get Started</Button> */}
        <MobileDrawer />
      </Container>
    </header>
  );
}




