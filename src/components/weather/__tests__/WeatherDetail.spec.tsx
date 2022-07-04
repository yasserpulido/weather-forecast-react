import React from "react";
import { render, screen } from "../../../utils/test";
import WeatherDetail from "../WeatherDetail";
import "@testing-library/jest-dom";
import { weathers } from "../../../mocks/weathers";
import WeatherNextDays from "../WeatherNextDays";

describe("WeatherDetail", () => {
  test("WeatherDetail WITH Today", () => {
    render(<WeatherDetail title="Today" weather={weathers[0][0]} />);

    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("26°")).toBeInTheDocument();
    expect(screen.getByText("25° / 27°")).toBeInTheDocument();
  });

  test("WeatherDetail WITHOUT Today", () => {
    render(
      <WeatherDetail title="2022-07-04 03:00:00" weather={weathers[0][0]} />
    );

    expect(screen.getByTestId("date-title")).toHaveTextContent("Jul 4, 2022");
    expect(screen.getByTestId("time-title")).toHaveTextContent("3:00 AM");
    expect(screen.getByText("26°")).toBeInTheDocument();
    expect(screen.getByText("25° / 27°")).toBeInTheDocument();
  });
});
