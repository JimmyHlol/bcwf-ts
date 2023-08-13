import { httpClient } from "@/lib/httpClient";

export interface BcWildfireFeatureProperty {
  FIRE_NUMBER: string; //not null
  FIRE_YEAR: number; //not null
  RESPONSE_TYPE_DESC: string | null;
  IGNITION_DATE: string | null;
  FIRE_OUT_DATE: string | null;
  FIRE_STATUS: string | null;
  FIRE_CAUSE: string | null;
  FIRE_CENTRE: number; //not null
  ZONE: number; //not null
  FIRE_ID: number; //not null
  FIRE_TYPE: string | null;
  INCIDENT_NAME: string | null;
  GEOGRAPHIC_DESCRIPTION: string | null;
  LATITUDE: number | null;
  LONGITUDE: number | null;
  CURRENT_SIZE: number | null;
  FIRE_URL: string | null;
  FEATURE_CODE: string | null;
  OBJECTID: number; //not null
  SE_ANNO_CAD_DATA: string | null;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface BcWildfireFeature {
  type: string;
  id: string;
  geometry: Geometry;
  geometry_name: string;
  properties: BcWildfireFeatureProperty[];
}

interface CurrentBcWildfireResponse {
  type: string;
  features: BcWildfireFeature[];
  totalFeatures: number;
  numberReturned: number;
  timeStamp: string;
}

export class BcWildfireProvider {
  static async getAllCurrentFire() {
    const res = httpClient.get<CurrentBcWildfireResponse>(
      `?service=WFS&version=2.0.0&request=GetFeature&typeName=pub:WHSE_LAND_AND_NATURAL_RESOURCE.PROT_CURRENT_FIRE_PNTS_SP&outputFormat=application/json`
    );
    return res;
  }
}
