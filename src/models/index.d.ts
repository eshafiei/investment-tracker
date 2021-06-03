import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SectorTypeEnum {
  TECHNOLOGY = "TECHNOLOGY",
  RETAIL = "RETAIL",
  CRYPTO = "CRYPTO",
  AIRLINES = "AIRLINES",
  OIL = "OIL",
  HEALTHCARE = "HEALTHCARE"
}



export declare class Sector {
  readonly id: string;
  readonly name: string;
  readonly active?: boolean;
  readonly type?: SectorTypeEnum | keyof typeof SectorTypeEnum;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sector>);
  static copyOf(source: Sector, mutator: (draft: MutableModel<Sector>) => MutableModel<Sector> | void): Sector;
}