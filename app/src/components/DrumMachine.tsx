import React, { useEffect, useRef, useState } from "react";
import "./DrumMachine.css";

const DrumMachine: React.FC = () => {
  const [display, setDisplay] = useState<string>("");

  const qAudio = useRef<HTMLAudioElement>(null);
  const wAudio = useRef<HTMLAudioElement>(null);
  const eAudio = useRef<HTMLAudioElement>(null);
  const aAudio = useRef<HTMLAudioElement>(null);
  const sAudio = useRef<HTMLAudioElement>(null);
  const dAudio = useRef<HTMLAudioElement>(null);
  const zAudio = useRef<HTMLAudioElement>(null);
  const xAudio = useRef<HTMLAudioElement>(null);
  const cAudio = useRef<HTMLAudioElement>(null);

  const handleDrumPadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const drumPad = e.target as HTMLButtonElement;
    const audio = drumPad.querySelector("audio") as HTMLAudioElement;
    switch (audio.id) {
      case "Q":
        qAudio.current?.play();
        setDisplay("Q");
        break;
      case "W":
        wAudio.current?.play();
        setDisplay("W");
        break;
      case "E":
        eAudio.current?.play();
        setDisplay("E");
        break;
      case "A":
        aAudio.current?.play();
        setDisplay("A");
        break;
      case "S":
        sAudio.current?.play();
        setDisplay("S");
        break;
      case "D":
        dAudio.current?.play();
        setDisplay("D");
        break;
      case "Z":
        zAudio.current?.play();
        setDisplay("Z");
        break;
      case "X":
        xAudio.current?.play();
        setDisplay("X");
        break;
      case "C":
        cAudio.current?.play();
        setDisplay("C");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const drumPad = document.getElementById(e.key.toUpperCase());
      if (drumPad) {
        drumPad.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display" className="card">
        {display}
      </div>
      <div className="center-container">
        <div className="row">
          <button className="drum-pad" id="Q" onClick={handleDrumPadClick}>
            <audio src="Q.mp3" className="clip" id="Q" ref={qAudio} /> Q
          </button>
          <button className="drum-pad" id="W" onClick={handleDrumPadClick}>
            <audio src="W.mp3" className="clip" id="W" ref={wAudio} /> W
          </button>
          <button className="drum-pad" id="E" onClick={handleDrumPadClick}>
            <audio src="E.mp3" className="clip" id="E" ref={eAudio} /> E
          </button>
        </div>
        <div className="row">
          <button className="drum-pad" id="A" onClick={handleDrumPadClick}>
            <audio src="A.mp3" className="clip" id="A" ref={aAudio} /> A
          </button>
          <button className="drum-pad" id="S" onClick={handleDrumPadClick}>
            <audio src="S.mp3" className="clip" id="S" ref={sAudio} /> S
          </button>
          <button className="drum-pad" id="D" onClick={handleDrumPadClick}>
            <audio src="D.mp3" className="clip" id="D" ref={dAudio} /> D
          </button>
        </div>
        <div className="row">
          <button className="drum-pad" id="Z" onClick={handleDrumPadClick}>
            <audio src="Z.mp3" className="clip" id="Z" ref={zAudio} /> Z
          </button>
          <button className="drum-pad" id="X" onClick={handleDrumPadClick}>
            <audio src="X.mp3" className="clip" id="X" ref={xAudio} /> X
          </button>
          <button className="drum-pad" id="C" onClick={handleDrumPadClick}>
            <audio src="C.mp3" className="clip" id="C" ref={cAudio} /> C
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
