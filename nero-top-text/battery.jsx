// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "pmset -g batt | egrep -o '([0-9]+%).*' | cut -d% -f1";
export const refreshFrequency = 60000;
export const initialState = "Bat: ...";

export const updateState = event => {
  const battery = parseInt(event.output);
  const batteryval = battery.toString().padStart(2, "0");

  if (battery > 6 && battery < 100) return `Bat: ${batteryval}%`;
  else if (battery < 6) return "Bat: !!!";
  else return "Bat: Fll";
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  right: "0px",
  boxSizing: "border-box",
  borderLeft: "1px solid #1c1c1c",
  padding: "7px 12px 6px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};
