import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            flexGrow: 1,
            position: "sticky",
            zIndex: 40,
        }}>
            <AppBar position="static" sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid var(--var-border-color)",
                boxShadow: "none",
                color: "#212121",
            }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{
                        cursor: "pointer",
                    }} onClick={() => navigate("/")}>
                        Omame Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
