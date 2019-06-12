// this widget is part of Nero -> https://github.com/lucaorio/nero
export const command = "date +'%d %b %Y - %H:%M'";
export const refreshFrequency = 30000;
export const initialState = "...";

export const updateState = event => {
  // 0:0 to 23:59
  const wakeup = {h: 8, m: 0};
  const bedtime = {h: 1, m: 0};

  // amount of minutes awake on custom timeframe
  const awakeMins = Math.abs(wakeup.h - bedtime.h) * 60;
  const awakeAdditionalMins = Math.abs(wakeup.m - bedtime.m);
  const awaketimeMins = 1440 - (awakeMins + awakeAdditionalMins);

  // minutes remaining till bedtime
  const now = new Date();
  const deadline = new Date();
  deadline.setHours(bedtime.h, bedtime.m, 0, 0);
  deadline < now && deadline.setDate(deadline.getDate() + 1);
  const minsTillBedtime = Math.floor((deadline - now) / 1000 / 60);

  // percentage of time elapsed from wakeup time
  const perc = Math.round(100 - minsTillBedtime * 100 / awaketimeMins);
  return perc >= 0 && perc <= 100 ? perc : 100;
};

export const render = output => (
  <section>
    {`${output}%`}
    <div className="bar">
      <div className="progress" style={{width: output + "%"}}></div>
    </div>
  </section>
);

export const className = {
  bottom: "0px",
  right: "0px",
  boxSizing: "border-box",
  borderLeft: "1px solid #1c1c1c",
  padding: "8px 12px 5px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
  "& .bar": {
    display: "inline-block",
    boxSizing: "border-box",
    marginLeft: "8px",
    width: "106px",
    height: "7px",
    border: "1px solid #333333",
    padding: "2px",
    "& .progress": {
      width: "100%",
      height: "1px",
      backgroundColor: "white",
    }
  }
};
