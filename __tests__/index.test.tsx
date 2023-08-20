import BcWildFirePage from "@/app/(root)/(routes)/page";
import { render, screen } from "@testing-library/react";
import {
  BcWildfireProvider,
  CurrentBcWildfireResponse,
} from "@/data/bc-wildfire";
import { AxiosResponse } from "axios";

const mockResolvedValue: CurrentBcWildfireResponse = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "WHSE_LAND_AND_NATURAL_RESOURCE.PROT_CURRENT_FIRE_PNTS_SP.C31829",
      geometry: {
        type: "Point",
        coordinates: [1308285.2761, 838870.305],
      },
      geometry_name: "SHAPE",
      properties: {
        FIRE_NUMBER: "C31829",
        FIRE_YEAR: 2023,
        RESPONSE_TYPE_DESC: "Full",
        IGNITION_DATE: "2023-07-17Z",
        FIRE_OUT_DATE: "2023-07-18Z",
        FIRE_STATUS: "Out",
        FIRE_CAUSE: "Lightning",
        FIRE_CENTRE: 7,
        ZONE: 3,
        FIRE_ID: 1829,
        FIRE_TYPE: "Fire",
        INCIDENT_NAME: "C31829",
        GEOGRAPHIC_DESCRIPTION: "Horse lake",
        LATITUDE: 52.4705,
        LONGITUDE: -121.4505,
        CURRENT_SIZE: 0.009,
        FIRE_URL:
          "https://wildfiresituation.nrs.gov.bc.ca/incidents?fireYear=2023&incidentNumber=C31829",
        FEATURE_CODE: "JA70003000",
        OBJECTID: 2145487,
        SE_ANNO_CAD_DATA: null,
      },
    },
  ],
  totalFeatures: 1,
  numberMatched: 1,
  numberReturned: 1,
  timeStamp: "2023-08-20T17:56:49.938Z",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:EPSG::3005",
    },
  },
};

const mockAxiosResponse: AxiosResponse<CurrentBcWildfireResponse> = {
  data: mockResolvedValue,
  status: 200,
  statusText: "OK",
  headers: {},
  config: {} as any,
};

describe("Home", () => {
  it("renders a heading", async () => {
    jest
      .spyOn(BcWildfireProvider, "getAllCurrentFire")
      .mockResolvedValue(mockAxiosResponse);

    render(await BcWildFirePage());

    let heading = screen.getByTestId("abc");

    expect(heading).toBeInTheDocument();
  });
});
