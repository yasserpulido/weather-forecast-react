import React from "react";
import { render, screen } from "../../../utils/test";
import "@testing-library/jest-dom";
import { weathers } from "../../../mocks/weathers";
import WeatherNextDays from "../WeatherNextDays";

describe("WeatherNextDays", () => {
  test("WeatherNextDays List", () => {
    render(<WeatherNextDays weathers={weathers} />);

    expect(screen.getAllByTestId("weather-detail")).toHaveLength(3);
  });
});
