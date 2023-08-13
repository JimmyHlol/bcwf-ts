"use client";

import { ColumnDef } from "@tanstack/react-table";

import { BcWildfireFeatureProperty } from "@/data/bc-wildfire";

export type WildfireColumn = BcWildfireFeatureProperty;

export const columns: ColumnDef<WildfireColumn>[] = [
  {
    accessorKey: "GEOGRAPHIC_DESCRIPTION",
    header: "GEOGRAPHIC_DESCRIPTION",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: true,
  },
  {
    accessorKey: "FIRE_STATUS",
    header: "FIRE_STATUS",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: true,
  },
  {
    accessorKey: "FIRE_CAUSE",
    header: "FIRE_CAUSE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: true,
  },
  {
    accessorKey: "FIRE_NUMBER",
    header: "FIRE_NUMBER",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FIRE_YEAR",
    header: "FIRE_YEAR",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "RESPONSE_TYPE_DESC",
    header: "RESPONSE_TYPE_DESC",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "IGNITION_DATE",
    header: "IGNITION_DATE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FIRE_OUT_DATE",
    header: "FIRE_OUT_DATE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FIRE_CENTRE",
    header: "FIRE_CENTRE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "ZONE",
    header: "ZONE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FIRE_ID",
    header: "FIRE_ID",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FIRE_TYPE",
    header: "FIRE_TYPE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "INCIDENT_NAME",
    header: "INCIDENT_NAME",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "LATITUDE",
    header: "LATITUDE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "LONGITUDE",
    header: "LONGITUDE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "CURRENT_SIZE",
    header: "CURRENT_SIZE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FIRE_URL",
    header: "FIRE_URL",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "FEATURE_CODE",
    header: "FEATURE_CODE",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "OBJECTID",
    header: "OBJECTID",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "SE_ANNO_CAD_DATA",
    header: "SE_ANNO_CAD_DATA",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
];
