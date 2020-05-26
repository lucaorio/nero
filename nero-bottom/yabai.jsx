// this widget is part of Nero -> https://github.com/lucaorio/nero
// requires https://github.com/koekeishiya/yabai
import { run } from 'uebersicht'
export const refreshFrequency = false
export const initialState = 'Loading Yabai ...'

// get all data from yabai and dispatch an event
export const command = (dispatch) => {
  run('/usr/local/bin/yabai -m query --spaces').then((spacesData) => {
    run('/usr/local/bin/yabai -m query --windows').then((windowData) => {
      const spaces = JSON.parse(spacesData)
      const windows = JSON.parse(windowData || {})
      const output = { spaces, windows }
      dispatch({ type: 'DATA_READY', output })
    })
  })
}

// update the state
export const updateState = (event, previousState) => {
  // if data is ready, show the updated state
  if (event.output && event.type === 'DATA_READY') {
    return (
      <div>
        {/* {getSpaceMode(event.output.spaces)} */}
        {getSpaces(event.output.spaces)}
        {getWindow(event.output.windows)}
      </div>
    )
  }
  // if there was a previous state, always show it before updating the layout
  else if (previousState) return previousState
  // if we have no current nor previous data, show an initial placeholder
  else return initialState
}

// simply render whatever the update state function returns
export const render = (output) => output

// custom functions to handle the data and return a proper layout
const getSpaces = (spaces) => {
  const displays = spaces.reduce((groups, item) => {
    const val = item['display']
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})

  if (Object.keys(displays).length > 1) return getMultiScreenSpaces(displays)
  else return getSingleScreenSpaces(displays['1'])
}

const getSingleScreenSpaces = (spaces) => {
  const active = spaces.filter((space) => space.focused)[0]

  return (
    <div className="displays">
      <div className={active ? 'display active' : 'display'}>
        {getSpaceMode(spaces)}
      </div>
      {spaces.map((space) => (
        <div
          key={space.id}
          className={space.focused ? 'space active' : 'space'}>
          {space.index}
        </div>
      ))}
    </div>
  )
}

const getMultiScreenSpaces = (displays) => {
  return Object.keys(displays).map((displayKey) => {
    const spaces = displays[displayKey]
    const active = spaces.filter((space) => space.focused)[0]

    return (
      <div key={displayKey} className="displays">
        <div className={active ? 'display active' : 'display'}>
          {getSpaceMode(spaces)}
        </div>
        {spaces.map((space) => (
          <div
            key={space.id}
            className={space.focused ? 'space active' : 'space'}>
            {space.index}
          </div>
        ))}
      </div>
    )
  })
}

const getSpaceMode = (spaces) => {
  const active = spaces.filter((space) => space.focused)[0]
  if (active) return active.type === 'float' ? 'flt ' : 'bsp'
  else return 'unk'
}

const getWindow = (windows) => {
  const active = windows.filter((window) => window.focused)[0]
  const sticky = active ? active.sticky : 0
  const floating = active ? active.floating : 0
  const name = active ? active.app : 'no focus'

  return (
    <div className="window">
      <div className={sticky ? 'windowMode active' : 'windowMode'}>stk</div>
      <span>/</span>
      <div className={floating ? 'windowMode active' : 'windowMode'}>flt</div>
      <span>:</span>
      <div className="windowName">{name}</div>
    </div>
  )
}

// styling and css
export const className = {
  bottom: '0px',
  left: '0px',
  boxSizing: 'border-box',
  fontFamily: 'Roboto Mono',
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '10px',
  color: 'rgba(204, 204, 204, 1)',

  '& .displays': {
    display: 'inline-block',

    '& > div:last-of-type': {
      borderRight: '1px solid rgba(28, 28, 28, 1)',
    },
  },

  '& .display': {
    display: 'inline-block',
    padding: '8px 12px 5px 12px',
    color: 'rgba(204, 204, 204, 0.3)',
    borderRight: '1px solid rgba(28, 28, 28, 1)',

    '&.active': {
      color: 'rgba(204, 204, 204, 1)',
    },
  },

  '& .space': {
    display: 'inline-block',
    padding: '8px 12px 5px 12px',
    color: 'rgba(204, 204, 204, 0.3)',

    '&.active': {
      color: 'rgba(204, 204, 204, 1)',
      backgroundColor: 'rgba(50, 50, 50, 1)',
    },
  },

  '& .window': {
    display: 'inline-block',
    borderRight: '1px solid rgba(28, 28, 28, 1)',
    padding: '0px 0px 0px 12px',
    color: 'rgba(204, 204, 204, 0.3)',

    '& .windowMode': {
      display: 'inline-block',
      padding: '8px 0px 5px 0px',

      '&.active': {
        color: 'rgba(204, 204, 204, 1)',
      },
    },

    '& .windowName': {
      display: 'inline-block',
      padding: '8px 12px 5px 4px',
      color: 'rgba(204, 204, 204, 1)',
      textTransform: 'lowercase',
    },
  },
}
