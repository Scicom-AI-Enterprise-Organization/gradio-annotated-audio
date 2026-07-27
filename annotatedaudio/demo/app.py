import numpy as np

import gradio as gr
from gradio_annotated_audio import AnnotatedAudio

SAMPLE_RATE = 16000
DURATION = 12.0


def make_audio():
    t = np.linspace(0, DURATION, int(SAMPLE_RATE * DURATION), endpoint=False)
    # Two alternating "speaker" tones so the audio has audible structure.
    freqs = np.where((t % 4) < 2, 220.0, 330.0)
    data = 0.2 * np.sin(2 * np.pi * freqs * t)
    return SAMPLE_RATE, (data * 32767).astype(np.int16)


categories = [
    {"key": "turn", "label": "Turn boundary", "color": "#f59e0b"},
    {"key": "vad", "label": "Voice Activity", "color": "#3b82f6"},
    {"key": "hate_speech", "label": "Hate Speech"},
]

annotations = [
    {"category": "turn", "kind": "point", "time": 2.0, "label": "End of turn 1"},
    {"category": "turn", "kind": "point", "time": 6.0, "label": "End of turn 2"},
    {"category": "turn", "kind": "point", "time": 10.0, "label": "End of turn 3"},
    {"category": "vad", "kind": "range", "start": 0.2, "end": 1.9, "label": "speech"},
    {"category": "vad", "kind": "range", "start": 2.3, "end": 5.8, "label": "speech"},
    {"category": "vad", "kind": "range", "start": 6.2, "end": 9.7, "label": "speech"},
    {
        "category": "hate_speech",
        "kind": "range",
        "start": 6.2,
        "end": 7.5,
        "label": "severity: high (0.91)",
    },
]

transcript = [
    {"start": 0.2, "end": 1.9, "text": "Hey, how's the deployment going?", "speaker": "Speaker A"},
    {"start": 2.3, "end": 3.9, "text": "It's mostly fine, just one flaky test.", "speaker": "Speaker B"},
    {"start": 4.0, "end": 5.8, "text": "Okay, let me know if you need a hand.", "speaker": "Speaker A"},
    {"start": 6.2, "end": 7.5, "text": "This is the flagged segment.", "speaker": "Speaker B"},
    {"start": 7.6, "end": 9.7, "text": "Got it, I'll take a look after lunch.", "speaker": "Speaker A"},
    {"start": 10.1, "end": 11.8, "text": "Sounds good, talk soon.", "speaker": "Speaker B"},
]

with gr.Blocks() as demo:
    gr.Markdown("## AnnotatedAudio demo — speaker lane, category lanes, synced transcript")
    AnnotatedAudio(
        value=make_audio(),
        categories=categories,
        annotations=annotations,
        transcript=transcript,
        label="Conversation",
        interactive=True,
        sources=["upload", "microphone"],
    )


if __name__ == "__main__":
    demo.launch()
