# Hockey IQ: Positions and Plays Study Tool (Design)

Date: 2026-10-18
Status: Draft, awaiting approval

## Intent

A personal study tool for a 36-year-old adult rec player who never formally learned to "see the ice." It teaches where each player should be in common situations, what to read, and why, so the user can play smarter and later translate that knowledge for their kids.

The core idea: pick a situation and a position, step through a play on an animated rink, and see your player's job explained at every step. Then test yourself on the same plays.

## Users and context

- Primary user: the owner, an adult rec-league player. Content is pitched at adult rec level: real systems, plain language, no assumed coaching vocabulary.
- Kids are an indirect audience. The user translates; the tool does not need a kids mode.
- Used mostly on a laptop for study sessions, but must work well on a phone (e.g. a quick review before a game).

## Goals

1. Show positioning per player for a given play, step by step, with notes covering: where to be, what to read, and why.
2. Cover a wide variety of systems and situations, including 5v5 zones, cycling, power play, and penalty kill.
3. Make similar systems easy to compare (e.g. 1-2-2 vs 2-1-2 forecheck, box vs diamond PK).
4. Let the user test themselves with two quiz types (drag-to-position and pick-a-decision).
5. Teach the underlying "seeing the ice" concepts, not just memorized plays.
6. Make adding new plays and systems cheap.

## Non-goals

- No accounts, backend, or multiplayer.
- No team/coach features (sharing playbooks, assigning plays to players).
- No video analysis or real game footage.
- No kids-specific content or youth progression model.
- No opponent-perspective notes. Opponents are shown on the rink but are not selectable for coaching notes.

## Anti-goals (a failure even if it technically works)

- Hockey content that looks plausible but is wrong. This is the biggest risk. Incorrect advice makes the tool worse than nothing.
- Diagrams so cluttered they're harder to read than a whiteboard.
- Jargon without explanation. Terms like F1, weak side, gap, pinch must be explained (glossary and inline tooltips).
- A phone experience that is just a shrunken desktop page.
- Generic "AI-looking" UI. It should feel designed for hockey.

## Constraints and decided "how"

