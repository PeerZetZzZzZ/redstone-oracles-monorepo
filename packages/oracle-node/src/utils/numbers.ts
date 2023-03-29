import { Consola } from "consola";

const logger = require("./logger")("utils/numbers") as Consola;

export const safelyConvertAnyValueToNumber = (value: any): number => {
  if (["string", "number"].includes(typeof value)) {
    return Number(value);
  } else {
    logger.warn(
      `Value can not be converted to a valid number. Received: ${value}`
    );
    return NaN;
  }
};

export const calculateSum = (nums: number[]) =>
  nums.reduce((prev, cur) => prev + cur, 0);

export const calculateAverageValue = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error("Can not calculate an average value for an empty array");
  }

  return calculateSum(nums) / nums.length;
};

export const calculateDeviationPercent = (args: {
  measuredValue: number;
  trueValue: number;
}) => {
  const { measuredValue, trueValue } = args;

  const secureTrueValue = trueValue === 0 ? Number.MIN_VALUE : trueValue;

  return Math.abs((measuredValue - trueValue) / secureTrueValue) * 100;
};
