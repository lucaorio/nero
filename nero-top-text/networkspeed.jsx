// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "sh ./nero-top-text/netspeeds.sh";
export const refreshFrequency = 5000;

export const initialState = {
  dwl: "Dwl: ... kb/s",
  upl: "Upl: ... kb/s"
};

const speed = type => {
  if (type < 1000) {
    return { val: type.toString().padStart(3, "0"), unit: "kb/s" };
  } else if (type > 1000 && type < 10000) {
    return {
      val: parseFloat(Math.round((type / 1000) * 100) / 100).toFixed(1),
      unit: "mb/s"
    };
  } else {
    return {
      val: Math.round(type / 1000)
        .toString()
        .padStart(3, "0"),
      unit: "mb/s"
    };
  }
};

export const updateState = event => {
  const data = event.output.split("#");
  const dwl = speed(Math.round(data[0]));
  const upl = speed(Math.round(data[1]));

  return {
    dwl: `Dwl: ${dwl.val} ${dwl.unit}`,
    upl: `Upl: ${upl.val} ${upl.unit}`
  };
};

export const render = output => (
  <section>
    <div>{output.dwl}</div>
    <div>{output.upl}</div>
  </section>
);

export const className = {
  top: "0px",
  right: "218px",
  boxSizing: "border-box",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
  "& div": {
    top: "0px",
    padding: "7px 12px 6px 12px",
    borderLeft: "1px solid #1c1c1c",
    display: "inline-block"
  }
};
