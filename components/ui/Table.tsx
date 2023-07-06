import { PropsWithChildren } from "react";

const TableHead = ({ children }: PropsWithChildren) => (
  <thead>{children}</thead>
);
const TableHeading = ({ children }: PropsWithChildren) => (
  <th scope="col" className="text-uppercase">
    {children}
  </th>
);
const TableBody = ({ children }: PropsWithChildren) => (
  <tbody>{children}</tbody>
);
const TableRow = ({ children }: PropsWithChildren) => <tr>{children}</tr>;
const TableData = ({ children }: PropsWithChildren) => <td>{children}</td>;

const Table = ({ children }: PropsWithChildren) => (
  <table className="table table-striped">{children}</table>
);

Table.Head = TableHead;
Table.Heading = TableHeading;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Data = TableData;

export default Table;
