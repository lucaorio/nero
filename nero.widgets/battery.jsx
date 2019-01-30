export const command = "pmset -g batt | egrep -o '([0-9]+%).*' | cut -d% -f1";
export const refreshFrequency = 20000;

export const initialState = "Bat: ...";

export const updateState = event => {
  if (event.error) return event.error;

  const battery = parseInt(event.output);
  const batteryval = battery.toString().padStart(2, "0");

  if (battery > 6 && battery < 100) return `Bat: ${batteryval}%`;
  else if (battery < 6) return `Bat: !!!`;
  else return "Bat: Fll";
};

export const render = output => <div>{output}</div>;

export const className = {
  boxSizing: "border-box",
  top: "0px",
  right: "0px",
  borderLeft: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
