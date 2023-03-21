import { useState, useEffect } from "react";
import { Sidebar as ProSideBar, Menu, MenuItem, useProSidebar, sidebarClasses, menuClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import userImg from "../../assets/cortana.png";
import { red } from "@mui/material/colors";
import { color } from "@mui/system";

const handleLinkClick = (to) => {
  console.log(to);
  window.history.pushState(to);
};

const Item = ({ title, to, icon, selected, setSelected, toggleSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    setSelected(title);
    toggleSidebar();
  };

  return (
    <MenuItem
      // active={selected === title}
      active
      onClick={handleClick}
      icon={icon}
      rootStyles={{
        "&:hover": {
          backgroundColor: red[100],
        },
      }}
      component={<Link to={to} />}
    >
      <Typography varant="h6">{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  const menuItemStyles = {
    menuItemRoot: {
      direction: "ltr",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? colors.greenAccent[300] : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: colors.blueAccent[700],
      },
      "&:hover": {
        // backgroundColor: hexToRgba("#868dfb", 0.8),
        backgroundColor: colors.primary[600],
        color: "#6870fa !important",
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 800 : undefined,
    }),
  };

  console.log("toggled: " + toggled);

  return (
    <Box>
      <ProSideBar
        breakPoint="always"
        rtl={true}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: colors.primary[400],
          },
        }}
      >
        {toggled && (
          <Menu iconShape="square" menuItemStyles={menuItemStyles} rootStyles={{ direction: "ltr" }}>
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => toggleSidebar()}
              icon={collapsed ? <MenuOutlinedIcon /> : undefined}
              style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
            >
              {toggled && (
                <Box display="flex" alignItems="center" mr="15px">
                  <MenuOutlinedIcon />
                  <Typography ml="5px" variant="h3" color={colors.grey[100]}>
                    Sidebar
                  </Typography>
                </Box>
              )}
            </MenuItem>
            {/* USER */}
            {toggled && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={userImg}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>

                <Box textAlign="center">
                  <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                    Haruki
                  </Typography>
                  <Typography>Hi There</Typography>
                </Box>
              </Box>
            )}

            {/* MENU ITEMS */}
            {toggled && (
              <Box paddingRight={collapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Typography
                  varant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px", opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
                >
                  Data
                </Typography>
                <Item
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px", opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
                >
                  Pages
                </Typography>
                <Item
                  title="Contacts Information"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Item
                  title="Invoices Balances"
                  to="/invoices"
                  icon={<AudiotrackOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Item
                  title="Profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px", opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
                >
                  Charts
                </Typography>

                <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
                <Item
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  toggleSidebar={toggleSidebar}
                />
              </Box>
            )}
          </Menu>
        )}
      </ProSideBar>
    </Box>
  );
};

export default Sidebar;
