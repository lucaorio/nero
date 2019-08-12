// this widget is part of Nero -> https://github.com/lucaorio/nero
// requires https://github.com/koekeishiya/yabai
export const command = "/usr/local/bin/yabai -m query --spaces --space";
export const refreshFrequency = 1000;
export const initialState = "[00-...] ...";

const getSpaceName = (index) => {
  switch (index) {
    case 1:
      return "ter";
      break;
    case 2:
      return "gnr";
      break;
    case 3:
      return "dsn";
      break;
    case 4:
      return "cod";
      break;
    case 5:
      return "wrt";
      break;
    case 6:
      return "mus";
      break;
    case 7:
      return "com";
      break;
    default:
      return "ukw";
  }
}

const getSpaceMode = (type) => {
  if (type === "float") return "flt";
  else return type;
}

export const updateState = event => {
  if (event.output) {
    const space = JSON.parse(event.output);
    const mode = getSpaceMode(space.type);
    const index = space.index;
    const name = getSpaceName(index);
    return `[0${index}-${name}] ${mode}`;
  }
  else return initialState;
};

export const render = output => <div>{output}</div>;

export const className = {
  bottom: "0px",
  left: "0px",
  boxSizing: "border-box",
  borderRight: "1px solid #1c1c1c",
  padding: "8px 12px 5px 12px",
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "10px",
  color: "#cccccc",
};
