import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HeartsRain from "../effects/HeartsRain";
import HeartBurst from "../effects/HeartBurst";

type LandingProps = {
  onEnter: () => void;
};

export default function Landing({ onEnter }: LandingProps) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* background gradient glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 500px at 30% 20%, rgba(255,77,141,0.22), transparent 55%), radial-gradient(700px 380px at 75% 70%, rgba(255,143,177,0.16), transparent 60%)",
        }}
      />

      <HeartsRain />
      <HeartBurst />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={2.5} alignItems="center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 800,
                letterSpacing: 0.2,
                fontSize: { xs: 30, sm: 38 },
              }}
            >
              Happy 1st Anniversary Lovey
            </Typography>

            <Typography
              sx={{
                mt: 1,
                textAlign: "center",
                opacity: 0.85,
                fontSize: { xs: 14, sm: 16 },
              }}
            >
              Tap anywhere for more hearts !!!
            </Typography>
          </motion.div>

          {/* photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.01, rotate: 0.2 }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                aspectRatio: "4 / 5",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 30px 90px rgba(0,0,0,0.55)",
                border: "1px solid rgba(255,255,255,0.10)",
                position: "relative",
                bgcolor: "rgba(255,255,255,0.03)",
              }}
            >
              <Box
                component="img"
                src="/src/assets/images/hero.jpg"
                alt="Our photo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fit",
                  display: "block",
                  transform: "scale(1.02)",
                }}
              />

              {/* soft overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)",
                }}
              />

<Box
  sx={{
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    px: 2,
  }}
>
  <Typography sx={{ fontWeight: 700, fontSize: 32 }}>
    For my favorite person 💕
  </Typography>

</Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={onEnter}
              size="large"
              variant="contained"
              sx={{
                px: 5,
                py: 1.4,
                fontWeight: 800,
                borderRadius: 999,
                textTransform: "none",
                boxShadow: "0 18px 45px rgba(255,77,141,0.25)",
              }}
            >
              Enter 💗
            </Button>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
}