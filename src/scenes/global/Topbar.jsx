import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { useProSidebar } from "react-pro-sidebar";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import companyLogo from "../../assets/company-logo.jpg";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  const handleSidebar = () => {
    toggleSidebar();
  };

  return (
    <Box position="fixed" width="100%">
      <Box display="flex" justifyContent="space-between">
        {/* Icon BAR */}
        <Box backgroundColor={colors.primary[400]} borderRadius="3px">
          <Avatar src={companyLogo} alt="company" variant="square" sx={{ height: 1 / 1, width: 100 }} />
          {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton> */}
        </Box>
        {/* ICONS */}
        <Box display="flex" p="15px">
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleSidebar}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
