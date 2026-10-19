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
/** `from` as a string is a player id. */
export type Arrow = { kind: 'pass' | 'skate' | 'shot'; from: Vec | string; to: Vec; via?: Vec };
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
	caption: string;
	phase?: string;
	positions: Record<string, Vec>;
	puck: Vec;
	puckCarrier?: string;
	arrows: Arrow[];
	roles?: Record<string, string>;
	notes: Record<string, Notes>;
	reads?: Record<string, Read[]>;
	quiz?: Record<string, StepQuiz>;
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
