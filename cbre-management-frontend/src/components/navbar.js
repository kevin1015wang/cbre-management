import * as React from "react";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
} from "baseui/icon";

export default () => {
  const [mainItems, setMainItems] = React.useState([
    {
      icon: Upload,
      label: "Properties Overview"
    },
    {
      active: true,
      icon: ChevronDown,
      label: "Metrics",
      navExitIcon: Delete,
    }
  ]);
  return (
    <AppNavBar
      title="Property Management Dashboard"
      mainItems={mainItems}
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
      }}
      username="Umka Marshmallow"
      usernameSubtitle="Admin"
      userItems={[
        {
          icon: Overflow,
          label: "Logout"
        }
      ]}
      onUserItemSelect={item => console.log(item)}
    />
  );
}