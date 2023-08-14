"use client";

import { Options } from "export-to-csv";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, WildfireColumn } from "./columns";
// import { SimpleDateTable } from "@/components/ui/data-table";

interface WildfireClientProps {
  data: WildfireColumn[] | null;
}

const csvOptions: Options = {
  filename: "BCWildfires-" + new Date(Date.now()).toISOString(),
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
          // title={`BC wildfires (${data ? data.length : 0})`}
          title={`BC Wildfires`}
          description={`Total ${
            data ? data.length : 0
          } cases in ${new Date().getFullYear()}`}
        />
      </div>
      <Separator />
      {data ? (
        <DataTable
          columnHeaders={columns}
          data={data}
          csvOptions={csvOptions}
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <p className="text-2xl text-gray-400">Something went wrong :(</p>
        </div>
      )}
    </>
  );
};
