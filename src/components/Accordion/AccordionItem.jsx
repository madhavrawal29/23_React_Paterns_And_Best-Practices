import React, { createContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <AccordionItem>. "
    );
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItem.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItem.Provider>
  );
}
