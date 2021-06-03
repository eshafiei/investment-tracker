// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SectorTypeEnum = {
  "TECHNOLOGY": "TECHNOLOGY",
  "RETAIL": "RETAIL",
  "CRYPTO": "CRYPTO",
  "AIRLINES": "AIRLINES",
  "OIL": "OIL",
  "HEALTHCARE": "HEALTHCARE"
};

const { Sector } = initSchema(schema);

export {
  Sector,
  SectorTypeEnum
};