- **Stack (user's choice):** SvelteKit (Svelte 5), TypeScript, static adapter. No backend.
- **Rendering (my call):** SVG rink drawn to NHL proportions (200 x 85 ft), coordinates in feet.
- **Layout (user chose, from mockups):** Rink with a side panel on desktop; panel stacks below the rink on phone.
  - Top: category chips (Fundamentals, D-zone, Breakouts, Neutral zone, Forecheck, O-zone, PP, PK).
  - Rink: our players as labeled blue circles (LW, C, RW, LD, RD, G optional), opponents as red X's, puck as a black dot. The selected player gets a highlight ring. Arrows: dashed for passes, solid for skating routes, plus a dotted "read" marker on the thing the selected player should be watching.
  - Step scrubber under the rink (prev/next, step dots). Positions animate between steps.
  - Side panel: position chips (tap a player on the rink or a chip to switch perspective), then three sections: **Where to be**, **What to read**, **Why**.
- **Quiz modes (user chose both, as separate options from study mode):**
  - **Drag-to-position:** the play freezes at a step; the user drags their player to a spot. Reveal shows the correct zone (a shaded region, not a single point), whether the guess was inside it, and an explanation.
  - **Pick-a-decision:** a frozen frame and a prompt ("the puck is rimmed to you, you..."); 2 to 4 options, each with its own explanation of why it is right or wrong.

## Content scope

Starting library (my proposal, user approved the direction and asked for wide variety). Each item is a "play" with steps; a "system" is a named family of plays.

| Area | v1 content |
|------|-----------|
| Fundamentals | Seeing the ice: shoulder checks, strong/weak side, triangles and support, F1/F2/F3 roles, gap control, net-front, lanes |
| D-zone | Man-to-man vs zone coverage, low-zone collapse, net-front battle, defending the cycle |
| Breakouts | Standard (up the wall), reverse, D-to-D, wheel, stretch |
| Neutral zone | Regroup, 1-2-2 neutral zone, 1-3-1 neutral zone, tag-up / offside basics |
| Forecheck | 1-2-2, 2-1-2, 2-3 / aggressive, 1-1-3 |
| O-zone | Cycle low, low-to-high, net drive, behind-the-net play, point shot with screen |
| Power play (5v4) | Umbrella (1-3-1), overload, 1-3-1 vs box PK, PP breakout (drop pass, 5-back) |
| Penalty kill (4v5) | Box, diamond, wedge+1, PK forecheck (1-3, 2-2 in NZ) |
| Faceoffs | D-zone and O-zone faceoff alignments and responsibilities |

Content rules:

- Each play has a `variations` / `notes` field acknowledging that coaches run systems differently. The tool teaches common, widely taught versions, not "the one true way."
- Each play records its sources (coaching references used while writing it).
- Content is authored by me (Claude) from established coaching material. Accuracy matters more than volume within each play.
- **Review (user's choice):** sources only, no human review gate. Every play must cite at least one recognizable coaching source (USA Hockey, Hockey Canada, published coaching books/sites, or well-documented pro systems). A play without a credible source does not ship. The user will flag errors as they notice them.
- **v1 scope (user's choice):** the full content table above ships in v1, not a thin slice. Build order is still engine first, then content, but v1 is not "done" until the whole table is in.
- A glossary page plus inline tooltips for terms.

## Comparison view

Pick two plays in the same category (e.g. 1-2-2 vs 2-1-2 forecheck) and view them side by side (stacked on phone), plus a short "when to use which" summary written per system pair.

Scrubbing (my call): plays meant for comparison share named **phases** (e.g. forecheck: "dump-in", "D retrieves", "first pass", "exit or turnover"). Steps carry an optional phase name. In comparison view the scrubber moves by phase, showing each play's step for that phase. Pairs without shared phases get two independent scrubbers. Content validation checks that declared comparison pairs have matching phase lists.

## Data model (shape, not final types)

Plays are static data files in the repo (TypeScript modules for type safety).

- **Play:** id, title, category, system name, strength (5v5, 5v4, 4v5, etc.), which end we're defending, summary, key concepts (links to fundamentals), variations, sources, steps.
- **Player slots and roles (my call):** each play defines its own slots for our team. A slot has a stable id and a **home position** label the user identifies with (LW, C, RW, LD, RD), and each step can give that slot a **role** label (F1/F2/F3, bumper, flank, net-front, point, high/low PK box). Notes, quizzes, position chips, URLs, and progress are keyed by slot. The rink and panel show both: "RW, acting as F1 this step." This matches how a rec player thinks ("I'm the RW, what do I do?") while still teaching rotating roles. PP/PK plays use the same five home labels for whoever is on the unit, with roles carrying the PP/PK meaning.
- **Step:** caption, optional phase name, positions for every player (ours and theirs) and the puck, arrows (pass/skate/shot), per-position notes for our players (where / read / why), optional "read" markers per position, optional quiz definitions.
- **Quiz (per step, per position):**
  - drag: target region (ellipse or polygon in rink coordinates) plus feedback for correct and incorrect.
  - decision: prompt, options each with correct flag and explanation.
- **Fundamentals lessons (my call):** a separate, simpler content type, not plays. A lesson is a short sequence of sections, each with prose and an optional single-frame rink diagram (reusing the same renderer and position format, no steps or quizzes). Plays link to lessons via key concepts; lessons link back to example plays.
- Plays are always drawn from our team's perspective, attacking to the right. The renderer can mirror for the opposite side.

## Progress (my call)

Quiz results stored in `localStorage`: per play, per position, last attempt and a simple mastered/not-yet status, shown as a small badge on play lists. No sync.

## Authoring tool (my call)

A dev-only route (not in the production build) that renders a play and lets me drag players and the puck to set positions per step, then copies the resulting step data. Without this, hand-entering coordinates for dozens of multi-step plays is slow and error-prone. Notes and quizzes are still written in the data files.

## Visual direction (my call, shown as a mockup at the start of implementation; not a blocking gate, the user adjusts it after seeing the real UI)

Dark "arena at night" UI around a bright ice surface, so the rink is the brightest thing on screen. Accent color: goal-light amber for the selected player and key cues. A distinctive display typeface (scoreboard/athletic feel) with a readable body face. No purple gradients, no stock dashboard look.

## Left to the builder

- Exact TypeScript types and file layout for content.
- Animation library or approach (Svelte transitions/tweened stores are fine).
- Routing structure and URLs (should be shareable/bookmarkable to a play, step, and position).
- Static host choice for deployment.
- Test approach (content validation tests are worthwhile: every step has positions for all players, every quiz has exactly one correct decision option, every drag target is on the ice).

## Open items for the user

- None. Builder-check questions were resolved above (review approach and v1 scope by the user; slots/roles, comparison phases, fundamentals format, and visual gate as my calls).
