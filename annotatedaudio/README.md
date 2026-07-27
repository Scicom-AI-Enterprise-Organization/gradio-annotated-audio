---
tags: [gradio-custom-component, Audio]
title: gradio_annotated_audio
short_description: A gradio custom component
colorFrom: blue
colorTo: yellow
sdk: gradio
pinned: false
app_file: space.py
---

# `gradio_annotated_audio`
<img alt="Static Badge" src="https://img.shields.io/badge/version%20-%200.0.1%20-%20orange">  

Python library for easily interacting with trained machine learning models

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

## `AnnotatedAudio`

### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
str | Path | tuple[int, np.ndarray] | Callable | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A path, URL, or [sample_rate, numpy array] tuple (sample rate in Hz, audio data as a float or int numpy array) for the default value that AnnotatedAudio component is going to take. If a function is provided, the function will be called each time the app loads to set the initial value of this component.</td>
</tr>

<tr>
<td align="left"><code>sources</code></td>
<td align="left" style="width: 25%;">

```python
list[Literal['upload', 'microphone']] | Literal['upload', 'microphone'] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A list of sources permitted for audio. "upload" creates a box where user can drop an audio file, "microphone" creates a microphone input. The first element in the list will be used as the default source. If None, defaults to ["upload", "microphone"], or ["microphone"] if `streaming` is True.</td>
</tr>

<tr>
<td align="left"><code>type</code></td>
<td align="left" style="width: 25%;">

```python
Literal['numpy', 'filepath']
```

</td>
<td align="left"><code>value = "numpy"</code></td>
<td align="left">The format the audio file is converted to before being passed into the prediction function. "numpy" converts the audio to a tuple consisting of: (int sample rate, numpy.array for the data), "filepath" passes a str path to a temporary file containing the audio.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | I18nData | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">the label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.</td>
</tr>

<tr>
<td align="left"><code>every</code></td>
<td align="left" style="width: 25%;">

```python
Timer | float | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">Continuously calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float that provides the regular interval for the reset Timer.</td>
</tr>

<tr>
<td align="left"><code>inputs</code></td>
<td align="left" style="width: 25%;">

```python
Component | Sequence[Component] | set[Component] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">Components that are used as inputs to calculate `value` if `value` is a function (has no effect otherwise). `value` is recalculated any time the inputs change.</td>
</tr>

<tr>
<td align="left"><code>show_label</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">if True, will display label.</td>
</tr>

<tr>
<td align="left"><code>container</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = True</code></td>
<td align="left">If True, will place the component in a container - providing some extra padding around the border.</td>
</tr>

<tr>
<td align="left"><code>scale</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">Relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.</td>
</tr>

<tr>
<td align="left"><code>min_width</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>value = 160</code></td>
<td align="left">Minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.</td>
</tr>

<tr>
<td align="left"><code>interactive</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">If True, will allow users to upload and edit an audio file. If False, can only be used to play audio. If not provided, this is inferred based on whether the component is used as an input or output.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool | Literal['hidden']
```

</td>
<td align="left"><code>value = True</code></td>
<td align="left">If False, component will be hidden. If "hidden", component will be visually hidden and not take up space in the layout but still exist in the DOM If "hidden", component will be visually hidden and not take up space in the layout but still exist in the DOM.</td>
</tr>

<tr>
<td align="left"><code>streaming</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = False</code></td>
<td align="left">If set to True when used in a `live` interface as an input, will automatically stream webcam feed. When used set as an output, takes audio chunks yield from the backend and combines them into one streaming audio output.</td>
</tr>

<tr>
<td align="left"><code>elem_id</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>elem_classes</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>render</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = True</code></td>
<td align="left">if False, component will not be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.</td>
</tr>

<tr>
<td align="left"><code>key</code></td>
<td align="left" style="width: 25%;">

```python
int | str | tuple[int | str, ...] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">in a gr.render, Components with the same key across re-renders are treated as the same component, not a new component. Properties set in 'preserved_by_key' are not reset across a re-render.</td>
</tr>

<tr>
<td align="left"><code>preserved_by_key</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>value = "value"</code></td>
<td align="left">A list of parameters from this component's constructor. Inside a gr.render() function, if a component is re-rendered with the same key, these (and only these) parameters will be preserved in the UI (if they have been changed by the user or an event listener) instead of re-rendered based on the values provided during constructor.</td>
</tr>

<tr>
<td align="left"><code>format</code></td>
<td align="left" style="width: 25%;">

```python
Literal['wav', 'mp3'] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">the file extension with which to save audio files. Either 'wav' or 'mp3'. wav files are lossless but will tend to be larger files. mp3 files tend to be smaller. This parameter applies both when this component is used as an input (and `type` is "filepath") to determine which file format to convert user-provided audio to, and when this component is used as an output to determine the format of audio returned to the user. If None, no file format conversion is done and the audio is kept as is. In the case where output audio is returned from the prediction function as numpy array and no `format` is provided, it will be returned as a "wav" file.</td>
</tr>

<tr>
<td align="left"><code>autoplay</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = False</code></td>
<td align="left">Whether to automatically play the audio when the component is used as an output. Note: browsers will not autoplay audio files if the user has not interacted with the page yet.</td>
</tr>

