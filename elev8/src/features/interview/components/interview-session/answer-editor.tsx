import { useState, useEffect } from "react";
import { Mic, Square, CornerDownLeft, Type, Trash2 } from "lucide-react";
import { useVoiceInput } from "../../hooks/use-voice-input";

interface AnswerEditorProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function AnswerEditor({ value, onChange, onBlur }: AnswerEditorProps) {
  const [localValue, setLocalValue] = useState(value);
  const { isSupported, isRecording, transcript, startRecording, stopRecording, clearTranscript } = useVoiceInput();

  // Sync prop to local state
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
    onChange(e.target.value);
  };

  const handleInsertTranscript = () => {
    if (transcript.trim().length > 0) {
      const newValue = localValue.trim().length > 0 
        ? `${localValue}\n${transcript}` 
        : transcript;
      setLocalValue(newValue);
      onChange(newValue);
      clearTranscript();
    }
  };

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm overflow-hidden flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-border-subtle bg-surface-muted">
        <div className="flex items-center gap-2 text-sm font-display font-semibold text-text-primary">
          <Type className="w-4 h-4 text-text-primary" />
          <span>Your Answer</span>
        </div>
        
        {isSupported ? (
          <div className="flex items-center gap-2">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-display font-bold text-white bg-text-primary hover:bg-black/85 transition-all active:scale-[0.98]"
                title="Start Voice Recording"
              >
                <Mic className="w-4 h-4" />
                <span className="hidden sm:inline">Record Answer</span>
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-display font-bold text-white bg-rose-600 hover:bg-rose-750 transition-colors animate-pulse"
                title="Stop Recording"
              >
                <Square className="w-4 h-4" />
                <span className="hidden sm:inline">Stop Recording</span>
              </button>
            )}
          </div>
        ) : (
          <div className="text-xs text-text-secondary font-display font-semibold px-2 py-1 bg-surface-muted border border-border-subtle rounded-md">
            Voice input not supported in this browser
          </div>
        )}
      </div>

      {/* Transcript Preview Area */}
      {isSupported && (isRecording || transcript.length > 0) && (
        <div className="p-4 bg-dashboard-metricHighlight/20 border-b border-dashboard-metricHighlight/40">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-display font-bold text-text-primary uppercase tracking-wider flex items-center">
              {isRecording ? (
                <><Mic className="w-3 h-3 mr-1 animate-pulse" /> Listening...</>
              ) : (
                "Voice Transcript"
              )}
            </span>
            
            {!isRecording && transcript.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={clearTranscript}
                  className="p-1 text-text-secondary hover:text-rose-600 transition-colors"
                  title="Discard transcript"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleInsertTranscript}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-display font-semibold bg-text-primary text-white rounded hover:bg-black/85 transition-colors"
                >
                  <CornerDownLeft className="w-3 h-3 text-dashboard-metricHighlight" />
                  Insert
                </button>
              </div>
            )}
          </div>
          <p className="text-text-primary font-sans text-sm italic min-h-[1.5rem] leading-relaxed">
            {transcript || (isRecording ? "Speak clearly into your microphone..." : "")}
          </p>
        </div>
      )}

      {/* Main Text Area */}
      <textarea
        value={localValue}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder="Type your answer here..."
        className="w-full min-h-[300px] p-4 bg-transparent border-0 focus:ring-0 text-text-primary placeholder-text-muted resize-y outline-none font-sans"
      />
    </div>
  );
}
