import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { useTable, useFilters } from "react-table";

// Mock data for demonstration
const data = [
  { _id: 1, vendorName: "Vendor A", status: "ACTIVE" },
  { _id: 2, vendorName: "Vendor B", status: "INACTIVE" },
  { _id: 3, vendorName: "Vendor C", status: "ACTIVE" },
];

const ReactTable = ({ columns, initialStatusFilter }) => {
  const [activeTab, setActiveTab] = useState("All");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    setFilter,
    state: { globalFilter, filters },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        filters: [{ id: "status", value: initialStatusFilter || "" }],
      },
    },
    useFilters
  );

  useEffect(() => {
    const filteredStatus = activeTab === "All" ? "" : activeTab;
    setFilter("status", filteredStatus);
  }, [activeTab]);

  return (
    <>
      {/* Tabs for status filter */}
      <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
        <Tab label="All" value="All" />
        <Tab label="Active" value="ACTIVE" />
        <Tab label="Inactive" value="INACTIVE" />
      </Tabs>

      {/* Table component */}
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <TableCell key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

const VendorManagement = () => {
  const columns = useMemo(
    () => [
      { Header: "Vendor Name", accessor: "vendorName" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <Chip
            color={value === "ACTIVE" ? "primary" : "default"}
            label={value}
          />
        ),
        // filter: "equals",
        filter: (rows, id, filterValue) => {
          console.log("Filtered data = ", rows, id, filterValue);
          return rows.filter((row) =>
            filterValue === "" ? row : row.values[id] === filterValue
          );
        },
      },
    ],
    []
  );

  return (
    <Box>
      <Typography variant="h3" component="h1" padding={3}>
        Manage Vendors
      </Typography>
      <ReactTable columns={columns} />
    </Box>
  );
};

export default VendorManagement;
