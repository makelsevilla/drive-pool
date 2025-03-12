import styles from "./page.module.css";

import { Info, InfoOutlined } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <div className={styles.pageheader}>MUI Components ?</div>
      <div style={{ display: "flex", columnGap: "30px" }}>
        <Button>Default</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>Hello</Button>
          <Button>There</Button>
          <Button>World</Button>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 4,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
      <div>
        <InfoOutlined />
      </div>
    </div>
  );
}
