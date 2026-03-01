import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const gifs = [
  "/src/assets/gifs/1.gif",
  "/src/assets/gifs/2.gif",
  "/src/assets/gifs/3.gif",
  "/src/assets/gifs/4.gif",
  "/src/assets/gifs/5.gif",
  "/src/assets/gifs/6.gif",
  "/src/assets/gifs/7.gif",
  "/src/assets/gifs/8.gif",
  "/src/assets/gifs/9.gif",
];

export default function GifStrip() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: { xs: 5, sm: 9 }, mb: { xs: 6, sm: 10 } }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, sm: 30 }, mb: 2 }}>
          Gifs for you ....
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {gifs.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <Paper
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
                bgcolor: "rgba(255,255,255,0.04)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`gif ${i + 1}`}
                sx={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              />
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}