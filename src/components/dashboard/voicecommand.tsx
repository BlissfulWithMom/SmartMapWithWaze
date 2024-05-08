"use client";

import React, { useState } from "react";

import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
// import { SpeechRecognition } from "speech-recognition";
import { Button } from "@/components/ui/button";

function VoiceControlledButton() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  // const [recognition, setRecognition] = useState(null);

  // useEffect(() => {
  //   // Initialize speech recognition
  //   if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
  //     const SpeechRecognition =
  //       window.webkitSpeechRecognition as typeof SpeechRecognition;
  //     const rec = new SpeechRecognition();
  //     rec.continuous = true;
  //     rec.interimResults = true;
  //     setRecognition(rec);
  //   }
  // }, []);

  // const handleVoiceCommand = (event) => {
  //   const transcript =
  //     event.results[event.results.length - 1][0].transcript.toLowerCase();
  //   if (transcript.includes("turn on")) {
  //     setIsButtonActive(true);
  //   } else if (transcript.includes("turn off")) {
  //     setIsButtonActive(false);
  //   }
  // };

  // useEffect(() => {
  //   if (recognition) {
  //     recognition.addEventListener("result", handleVoiceCommand);
  //     recognition.start();
  //   }

  //   return () => {
  //     if (recognition) {
  //       recognition.removeEventListener("result", handleVoiceCommand);
  //       recognition.stop();
  //     }
  //   };
  // }, [recognition]);

  return (
    <div>
      <Button
        className={`mx-8 h-[60px] w-[60px] cursor-pointer rounded-full border-none bg-transparent text-black hover:bg-transparent ${
          isButtonActive
            ? "shadow-[0_0_15px_0_rgba(0,255,0)]"
            : "shadow-[0_0_15px_0_rgba(255,255,255)]"
        }`}
        onClick={() => setIsButtonActive(!isButtonActive)}
        style={{
          backgroundImage: 'url("/images/dashboard/voice.jpg")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {isButtonActive ? (
          <div className="flex items-center justify-center">
            <FaMicrophone className="text-lg" />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <FaMicrophoneSlash className="text-lg" />
          </div>
        )}
      </Button>

      {/* <p>
        {isButtonActive
          ? 'The button is currently active. Say "turn off" to deactivate it.'
          : 'The button is currently inactive. Say "turn on" to activate it.'}
      </p> */}
    </div>
  );
}

export default VoiceControlledButton;
