"use client";

import { ExportToCsv, Options } from "export-to-csv";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, WildfireColumn } from "./columns";

interface WildfireClientProps {
  data: WildfireColumn[];
}

const csvOptions: Options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header) &&[],
};

const csvExporter = new ExportToCsv(csvOptions);

export const WildfireClient: React.FC<WildfireClientProps> = ({
  data
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Wildfires (${data.length})`} description="Manage Wildfires for your store" />
        {/* <Button onClick={() => router.push(`/${params.storeId}/Wildfires/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button> */}
      </div>
      <Separator />
       <DataTable searchKey="GEOGRAPHIC_DESCRIPTION" columns={columns} inputData={data} csvExporter={csvExporter}/>
    </>
  );
};
