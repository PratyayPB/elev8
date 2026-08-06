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
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Type className="w-4 h-4" />
          <span>Your Answer</span>
        </div>
        
        {isSupported ? (
          <div className="flex items-center gap-2">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 transition-colors"
                title="Start Voice Recording"
              >
                <Mic className="w-4 h-4" />
                <span className="hidden sm:inline">Record Answer</span>
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors animate-pulse"
                title="Stop Recording"
              >
                <Square className="w-4 h-4" />
                <span className="hidden sm:inline">Stop Recording</span>
              </button>
            )}
          </div>
        ) : (
          <div className="text-xs text-amber-600 dark:text-amber-400 font-medium px-2 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-md">
            Voice input not supported in this browser
          </div>
        )}
      </div>

      {/* Transcript Preview Area */}
      {isSupported && (isRecording || transcript.length > 0) && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border-b border-blue-100 dark:border-blue-900/30">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center">
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
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  title="Discard transcript"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleInsertTranscript}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <CornerDownLeft className="w-3 h-3" />
                  Insert
                </button>
              </div>
            )}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm italic min-h-[1.5rem]">
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
        className="w-full min-h-[300px] p-4 bg-transparent border-0 focus:ring-0 text-gray-900 dark:text-gray-100 resize-y outline-none"
      />
    </div>
  );
}
