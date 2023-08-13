"use client"

import { ColumnDef } from "@tanstack/react-table"

import { BcWildfireFeatureProperty } from "@/data/bc-wildfire";

export type WildfireColumn = BcWildfireFeatureProperty;

export const columns: ColumnDef<WildfireColumn>[] = [
    {
      accessorKey: "GEOGRAPHIC_DESCRIPTION",
      header: "GEOGRAPHIC_DESCRIPTION",
    },
    {
      accessorKey: "FIRE_STATUS",
      header: "FIRE_STATUS",
    },
    {
      accessorKey: "FIRE_CAUSE",
      header: "FIRE_CAUSE",
    },
    {
      accessorKey: "FIRE_NUMBER",
      header: "FIRE_NUMBER",
    },
    {
      accessorKey: "FIRE_YEAR",
      header: "FIRE_YEAR",
    },
    {
      accessorKey: "RESPONSE_TYPE_DESC",
      header: "RESPONSE_TYPE_DESC",
    },
    {
      accessorKey: "IGNITION_DATE",
      header: "IGNITION_DATE",
    },
    {
      accessorKey: "FIRE_OUT_DATE",
      header: "FIRE_OUT_DATE",
    },
    {
      accessorKey: "FIRE_CENTRE",
      header: "FIRE_CENTRE",
    },
    {
      accessorKey: "ZONE",
      header: "ZONE",
    },
    {
      accessorKey: "FIRE_ID",
      header: "FIRE_ID",
    },
    {
      accessorKey: "FIRE_TYPE",
      header: "FIRE_TYPE",
    },
    {
      accessorKey: "INCIDENT_NAME",
      header: "INCIDENT_NAME",
    },
    {
      accessorKey: "LATITUDE",
      header: "LATITUDE",
    },
    {
      accessorKey: "LONGITUDE",
      header: "LONGITUDE",
    },
    {
      accessorKey: "CURRENT_SIZE",
      header: "CURRENT_SIZE",
    },
    {
      accessorKey: "FIRE_URL",
      header: "FIRE_URL",
    },
    {
      accessorKey: "FEATURE_CODE",
      header: "FEATURE_CODE",
    },
    {
      accessorKey: "OBJECTID",
      header: "OBJECTID",
    },
    {
      accessorKey: "SE_ANNO_CAD_DATA",
      header: "SE_ANNO_CAD_DATA",
    }
  ];