<tr>
<td align="left"><code>editable</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = True</code></td>
<td align="left">If True, allows users to manipulate the audio file if the component is interactive. Defaults to True.</td>
</tr>

<tr>
<td align="left"><code>buttons</code></td>
<td align="left" style="width: 25%;">

```python
list[Literal['download', 'share'] | Button] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A list of buttons to show in the top right corner of the component. Valid options are "download", "share", or a gr.Button() instance. The "download" button allows the user to save the audio to their device. The "share" button allows the user to share the audio via Hugging Face Spaces Discussions. Custom gr.Button() instances will appear in the toolbar with their configured icon and/or label, and clicking them will trigger any .click() events registered on the button. By default, only the "download" and "share" buttons are shown.</td>
</tr>

<tr>
<td align="left"><code>waveform_options</code></td>
<td align="left" style="width: 25%;">

```python
WaveformOptions | dict | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A dictionary of options for the waveform display. Options include: waveform_color (str), waveform_progress_color (str), skip_length (int), trim_region_color (str). Default is None, which uses the default values for these options. [See `gr.WaveformOptions` docs](#waveform-options).</td>
</tr>

<tr>
<td align="left"><code>loop</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = False</code></td>
<td align="left">If True, the audio will loop when it reaches the end and continue playing from the beginning.</td>
</tr>

<tr>
<td align="left"><code>recording</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>value = False</code></td>
<td align="left">If True, the audio component will be set to record audio from the microphone if the source is set to "microphone". Defaults to False.</td>
</tr>

<tr>
<td align="left"><code>subtitles</code></td>
<td align="left" style="width: 25%;">

```python
str | Path | list[dict[str, Any]] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A subtitle file (srt, vtt, or json) for the audio, or a list of subtitle dictionaries in the format [{"text": str, "timestamp": [start, end]}] where timestamps are in seconds. JSON files should contain an array of subtitle objects.</td>
</tr>

<tr>
<td align="left"><code>playback_position</code></td>
<td align="left" style="width: 25%;">

```python
float
```

</td>
<td align="left"><code>value = 0</code></td>
<td align="left">The starting playback position in seconds. This value is also updated as the audio plays, reflecting the current playback position.</td>
</tr>

<tr>
<td align="left"><code>categories</code></td>
<td align="left" style="width: 25%;">

```python
list[dict[str, Any]] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A list of dicts declaring the annotation lanes shown under the waveform, e.g. [{"key": "vad", "label": "Voice Activity", "color": "#3b82f6"}]. Each dict needs a unique "key"; "label" and "color" are optional (an unset color is auto-assigned from a default palette). Lanes render in the order given. If None, no category lanes are shown.</td>
</tr>

<tr>
<td align="left"><code>annotations</code></td>
<td align="left" style="width: 25%;">

```python
list[dict[str, Any]] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A list of dicts, each referencing a `categories` entry by its "category" key and marking either a point in time or a time range on that category's lane. Point annotations look like {"category": "turn", "kind": "point", "time": 4.2, "label": "End of turn"}; range annotations look like {"category": "hate_speech", "kind": "range", "start": 1.0, "end": 3.5, "label": "severity: high"}. "label" is optional.</td>
</tr>

<tr>
<td align="left"><code>transcript</code></td>
<td align="left" style="width: 25%;">

```python
list[dict[str, Any]] | None
```

</td>
<td align="left"><code>value = None</code></td>
<td align="left">A list of dicts, each a transcript segment: {"start": float, "end": float, "text": str, "speaker": str (optional)}. Rendered as a synced, seekable list below the waveform; segments with "speaker" also populate an auto-colored speaker lane.</td>
</tr>
</tbody></table>


### Events

| name | description |
|:-----|:------------|
| `stream` | This listener is triggered when the user streams the AnnotatedAudio. |
| `change` | Triggered when the value of the AnnotatedAudio changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input. |
| `clear` | This listener is triggered when the user clears the AnnotatedAudio using the clear button for the component. |
| `play` | This listener is triggered when the user plays the media in the AnnotatedAudio. |
| `pause` | This listener is triggered when the media in the AnnotatedAudio stops for any reason. |
| `stop` | This listener is triggered when the user reaches the end of the media playing in the AnnotatedAudio. |
| `start_recording` | This listener is triggered when the user starts recording with the AnnotatedAudio. |
| `pause_recording` | This listener is triggered when the user pauses recording with the AnnotatedAudio. |
| `stop_recording` | This listener is triggered when the user stops recording with the AnnotatedAudio. |
| `upload` | This listener is triggered when the user uploads a file into the AnnotatedAudio. |
| `input` | This listener is triggered when the user changes the value of the AnnotatedAudio. |



### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As output:** Is passed, passes audio as one of these formats (depending on `type`):.
- **As input:** Should return, expects audio data in any of these formats:.

 ```python
 def predict(
     value: str| tuple[int,numpy.ndarray]| None
 ) -> str| pathlib.Path| bytes| tuple[int,numpy.ndarray]| None:
     return value
 ```
 
