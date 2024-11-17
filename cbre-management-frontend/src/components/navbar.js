import * as React from "react";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { ChevronDown, Delete, Overflow, Upload } from "baseui/icon";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [mainItems, setMainItems] = React.useState([
    {
      active: true,
      icon: Upload,
      label: "Properties Overview",
      path: "/"
    },
    {
      icon: ChevronDown,
      label: "Metrics",
      navExitIcon: Delete,
      path: "/metrics"
    }
  ]);

  return (
    <AppNavBar
      title="TowerTracker"
      mainItems={mainItems}
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
        navigate(item.path); // Navigate to the path of the selected item
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
};
