// src/device/interface/device.interface.ts

export interface LiveDetectionRecord {
  baik       : number;
  cacat      : number;
  totalBaik  : number;
  totalCacat : number;
  timestamp  : string;
}

export interface LiveSession {
  sessionId  : string | null;
  totalBaik  : number;
  totalCacat : number;
  startedAt  : string | null;
}

export interface SessionSummary {
  sessionId  : string | null;
  totalBaik  : number;
  totalCacat : number;
  startedAt  : string | null;
}

export interface PaginatedResult<T> {
  data      : T[];
  total     : number;
  page      : number;
  limit     : number;
  totalPages: number;
}