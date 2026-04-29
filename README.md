# Sarcastic Productivity Tracker
**WEB-115 Final Project Proposal**
Student: Mithunkarthick Parthiban | Repo: WEB-115_FinalProject_Parthiban

---

## Overview

The Sarcastic Productivity Tracker is a web-based application that allows users to manange daily tasks while receiving unique quotes.

The project combines productivity tracking with personality by delivering either motivational or sarcastic/humorous quotes depending on the selected mode. This creates a more engaging and interactive experience compared to traditional productivity tools.

The application integrates external APIs to fetch real-time data and dynamically updates the interface based on user interaction.

---

## Features

## Task Management
- Add tasks dynamically
- Mark tasks as complete
- Track overall productivity progress

## Quote System
- Motivation Mode: Uses API Ninjas for structured quotes
- Sarcasm Mode (Kanye Mode): Uses Kanye REST API for humorous quotes
- Random Mode: Randomly selects between both APIS

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | If Statements are used to switch between quote modes and Loops iterate through task lists to update and render tasks dynamically. |
| **Event Listeners** | Button click events for adding tasks, Checkbox events for marking tasks complete, & Mode selection buttons to switch between APIs|
| **DOM Element Creation** | Tasks are dynamically created and added to the DOM, Quotes are inserted and updated without reloading the page, & UI updates reflect user interactions in real time |
| **Classes & Subclasses** | A main class handles API calls, Separate methods manage each API request, & The structure supports scalability for adding new features |

---

## DLC — Additional Topics

### JSON & Local Storage
JSON is usec to parseand structure data from API responses, while local storsge stores the user's tasks in the browser so they csn persist across sessions and can be reloaded when the app is reopened.

### Fetch & Public APIs
The website uses the API Ninjas Quotes API to fetch structured motivational quotes and the Kanye.rest API to generate sarcastic or humorous quotes, allowing the application to dynamically display different types of content based on the selected mode.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- Kanye.rest API *(free, no API key required)*
- Quotes Ninjas API *(free, but API key required)*
- VS Code + GitHub
