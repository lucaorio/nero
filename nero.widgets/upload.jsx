export const command = "sh ./nero.widgets/netspeeds.sh";
export const refreshFrequency = 5000;

export const initialState = "Upl: ... kb/s";

export const updateState = event => {
  const data = event.output.split("#");
  const upl = Math.round(data[1]);
  let uplval = "";
  let unit = "";

  if (upl < 1000) {
    uplval = upl.toString().padStart(3, "0");
    unit = "kb/s";
  } else if (upl > 1000 && upl < 10000) {
    uplval = parseFloat(Math.round((upl / 1000) * 100) / 100).toFixed(1);
    unit = "mb/s";
  } else {
    uplval = Math.round(upl / 1000)
      .toString()
      .padStart(3, "0");
    unit = "mb/s";
  }

  return `Upl: ${uplval} ${unit}`;
};

export const render = output => <div>{output}</div>;

export const className = {
  top: "0px",
  right: "219px",
  borderLeft: "1px solid rgba(36,36,36,1)",
  padding: "2px 12px 0px 12px",
  fontFamily: "Roboto Mono",
  fontSize: "10px",
  lineHeight: "20px",
  color: "rgba(255,255,255,1)"
};
