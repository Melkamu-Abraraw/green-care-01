import { ViewTransition } from "react";

// Wraps a page's content so navigating fades the old page out and slides the new one up.
// It belongs in each page, not the layout: layouts stay mounted, so they never enter or exit.
// Browsers without the View Transitions API simply switch pages.
export default function PageTransition({ children }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
