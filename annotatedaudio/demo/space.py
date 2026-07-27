
import gradio as gr
from app import demo as app
import os

_docs = {'AnnotatedAudio': {'description': 'Creates an audio component that can be used to upload/record audio (as an input) or display audio (as an output).', 'members': {'__init__': {'value': {'type': 'str | Path | tuple[int, np.ndarray] | Callable | None', 'default': 'value = None', 'description': 'A path, URL, or [sample_rate, numpy array] tuple (sample rate in Hz, audio data as a float or int numpy array) for the default value that AnnotatedAudio component is going to take. If a function is provided, the function will be called each time the app loads to set the initial value of this component.'}, 'sources': {'type': "list[Literal['upload', 'microphone']] | Literal['upload', 'microphone'] | None", 'default': 'value = None', 'description': 'A list of sources permitted for audio. "upload" creates a box where user can drop an audio file, "microphone" creates a microphone input. The first element in the list will be used as the default source. If None, defaults to ["upload", "microphone"], or ["microphone"] if `streaming` is True.'}, 'type': {'type': "Literal['numpy', 'filepath']", 'default': 'value = "numpy"', 'description': 'The format the audio file is converted to before being passed into the prediction function. "numpy" converts the audio to a tuple consisting of: (int sample rate, numpy.array for the data), "filepath" passes a str path to a temporary file containing the audio.'}, 'label': {'type': 'str | I18nData | None', 'default': 'value = None', 'description': 'the label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.'}, 'every': {'type': 'Timer | float | None', 'default': 'value = None', 'description': 'Continuously calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float that provides the regular interval for the reset Timer.'}, 'inputs': {'type': 'Component | Sequence[Component] | set[Component] | None', 'default': 'value = None', 'description': 'Components that are used as inputs to calculate `value` if `value` is a function (has no effect otherwise). `value` is recalculated any time the inputs change.'}, 'show_label': {'type': 'bool | None', 'default': 'value = None', 'description': 'if True, will display label.'}, 'container': {'type': 'bool', 'default': 'value = True', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'type': 'int | None', 'default': 'value = None', 'description': 'Relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.'}, 'min_width': {'type': 'int', 'default': 'value = 160', 'description': 'Minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'interactive': {'type': 'bool | None', 'default': 'value = None', 'description': 'If True, will allow users to upload and edit an audio file. If False, can only be used to play audio. If not provided, this is inferred based on whether the component is used as an input or output.'}, 'visible': {'type': "bool | Literal['hidden']", 'default': 'value = True', 'description': 'If False, component will be hidden. If "hidden", component will be visually hidden and not take up space in the layout but still exist in the DOM If "hidden", component will be visually hidden and not take up space in the layout but still exist in the DOM.'}, 'streaming': {'type': 'bool', 'default': 'value = False', 'description': 'If set to True when used in a `live` interface as an input, will automatically stream webcam feed. When used set as an output, takes audio chunks yield from the backend and combines them into one streaming audio output.'}, 'elem_id': {'type': 'str | None', 'default': 'value = None', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'value = None', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'render': {'type': 'bool', 'default': 'value = True', 'description': 'if False, component will not be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.'}, 'key': {'type': 'int | str | tuple[int | str, ...] | None', 'default': 'value = None', 'description': "in a gr.render, Components with the same key across re-renders are treated as the same component, not a new component. Properties set in 'preserved_by_key' are not reset across a re-render."}, 'preserved_by_key': {'type': 'list[str] | str | None', 'default': 'value = "value"', 'description': "A list of parameters from this component's constructor. Inside a gr.render() function, if a component is re-rendered with the same key, these (and only these) parameters will be preserved in the UI (if they have been changed by the user or an event listener) instead of re-rendered based on the values provided during constructor."}, 'format': {'type': "Literal['wav', 'mp3'] | None", 'default': 'value = None', 'description': 'the file extension with which to save audio files. Either \'wav\' or \'mp3\'. wav files are lossless but will tend to be larger files. mp3 files tend to be smaller. This parameter applies both when this component is used as an input (and `type` is "filepath") to determine which file format to convert user-provided audio to, and when this component is used as an output to determine the format of audio returned to the user. If None, no file format conversion is done and the audio is kept as is. In the case where output audio is returned from the prediction function as numpy array and no `format` is provided, it will be returned as a "wav" file.'}, 'autoplay': {'type': 'bool', 'default': 'value = False', 'description': 'Whether to automatically play the audio when the component is used as an output. Note: browsers will not autoplay audio files if the user has not interacted with the page yet.'}, 'editable': {'type': 'bool', 'default': 'value = True', 'description': 'If True, allows users to manipulate the audio file if the component is interactive. Defaults to True.'}, 'buttons': {'type': "list[Literal['download', 'share'] | Button] | None", 'default': 'value = None', 'description': 'A list of buttons to show in the top right corner of the component. Valid options are "download", "share", or a gr.Button() instance. The "download" button allows the user to save the audio to their device. The "share" button allows the user to share the audio via Hugging Face Spaces Discussions. Custom gr.Button() instances will appear in the toolbar with their configured icon and/or label, and clicking them will trigger any .click() events registered on the button. By default, only the "download" and "share" buttons are shown.'}, 'waveform_options': {'type': 'WaveformOptions | dict | None', 'default': 'value = None', 'description': 'A dictionary of options for the waveform display. Options include: waveform_color (str), waveform_progress_color (str), skip_length (int), trim_region_color (str). Default is None, which uses the default values for these options. [See `gr.WaveformOptions` docs](#waveform-options).'}, 'loop': {'type': 'bool', 'default': 'value = False', 'description': 'If True, the audio will loop when it reaches the end and continue playing from the beginning.'}, 'recording': {'type': 'bool', 'default': 'value = False', 'description': 'If True, the audio component will be set to record audio from the microphone if the source is set to "microphone". Defaults to False.'}, 'subtitles': {'type': 'str | Path | list[dict[str, Any]] | None', 'default': 'value = None', 'description': 'A subtitle file (srt, vtt, or json) for the audio, or a list of subtitle dictionaries in the format [{"text": str, "timestamp": [start, end]}] where timestamps are in seconds. JSON files should contain an array of subtitle objects.'}, 'playback_position': {'type': 'float', 'default': 'value = 0', 'description': 'The starting playback position in seconds. This value is also updated as the audio plays, reflecting the current playback position.'}, 'categories': {'type': 'list[dict[str, Any]] | None', 'default': 'value = None', 'description': 'A list of dicts declaring the annotation lanes shown under the waveform, e.g. [{"key": "vad", "label": "Voice Activity", "color": "#3b82f6"}]. Each dict needs a unique "key"; "label" and "color" are optional (an unset color is auto-assigned from a default palette). Lanes render in the order given. If None, no category lanes are shown.'}, 'annotations': {'type': 'list[dict[str, Any]] | None', 'default': 'value = None', 'description': 'A list of dicts, each referencing a `categories` entry by its "category" key and marking either a point in time or a time range on that category\'s lane. Point annotations look like {"category": "turn", "kind": "point", "time": 4.2, "label": "End of turn"}; range annotations look like {"category": "hate_speech", "kind": "range", "start": 1.0, "end": 3.5, "label": "severity: high"}. "label" is optional.'}, 'transcript': {'type': 'list[dict[str, Any]] | None', 'default': 'value = None', 'description': 'A list of dicts, each a transcript segment: {"start": float, "end": float, "text": str, "speaker": str (optional)}. Rendered as a synced, seekable list below the waveform; segments with "speaker" also populate an auto-colored speaker lane.'}}, 'postprocess': {'value': {'type': 'str| pathlib.Path| bytes| tuple[int,numpy.ndarray]| None', 'description': 'Expects audio data in any of these formats:'}}, 'preprocess': {'return': {'type': 'str| tuple[int,numpy.ndarray]| None', 'description': 'Passes audio as one of these formats (depending on `type`):'}, 'value': None}}, 'events': {'stream': {'type': None, 'default': None, 'description': 'This listener is triggered when the user streams the AnnotatedAudio.'}, 'change': {'type': None, 'default': None, 'description': 'Triggered when the value of the AnnotatedAudio changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input.'}, 'clear': {'type': None, 'default': None, 'description': 'This listener is triggered when the user clears the AnnotatedAudio using the clear button for the component.'}, 'play': {'type': None, 'default': None, 'description': 'This listener is triggered when the user plays the media in the AnnotatedAudio.'}, 'pause': {'type': None, 'default': None, 'description': 'This listener is triggered when the media in the AnnotatedAudio stops for any reason.'}, 'stop': {'type': None, 'default': None, 'description': 'This listener is triggered when the user reaches the end of the media playing in the AnnotatedAudio.'}, 'start_recording': {'type': None, 'default': None, 'description': 'This listener is triggered when the user starts recording with the AnnotatedAudio.'}, 'pause_recording': {'type': None, 'default': None, 'description': 'This listener is triggered when the user pauses recording with the AnnotatedAudio.'}, 'stop_recording': {'type': None, 'default': None, 'description': 'This listener is triggered when the user stops recording with the AnnotatedAudio.'}, 'upload': {'type': None, 'default': None, 'description': 'This listener is triggered when the user uploads a file into the AnnotatedAudio.'}, 'input': {'type': None, 'default': None, 'description': 'This listener is triggered when the user changes the value of the AnnotatedAudio.'}}}, '__meta__': {'additional_interfaces': {}, 'user_fn_refs': {'AnnotatedAudio': []}}}

abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_annotated_audio`

<div style="display: flex; gap: 7px;">
<img alt="Static Badge" src="https://img.shields.io/badge/version%20-%200.0.1%20-%20orange">  
</div>

Python library for easily interacting with trained machine learning models
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_annotated_audio
```

## Usage

```python
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
        interactive=False,
    )


if __name__ == "__main__":
    demo.launch()

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `AnnotatedAudio`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["AnnotatedAudio"]["members"]["__init__"], linkify=[])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["AnnotatedAudio"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As input:** Is passed, passes audio as one of these formats (depending on `type`):.
- **As output:** Should return, expects audio data in any of these formats:.

 ```python
def predict(
    value: str| tuple[int,numpy.ndarray]| None
) -> str| pathlib.Path| bytes| tuple[int,numpy.ndarray]| None:
    return value
```
""", elem_classes=["md-custom", "AnnotatedAudio-user-fn"], header_links=True)




    demo.load(None, js=r"""function() {
    const refs = {};
    const user_fn_refs = {
          AnnotatedAudio: [], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })

        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
