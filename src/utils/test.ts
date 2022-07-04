import type { ReactElement } from "react";
import {
  type RenderOptions,
  render as testingLibraryRender,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export * from "@testing-library/react";

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => ({
  user: userEvent.setup(),
  ...testingLibraryRender(ui, {
    wrapper: ({ children }) => children,
    ...options,
  }),
});
