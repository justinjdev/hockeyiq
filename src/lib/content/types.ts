export type Vec = { x: number; y: number };
export type HomePosition = 'LW' | 'C' | 'RW' | 'LD' | 'RD';
export type PlayCategory =
	| 'd-zone'
	| 'breakout'
	| 'neutral-zone'
	| 'forecheck'
	| 'o-zone'
	| 'power-play'
	| 'penalty-kill'
	| 'faceoff';
export type Strength = '5v5' | '5v4' | '4v5';
export type Slot = { id: string; home: HomePosition };
export type Opponent = { id: string; label?: string };
export type Source = { title: string; publisher: string; url?: string };
export type Notes = { where: string; read: string; why: string };
/** `at` as a string is a player id. */
export type Read = { at: Vec | string; label?: string };
/** Reserved player-like id for the puck: an arrow `from: 'puck'` starts at the step's puck. No slot or opponent may use it. */
export const PUCK_ID = 'puck';
/**
 * `from` as a string is a slot or opponent id, or `'puck'` (PUCK_ID) in a play step. `via` is a quadratic Bezier control point, not a waypoint.
 * `contested` marks a pass or shot deliberately drawn through traffic or into a blocked lane.
 */
export type Arrow = {
	kind: 'pass' | 'skate' | 'shot';
	from: Vec | typeof PUCK_ID | string;
	to: Vec;
	via?: Vec;
	contested?: boolean;
};
export type Region =
	| { kind: 'ellipse'; cx: number; cy: number; rx: number; ry: number }
	| { kind: 'polygon'; points: Vec[] };
export type DragQuizDef = { start?: Vec; target: Region; correct: string; incorrect: string };
export type DecisionQuizDef = {
	prompt: string;
	options: { text: string; correct: boolean; why: string }[];
};
export type StepQuiz = { drag?: DragQuizDef; decision?: DecisionQuizDef };
export type Step = {
	/**
	 * Stable kebab-case id, unique within the play. Progress keys and quiz shuffles are keyed on it,
	 * so never change or reuse it once published; new or inserted steps need new ids.
	 */
	id: string;
	caption: string;
	phase?: string;
	positions: Record<string, Vec>;
	puck: Vec;
	puckCarrier?: string;
	arrows: Arrow[];
	/** Keyed by slot id. */
	roles?: Record<string, string>;
	notes: Record<string, Notes>;
	/** Keyed by the slot id of the player making the read. */
	reads?: Record<string, Read[]>;
	quiz?: Record<string, StepQuiz>;
	/** Opts this step out of the offside lint (plays that teach offside or tag-ups). */
	allowOffside?: boolean;
};
export type Play = {
	id: string;
	title: string;
	category: PlayCategory;
	system: string;
	strength: Strength;
	summary: string;
	slots: Slot[];
	opponents: Opponent[];
	keyConcepts: string[];
	variations: string;
	sources: Source[];
	steps: Step[];
};
export type DiagramPlayer = {
	id: string;
	team: 'us' | 'them';
	label: string;
	pos: Vec;
	highlight?: boolean;
};
export type Diagram = {
	players: DiagramPlayer[];
	puck?: Vec;
	arrows: Arrow[];
	reads?: Read[];
	caption: string;
};
export type Lesson = {
	id: string;
	title: string;
	summary: string;
	sections: { heading: string; body: string; diagram?: Diagram }[];
	examplePlays: string[];
};
export type Comparison = {
	id: string;
	a: string;
	b: string;
	summary: string;
	whenToUse: { a: string; b: string };
};
export type Term = { id: string; term: string; definition: string };
export type Issue = { where: string; message: string };
