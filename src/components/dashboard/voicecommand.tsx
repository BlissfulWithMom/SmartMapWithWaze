"use client";

import React, { useState, useEffect } from "react";

import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

function VoiceControlledButton() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      setRecognition(rec);
    }
  }, []);

  const handleVoiceCommand = (event) => {
    const transcript =
      event.results[event.results.length - 1][0].transcript.toLowerCase();
    if (transcript.includes("turn on")) {
      setIsButtonActive(true);
    } else if (transcript.includes("turn off")) {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    if (recognition) {
      recognition.addEventListener("result", handleVoiceCommand);
      recognition.start();
    }

    return () => {
      if (recognition) {
        recognition.removeEventListener("result", handleVoiceCommand);
        recognition.stop();
      }
    };
  }, [recognition]);

  return (
    <div>
      <button
        className={`mx-8 h-[60px] w-[120px] cursor-pointer rounded-xl border-none text-white ${
          isButtonActive
            ? "bg-[#008000] shadow-[0_0_15px_0_rgba(0,0,0)]"
            : "bg-[#ff2019] shadow-[0_0_15px_0_rgba(255,255,255)]"
        }`}
        onClick={() => setIsButtonActive(!isButtonActive)}
      >
        {isButtonActive ? (
          <div className="flex items-center justify-center">
            <FaMicrophone className="text-lg" />
            <span className="ml-2">Turn Off</span>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <FaMicrophoneSlash className="text-lg" />
            <span className="ml-2">Turn On</span>
          </div>
        )}
      </button>

      {/* <p>
        {isButtonActive
          ? 'The button is currently active. Say "turn off" to deactivate it.'
          : 'The button is currently inactive. Say "turn on" to activate it.'}
      </p> */}
    </div>
  );
}

export default VoiceControlledButton;
