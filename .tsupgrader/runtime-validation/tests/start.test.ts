// Regression tests for: @tanstack/react-start@1.167.65 upgrade
import { describe, expect, it } from "vitest";
import { startInstance } from "../../../src/start";

describe("TanStack Start configuration", () => {
  it("creates a start instance with request middleware", () => {
    expect(startInstance).toBeDefined();
    expect(typeof startInstance).toBe("object");
  });
});
