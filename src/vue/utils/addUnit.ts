import { type Numeric } from "./basic";
import { isDef, isNumeric } from "./is";

export function addUnit(value?: Numeric): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return undefined;
}
