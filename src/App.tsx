import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Landing from "./components/Landing/Landing";
import MainPage from "./pages/MainPage";
import MusicPlayer from "./components/Sections/MusicPlayer";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", overflowX: "hidden" }}>
      {entered && <MusicPlayer enabled={entered} />}

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            transition={{ duration: 0.6 }}
          >
            <Landing onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <MainPage />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}