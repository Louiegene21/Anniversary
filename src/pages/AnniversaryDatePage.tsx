import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HeartsRain from "../components/effects/HeartsRain";

type Props = {
  onBack: () => void;
};

export default function AnniversaryDatePage({ onBack }: Props) {
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
      {/* soft glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 520px at 50% 20%, rgba(255,77,141,0.20), transparent 55%), radial-gradient(720px 420px at 30% 80%, rgba(255,143,177,0.14), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <HeartsRain />

      <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Typography sx={{ opacity: 0.85, fontWeight: 700, mb: 1 }}>
            Happy Anniversary My Love 🤍🤎 
          </Typography>

          <Typography
            sx={{
              fontWeight: 1000,
              letterSpacing: 2,
              lineHeight: 1,
              fontSize: { xs: 44, sm: 72, md: 92 },
              textShadow: "0 18px 60px rgba(255,77,141,0.25)",
            }}
          >
            03-03-2025
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.85 }}>
            The day our “us” became real ❤️
          </Typography>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              onClick={onBack}
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 999,
                px: 4,
                textTransform: "none",
                fontWeight: 800,
              }}
            >
              Back
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}