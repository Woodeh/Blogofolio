import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu"
import { Tabs } from "./components/Tabs/Tabs";
import { Typography } from "./components/Typography/Typography"



export const App = () => {

  return (
    <div>
      <Typography content="Test" type="H1"/>
      <Typography content="Test" type="H2"/>
      <Typography content="Test" type="H3"/>
      <Typography content="Test" type="subline"/>
      <Typography content="Test" type="textPrimary"/>
      <Typography content="Test" type="textSecondary"/>
      <br />
      <BurgerMenu/>
      <br />
      <br />
      <Tabs/>
    </div>
  );
}

