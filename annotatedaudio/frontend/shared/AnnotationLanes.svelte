<script lang="ts">
	import type { AnnotationData, CategoryData, TranscriptSegment } from "./types";
	import {
		build_category_lanes,
		build_speaker_lane,
		speaker_color_map,
		type Lane
	} from "./annotation_utils";

	let {
		categories = null,
		annotations = null,
		transcript = null,
		duration = 0,
		current_time = 0,
		onseek
	}: {
		categories?: CategoryData[] | null;
		annotations?: AnnotationData[] | null;
		transcript?: TranscriptSegment[] | null;
		duration?: number;
		current_time?: number;
		onseek: (time: number) => void;
	} = $props();

	let hidden = $state(new Set<string>());

	function toggle(key: string): void {
		const next = new Set(hidden);
		if (next.has(key)) {
			next.delete(key);
		} else {
			next.add(key);
		}
		hidden = next;
	}

	let speaker_lane = $derived(
		transcript && transcript.length > 0 ? build_speaker_lane(transcript) : null
	);
	let speaker_colors = $derived(
		transcript && transcript.length > 0 ? speaker_color_map(transcript) : new Map()
	);
	let category_lanes = $derived(
		categories && categories.length > 0
			? build_category_lanes(categories, annotations || [])
			: []
	);
	let lanes: Lane[] = $derived([
		...(speaker_lane ? [speaker_lane] : []),
		...category_lanes
	]);

	function pct(time: number): number {
		if (!duration || duration <= 0) return 0;
		return Math.min(100, Math.max(0, (time / duration) * 100));
	}
</script>

{#if lanes.length > 0}
	<div class="lanes">
		{#each lanes as lane (lane.key)}
			<div class="lane-row">
				<button
					type="button"
					class="lane-label"
					onclick={() => toggle(lane.key)}
					title={hidden.has(lane.key) ? "Show lane" : "Hide lane"}
				>
					{#if lane.key === "__speaker__"}
						<span class="chip-group">
							{#each [...speaker_colors.entries()] as [, color] (color)}
								<span class="chip" style:background={color}></span>
							{/each}
						</span>
					{:else}
						<span class="chip" style:background={lane.color}></span>
					{/if}
					<span class:dimmed={hidden.has(lane.key)}>{lane.label}</span>
				</button>
				<div class="lane-track" class:lane-hidden={hidden.has(lane.key)}>
					{#each lane.ranges as r, i (i)}
						<div
							class="annotation-range"
							role="button"
							tabindex="0"
							style:left="{pct(r.start)}%"
							style:width="{Math.max(pct(r.end) - pct(r.start), 0.3)}%"
							style:background={(r.color || lane.color) + "55"}
							style:border-left-color={r.color || lane.color}
							onclick={() => onseek(r.start)}
							onkeydown={(e) => e.key === "Enter" && onseek(r.start)}
						>
							{#if r.label}
								<span class="tooltip">{r.label}</span>
							{/if}
						</div>
					{/each}
					{#each lane.points as p, i (i)}
						<div
							class="annotation-point"
							role="button"
							tabindex="0"
							style:left="{pct(p.time)}%"
							style:background={p.color || lane.color}
							onclick={() => onseek(p.time)}
							onkeydown={(e) => e.key === "Enter" && onseek(p.time)}
						>
							{#if p.label}
								<span class="tooltip">{p.label}</span>
							{/if}
						</div>
					{/each}
					<div class="playhead" style:left="{pct(current_time)}%"></div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.lanes {
		display: flex;
		flex-direction: column;
		gap: 2px;
		width: 100%;
		margin-top: var(--size-1);
	}

	.lane-row {
		display: flex;
		align-items: center;
		gap: var(--size-2);
		width: 100%;
	}

	.lane-label {
		display: flex;
		align-items: center;
		gap: 6px;
		flex: 0 0 auto;
		width: 120px;
		min-width: 120px;
		background: none;
		border: none;
		cursor: pointer;
		font-size: var(--text-sm);
		color: var(--body-text-color);
		padding: 2px 4px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.lane-label:hover {
		background: var(--background-fill-secondary);
		border-radius: var(--radius-sm);
	}

	.dimmed {
		opacity: 0.4;
	}

	.chip {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex: 0 0 auto;
	}

	.chip-group {
		display: inline-flex;
		gap: 2px;
	}

	.lane-track {
		position: relative;
		flex: 1 1 auto;
		height: 16px;
		background: var(--background-fill-secondary);
		border-radius: var(--radius-sm);
		overflow: hidden;
	}

	.lane-track.lane-hidden {
		visibility: hidden;
	}

	.annotation-range {
		position: absolute;
		top: 0;
		bottom: 0;
		border-left: 2px solid;
		cursor: pointer;
	}

	.annotation-point {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 2px;
		cursor: pointer;
	}

	.playhead {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--color-accent);
		pointer-events: none;
		z-index: 5;
	}

	.annotation-range .tooltip,
	.annotation-point .tooltip {
		position: absolute;
		bottom: calc(100% + 4px);
		left: 0;
		white-space: nowrap;
		background: var(--body-background-fill);
		color: var(--body-text-color);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--radius-sm);
		padding: 2px 6px;
		font-size: var(--text-xs);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.1s ease-in-out;
		z-index: 10;
	}

	.annotation-range:hover .tooltip,
	.annotation-point:hover .tooltip {
		opacity: 1;
	}
</style>
