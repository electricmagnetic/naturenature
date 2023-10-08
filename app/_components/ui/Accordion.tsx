import { PropsWithChildren } from "react";

type AccordionComponent = PropsWithChildren<{ id: string }>;

const AccordionItem = ({ children }: PropsWithChildren) => (
  <div className="accordion-item">{children}</div>
);

const AccordionHeader = ({ id, children }: AccordionComponent) => (
  <h2 className="accordion-header">
    <button
      className="accordion-button text-uppercase"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#collapse-${id}`}
      aria-expanded="true"
      aria-controls={`collapse-${id}`}
    >
      {children}
    </button>
  </h2>
);

const AccordionBody = ({ id, children }: AccordionComponent) => (
  <div id={`collapse-${id}`} className="accordion-collapse collapse show">
    <div className="accordion-body">{children}</div>
  </div>
);

const Accordion = ({ children }: PropsWithChildren) => (
  <div className="accordion shadow-sm mb-3">{children}</div>
);

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
