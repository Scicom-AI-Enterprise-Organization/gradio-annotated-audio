<script lang="ts">
	import { format_time } from "@gradio/utils";
	import type { TranscriptSegment } from "./types";
	import { find_active_segment_index, speaker_color_map } from "./annotation_utils";

	let {
		transcript = null,
		current_time = 0,
		onseek
	}: {
		transcript?: TranscriptSegment[] | null;
		current_time?: number;
		onseek: (time: number) => void;
	} = $props();

	let speaker_colors = $derived(transcript ? speaker_color_map(transcript) : new Map());
	let active_index = $derived(
		transcript ? find_active_segment_index(transcript, current_time) : -1
	);

	let row_elements: (HTMLButtonElement | null)[] = $state([]);

	$effect(() => {
		if (active_index >= 0 && row_elements[active_index]) {
			row_elements[active_index]?.scrollIntoView({
				block: "nearest",
				behavior: "smooth"
			});
		}
	});
</script>

{#if transcript && transcript.length > 0}
	<div class="transcript-panel" data-testid="transcript-panel">
		{#each transcript as segment, i (i)}
			<button
				type="button"
				class="transcript-row"
				class:active={i === active_index}
				bind:this={row_elements[i]}
				onclick={() => onseek(segment.start)}
			>
				<time class="transcript-time">{format_time(segment.start)}</time>
				{#if segment.speaker}
					<span
						class="transcript-speaker"
						style:color={speaker_colors.get(segment.speaker)}
						style:border-color={speaker_colors.get(segment.speaker)}
					>
						{segment.speaker}
					</span>
				{/if}
				<span class="transcript-text">{segment.text}</span>
			</button>
		{/each}
	</div>
{/if}

<style>
	.transcript-panel {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-height: 240px;
		overflow-y: auto;
		margin-top: var(--size-2);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--radius-sm);
	}

	.transcript-row {
		display: flex;
		align-items: baseline;
		gap: var(--size-2);
		width: 100%;
		text-align: left;
		background: none;
		border: none;
		border-bottom: 1px solid var(--border-color-primary);
		padding: var(--size-1) var(--size-2);
		cursor: pointer;
		font-size: var(--text-sm);
		color: var(--body-text-color);
	}

	.transcript-row:last-child {
		border-bottom: none;
	}

	.transcript-row:hover {
		background: var(--background-fill-secondary);
	}

	.transcript-row.active {
		background: var(--color-accent-soft);
	}

	.transcript-time {
		flex: 0 0 auto;
		color: var(--body-text-color-subdued);
		font-variant-numeric: tabular-nums;
	}

	.transcript-speaker {
		flex: 0 0 auto;
		font-weight: 600;
		border: 1px solid;
		border-radius: var(--radius-sm);
		padding: 0 4px;
		font-size: var(--text-xs);
	}

	.transcript-text {
		flex: 1 1 auto;
	}
</style>
