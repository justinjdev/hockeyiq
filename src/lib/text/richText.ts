export type Segment = { kind: 'text'; text: string } | { kind: 'term'; id: string; text: string };

const TERM = /\[\[([^\][|]+?)(?:\|([^\]]+?))?\]\]/g;

export function parseRichText(s: string): Segment[] {
	const out: Segment[] = [];
	let last = 0;
	for (const m of s.matchAll(TERM)) {
		if (m.index > last) out.push({ kind: 'text', text: s.slice(last, m.index) });
		const id = m[1].trim();
		out.push({ kind: 'term', id, text: m[2] ?? id });
		last = m.index + m[0].length;
	}
	if (last < s.length) out.push({ kind: 'text', text: s.slice(last) });
	return out;
}

export function plainText(s: string): string {
	return parseRichText(s)
		.map((seg) => seg.text)
		.join('');
}

export function termRefs(s: string): string[] {
	return parseRichText(s).flatMap((seg) => (seg.kind === 'term' ? [seg.id] : []));
}
