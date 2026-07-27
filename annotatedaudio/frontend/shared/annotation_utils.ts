import type {
	AnnotationData,
	CategoryData,
	TranscriptSegment
} from "./types";

export const DEFAULT_PALETTE = [
	"#3b82f6", // blue
	"#ef4444", // red
	"#22c55e", // green
	"#f59e0b", // amber
	"#a855f7", // purple
	"#06b6d4", // cyan
	"#ec4899", // pink
	"#84cc16", // lime
	"#f97316", // orange
	"#14b8a6" // teal
];

export interface Lane {
	key: string;
	label: string;
	color: string;
	points: { time: number; label?: string | null; color?: string }[];
	ranges: { start: number; end: number; label?: string | null; color?: string }[];
}

export function resolve_category_colors(
	categories: CategoryData[]
): Map<string, string> {
	const colors = new Map<string, string>();
	let palette_idx = 0;
	for (const category of categories) {
		if (category.color) {
			colors.set(category.key, category.color);
		} else {
			colors.set(category.key, DEFAULT_PALETTE[palette_idx % DEFAULT_PALETTE.length]);
			palette_idx++;
		}
	}
	return colors;
}

export function build_category_lanes(
	categories: CategoryData[],
	annotations: AnnotationData[]
): Lane[] {
	const colors = resolve_category_colors(categories);
	return categories.map((category) => {
		const lane: Lane = {
			key: category.key,
			label: category.label || category.key,
			color: colors.get(category.key) as string,
			points: [],
			ranges: []
		};
		for (const annotation of annotations) {
			if (annotation.category !== category.key) continue;
			if (annotation.kind === "point" && annotation.time !== undefined) {
				lane.points.push({ time: annotation.time, label: annotation.label });
			} else if (
				annotation.kind === "range" &&
				annotation.start !== undefined &&
				annotation.end !== undefined
			) {
				lane.ranges.push({
					start: annotation.start,
					end: annotation.end,
					label: annotation.label
				});
			}
		}
		return lane;
	});
}

export function build_speaker_lane(
	transcript: TranscriptSegment[]
): Lane | null {
	const speakers: string[] = [];
	for (const segment of transcript) {
		if (segment.speaker && !speakers.includes(segment.speaker)) {
			speakers.push(segment.speaker);
		}
	}
	if (speakers.length === 0) return null;

	const colors = new Map<string, string>();
	speakers.forEach((speaker, i) => {
		colors.set(speaker, DEFAULT_PALETTE[i % DEFAULT_PALETTE.length]);
	});

	const lane: Lane = {
		key: "__speaker__",
		label: "Speaker",
		color: DEFAULT_PALETTE[0],
		points: [],
		ranges: []
	};
	for (const segment of transcript) {
		if (!segment.speaker) continue;
		lane.ranges.push({
			start: segment.start,
			end: segment.end,
			label: segment.speaker,
			color: colors.get(segment.speaker)
		});
	}
	return lane;
}

export function speaker_color_map(
	transcript: TranscriptSegment[]
): Map<string, string> {
	const colors = new Map<string, string>();
	let i = 0;
	for (const segment of transcript) {
		if (segment.speaker && !colors.has(segment.speaker)) {
			colors.set(segment.speaker, DEFAULT_PALETTE[i % DEFAULT_PALETTE.length]);
			i++;
		}
	}
	return colors;
}

export function find_active_segment_index(
	transcript: TranscriptSegment[],
	current_time: number
): number {
	for (let i = 0; i < transcript.length; i++) {
		if (current_time >= transcript[i].start && current_time < transcript[i].end) {
			return i;
		}
	}
	return -1;
}
