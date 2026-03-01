import { Box, Button, Container, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LoveLetter from "../components/Sections/LoveLetter";
import Collage from "../components/Sections/Collage";
import GifStrip from "../components/Sections/GifStrip";
import AnniversaryDatePage from "./AnniversaryDatePage";

export default function MainPage() {
  const [showDatePage, setShowDatePage] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!showDatePage ? (
        <motion.div
          key="main-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ position: "relative", minHeight: "100vh" }}>
            {/* Background glow */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(900px 520px at 70% 15%, rgba(255,77,141,0.18), transparent 55%), radial-gradient(720px 420px at 25% 80%, rgba(255,143,177,0.14), transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 3, sm: 6 } }}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography sx={{ fontWeight: 1000, fontSize: { xs: 26, sm: 40 } }}>
                  One year with you 💞
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.85, maxWidth: 720, lineHeight: 1.7 }}>
                  A little page made with love — photos, notes, and sweet moments.
                </Typography>
              </motion.div>

              <LoveLetter />
              <Collage />
              <GifStrip />

              {/* ✅ Next button at the bottom */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 5, sm: 8 }, pb: 8 }}>
                <Button
                  onClick={() => setShowDatePage(true)}
                  size="large"
                  variant="contained"
                  sx={{
                    px: 6,
                    py: 1.5,
                    borderRadius: 999,
                    fontWeight: 900,
                    textTransform: "none",
                    boxShadow: "0 18px 45px rgba(255,77,141,0.25)",
                  }}
                >
                  Next 💗
                </Button>
              </Box>
            </Container>
          </Box>
        </motion.div>
      ) : (
        <motion.div
          key="date-page"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnniversaryDatePage onBack={() => setShowDatePage(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}