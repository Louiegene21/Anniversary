import { Box, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Photo = {
  src: string;
  note: string;
};

const photos: Photo[] = [
  { src: "/src/assets/images/1.jpg", note: "My favorite smile 💗" },
  { src: "/src/assets/images/2.jpg", note: "Us >>> everything" },
  { src: "/src/assets/images/3.jpg", note: "Safe place 🫶" },
  { src: "/src/assets/images/4.jpg", note: "More days like this" },
  { src: "/src/assets/images/5.jpg", note: "My answered prayer" },
  { src: "/src/assets/images/6.jpg", note: "Forever with you" },
  { src: "/src/assets/images/7.jpg", note: "More food trip!" },
  { src: "/src/assets/images/8.jpg", note: "Our first picture" },
  { src: "/src/assets/images/9.jpg", note: "Shot puno!" },
  { src: "/src/assets/images/10.jpg", note: "Being paired with you" },
  { src: "/src/assets/images/11.jpg", note: "Getting to know you more" },
  { src: "/src/assets/images/12.jpg", note: "Embracing the moment" },
  { src: "/src/assets/images/13.jpg", note: "I love You!" },
];

export default function Collage() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: { xs: 5, sm: 9 } }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, sm: 30 }, mb: 2 }}>
          Our memories 📸
        </Typography>
      </motion.div>

      <Grid container spacing={2}>
        {photos.map((p, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.03 }}
              whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 0.3 : -0.3 }}
            >
              <Paper
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.10)",
                  bgcolor: "rgba(255,255,255,0.04)",
                  boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
                }}
              >
                <Box
                  component="img"
                  src={p.src}
                  alt={`Memory ${idx + 1}`}
                  sx={{
                    width: "100%",
                    height: 310,
                    objectFit: "cover",
                    display: "block",
                    filter: "contrast(1.05) saturate(1.08)",
                  }}
                />

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
    bottom: 16,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    px: 2,
  }}
>
  <Typography sx={{ fontWeight: 800, fontSize: 14 }}>
    {p.note}
  </Typography>
</Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}