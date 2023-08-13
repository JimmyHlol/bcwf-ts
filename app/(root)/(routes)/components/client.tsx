"use client";

import { ExportToCsv, Options } from "export-to-csv";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, WildfireColumn } from "./columns";
// import { SimpleDateTable } from "@/components/ui/data-table";

interface WildfireClientProps {
  data: WildfireColumn[];
}

const csvOptions: Options = {
  filename: "Wildfires-" + new Date(Date.now()).toISOString(),
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header) && [],
};

export const WildfireClient: React.FC<WildfireClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Wildfires (${data.length})`}
          description={`Filter BC Wildfires for ${new Date().getFullYear()}`}
        />
      </div>
      <Separator />
      <DataTable columnHeaders={columns} data={data} csvOptions={csvOptions} />
    </>
  );
};
