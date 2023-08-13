import { WildfireClient } from "./components/client";
import {
  BcWildfireFeatureProperty,
  BcWildfireProvider,
} from "@/data/bc-wildfire";

const BcWildFirePage = async () => {
  const fireFeatures = (await BcWildfireProvider.getAllCurrentFire()).data
    .features;

  const fireProperties = fireFeatures.map(
    (each) => each.properties
  ) as unknown as BcWildfireFeatureProperty[];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <WildfireClient data={fireProperties} />
      </div>
    </div>
  );
};

export default BcWildFirePage;
