# Sarcastic Productivity Tracker
**WEB-115 Final Project Proposal**
Student: Mithunkarthick Parthiban | Repo: WEB-115_FinalProject_Parthiban

---

## Overview

This app is a Productivity Tracker that tracks your tasks and progress on them, judges your personality, and also shows random quotes but interprets them in a funny or sarcastic way.

---

## Features

- User adds tasks (homework, studying, etc.)
- Marks them as complete
- App calculates productivity score
- Gets a quote from the APIs and shows the quote and a funny interpretation of it (ex: If user doesn't complete anything then Quote: “The secret of getting ahead is getting started.” App says: “Interesting. You did neither.”)

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** |  |
| **Event Listeners** |  |
| **DOM Element Creation** |  |
| **Classes & Subclasses** |  |

---

## DLC — Additional Topics

### JSON & Local Storage
The full tournament object — contestant names, match results, current round — is serialized with `JSON.stringify()` and saved to `localStorage` after every state change. On load, `JSON.parse()` restores the bracket exactly where the user left off. This means no data is lost between sessions without any backend.

### Fetch & Public APIs
When a user starts a tournament in "Music Mode," the app fetches the top tracks for a given artist from the MusicBrainz API and pre-fills the contestant list automatically, so users can immediately bracket an artist's discography without typing anything in.

### HTML Canvas
The bracket is rendered visually on an HTML `<canvas>` element. Contestants are drawn as labeled boxes, connecting lines show the bracket structure, and completed matches are styled differently from pending ones. Canvas re-renders after every winner selection to reflect the updated state.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- MusicBrainz API *(free, no API key required)*
- `localStorage` for tournament persistence
- HTML Canvas for bracket rendering
- VS Code + GitHub
