export const command = "sh ./nero.widgets/netspeeds.sh";
export const refreshFrequency = 5000;

export const initialState = "Dwl: ... kb/s";

export const updateState = event => {
  const data = event.output.split("#");
  const dwl = Math.round(data[0]);
  let dwlval = undefined;
  let unit = undefined;

  if (dwl < 1000) {
    dwlval = dwl.toString().padStart(3, "0");
    unit = "kb/s";
  } else if (dwl > 1000 && dwl < 10000) {
    dwlval = parseFloat(Math.round((dwl / 1000) * 100) / 100).toFixed(1);
    unit = "mb/s";
  } else {
    dwlval = Math.round(dwl / 1000)
      .toString()
      .padStart(3, "0");
    unit = "mb/s";
  }

  return `Dwl: ${dwlval} ${unit}`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  right: "322px",
  borderLeft: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
