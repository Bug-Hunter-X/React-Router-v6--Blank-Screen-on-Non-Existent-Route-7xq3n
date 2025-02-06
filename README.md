# React Router v6 Blank Screen Bug

This repository demonstrates a common issue encountered when using React Router v6: a blank screen appearing when navigating to a route that does not exist.  The provided solution shows how to properly handle such scenarios.

## Problem

When using `Routes` and `Route` in React Router v6, navigating to a URL that doesn't match any defined routes can result in a blank screen instead of a 404 error page. This is often due to incorrect configuration or missing error handling.

## Solution

The solution involves using the `useLocation` hook to check the current location and conditionally rendering a 404 component when no matching route is found.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start`.