import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <Box sx={{ maxWidth: 980, mx: "auto", mt: { xs: 5, sm: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <Paper
          sx={{
            p: { xs: 2.2, sm: 4 },
            borderRadius: 4,
            bgcolor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
          }}
        >
          <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, sm: 28 } }}>
            To my lovey 💗
          </Typography>

          <Typography sx={{ mt: 1.6, opacity: 0.9, lineHeight: 1.8 }}>
            One year.

Twelve months.
365 days.
Countless calls, laughs, memories, prayers, and moments that slowly built our story.

And it still amazes me how everything began.

We started as teammates in a call center just two people trying to survive shifts, metrics, and long hours. I didn’t know then that the girl sitting there, wearing her headset and doing her job, would one day become the most important person in my life.

From simply knowing you…
To admiring you quietly…
To finding the courage to pursue you…

It wasn’t easy.

You weren’t easy. 😌
(And honestly? I’m glad you weren’t.)

Because something valuable is never easy to win. And every effort, every prayer, every moment of waiting was worth it because it led me to you.

If I could go back to the very first day we met, I would still choose to sit beside you.
I would still choose to talk to you.
I would still choose to pursue you.

And if I had to choose you again today?
Tomorrow?
In every season of life?

I will always choose you.
            <br /><br />
            I know I’m not always the most showy person.
I’m not the type who posts every second or writes long captions every day. Sometimes I struggle to express everything I feel in words.

But please believe me when I say this
I love you deeply.
I love you intentionally.
I love you in the quiet ways.
I love you in my efforts.
I love you in my sacrifices.
I love you in my plans for the future.

My love for you may not always be loud but it is steady, real, and growing every day.

You are not just my girlfriend.
You are my answered prayer.
My peace after a long day.
My comfort in silence.
My motivation to become better.

Because of you, I want to strive harder.
I want to grow.
I want to build something stable and meaningful.

I want to provide.
I want to protect.
I want to give you a life where you feel secure, loved, and cherished every single day.

You mean the whole world to me.

And yes… I really, really, really love you. (In case you needed to hear it again 😌💕)
            <br /><br />
            Sometimes I think about how perfectly everything aligned the timing, the workplace, the conversations, the chances we took. And I can’t help but believe that this wasn’t just coincidence.

This was God.

“He has made everything beautiful in its time.” (Ecclesiastes 3:11)

I truly believe that God wrote our story long before we even knew each other. He allowed our paths to cross at the right moment, in the right place, for a reason. Out of all the teams, out of all the people, out of all the possible stories, He chose ours.

And I thank Him every day for you.
            <br /><br />
            Thank you for loving me.
Thank you for choosing me.
Thank you for being patient with me.
Thank you for laughing at my jokes (even the corny ones).
Thank you for staying.

I don’t know what the future holds, but I know who I want beside me while facing it.

As long as you’ll have me, I want to walk with you through victories, through challenges, through ordinary days and extraordinary ones.

Until the end of time.
Until our hair turns gray.
Until we’re old and still teasing each other about who fell in love first. 😌

Happy 1st anniversary, my love. 🤍
Here’s to more memories, more growth, more answered prayers and more choosing each other every single day.

Forever yours. 💕
            <br /><br />
            I pray we keep choosing each other every day. I love you more than words can hold.
          </Typography>

          <Typography sx={{ mt: 2.2, fontWeight: 800, opacity: 0.9 }}>
            — Your Babujing 🐻
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}