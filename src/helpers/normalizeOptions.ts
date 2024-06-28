import { defaultOptions } from "@/constants";
import { Options } from "@/types";

export function normalizeOptions(options: Options) {
  return {
    ...defaultOptions,
    ...options,
  };
}
