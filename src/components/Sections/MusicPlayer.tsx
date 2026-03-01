import { Box, IconButton, Slider, Tooltip, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  enabled: boolean; // set true after "Enter"
};

export default function MusicPlayer({ enabled }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(0.35);

  const src = useMemo(() => "/src/assets/music/song.mp3", []);

  useEffect(() => {
    if (!enabled) return;

    // prepare audio instance only after user has entered (user interaction already happened)
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = vol;
    } else {
      audioRef.current.volume = vol;
    }

    return () => {
      // keep audio (do not destroy) unless you want to stop on unmount
    };
  }, [enabled, src, vol]);

  const toggle = async () => {
    if (!enabled || !audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      // autoplay restrictions or file missing
      setPlaying(false);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.2,
        py: 0.9,
        borderRadius: 999,
        bgcolor: "rgba(20,18,24,0.55)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
      }}
    >
      <Tooltip title={playing ? "Pause" : "Play"}>
        <IconButton onClick={toggle} size="small">
          {playing ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
        </IconButton>
      </Tooltip>

      <VolumeUpRoundedIcon sx={{ opacity: 0.85 }} fontSize="small" />

      <Slider
        value={vol}
        onChange={(_, v) => setVol(v as number)}
        min={0}
        max={1}
        step={0.01}
        sx={{ width: 120 }}
      />

      <Typography sx={{ fontSize: 12, opacity: 0.7, pr: 0.5 }}>
        our song
      </Typography>
    </Box>
  );
}