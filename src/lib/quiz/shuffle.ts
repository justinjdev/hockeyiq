/** FNV-1a: a small, stable string hash. */
function hash(s: string): number {
	let h = 0x811c9dc5;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 0x01000193);
	}
	return h >>> 0;
}

/** mulberry32: a seeded PRNG returning floats in [0, 1). */
function rng(seed: number): () => number {
	let a = seed;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

/** A permutation of 0..n-1 that depends only on `seed` (Fisher-Yates driven by a seeded PRNG). */
export function shuffledOrder(n: number, seed: string): number[] {
	const order = Array.from({ length: n }, (_, i) => i);
	const next = rng(hash(seed));
	for (let i = n - 1; i > 0; i--) {
		const j = Math.floor(next() * (i + 1));
		[order[i], order[j]] = [order[j], order[i]];
	}
	return order;
}
