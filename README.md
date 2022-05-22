# node-red-contrib-ambiclimate
[![npm version](https://badge.fury.io/js/node-red-contrib-ambiclimate.svg)](https://badge.fury.io/js/node-red-contrib-ambiclimate)

A collection of [Node-RED](http://nodered.org/) nodes to control [Ambi Climate](https://www.ambiclimate.com/) devices.

## Installation
Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-ambiclimate

## OAuth Client

Register a OAuth Client in the <a href="https://api.ambiclimate.com/" target="_new">Ambi Dev Portal</a> by following the steps on the Quick Start page.  You require the Client Id and Client Secret of that client in order to use this node.

## Usage
Separate nodes are provided for each of the capabilities of the LIFX HTTP Remote Control API.
Each node can be configured, or can receive settings in the triggering `msg`.

### Power Off
Power off your AC

Sample input `msg.payload`:
```json
{
  "room_name": "Bedroom",
  "location_name": "Home"
}
```

### Comfort Mode
Enable Comfort mode on your AC

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home"
}
```

### Comfort Mode Feedback
Send feedback for Comfort mode, the value should be a value from this list: ["too_hot", "too_warm", "bit_warm", "comfortable", "bit_cold", "too_cold", "freezing"].

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "value": "bit_warm"
}
```

### Away Temperature Lower
Enable Away mode and set an lower bound for temperature. Ambi will try to keep temperature above the lower bound.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "value": 15
}
```

### Away Temperature Upper
Enable Away mode on your AC to stay above target temperature. Ambi will try to keep temperature below the upper bound.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "value": 22
}
```

### Away Humidity Upper
Enable Away mode and set an upper bound for humidity. Ambi will try to keep humidity below the upper bound.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "value": 70
}
```

### Temperature Mode
Enable Temperature mode on your AC

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "value": 24
}
```

### Sensor Temperature
Get latest sensor temperature data.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home"
}
```

Sample output `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "created_on": "2016-08-19T08:08:01+00:00",
  "value": 28.970001220703125
}
```

### Sensor Humidity
Get latest sensor humidity data.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home"
}
```

Sample output `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "created_on": "2016-08-19T08:08:01+00:00",
  "value": 68.08000183105469
}
```

### Current Mode
Get Ambi Climate's current working mode.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home"
}
```

Sample output `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "mode": "Away_Temperature_Upper",
  "value": 25
}
```


### Appliance States
Get Ambi Climate's last N appliance states. Limit controls the number of states to be returned, and offset shifts the results by a number of slots.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "limit": 5,
  "offset": 0
}
```

Returns an object with several parts:
- room_name: Requested room_name
- location_name: Requested location_name
- paging: Object with two attributes
  - limit: Reflects the input parameter of the same name
  - offset: Reflects the input parameter of the same name
- data: Array of state objects, where each state object has the following attributes:
  - created_on: A timestamp of the reading
  - power: Air conditioner power state (On, Off)
  - mode: Air conditioner mode (Fan, Dry, Heat, Auto, Cool)
  - swing: The operational swing state (Oscillate, Off)
  - fan: The operational fan state (Auto, High, Med-High, Med, Med-low, Low, Quiet)
  - temperature: The recorded temperature
- error: Error message


### Devices
Get users Ambi Climate device information.

No input is required

Returns an object with several parts:
- data: Array of device objects, where each device object has the following attributes:
  - device_id: Internal identifier for the device
  - room_name
  - location_name
- error: Error message


### IR Feature
Get Ambi Climate's appliance IR feature - it returns list of values rather than current state.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home"
}
```

Returns an object with several parts:
- room_name: Requested room_name
- location_name: Requested location_name
- paging: Null
- data: Multi-layer object reflect current IR settings:
  - auto: Object
    - fan:
      - ftype: Static value of select_option
      - value: Array of values (auto, high, med-high, med, med-low, low, quiet)
    - louver:
      - ftype: Static value of select_option
      - value: Array of values (oscillate, off)
    - swing:
      - ftype: Static value of select_option
      - value: Array of values (oscillate, off)
    - temperature:
      - ftype: Static value of select_option
      - value: Array of values (18 through to 30)
  - cool: As per auto
  - dry: As per auto
  - fan: As per auto
  - heat: As per auto
- error: Error message


### Deployment
Create deployment for appliance with Ambi Climate.

Sample input `msg.payload`
```json
{
  "room_name": "Bedroom",
  "location_name": "Home",
  "mode": "cool",
  "power": "on",
  "feature": {
    "temperature": 18,
    "fan": "med",
    "louver": "off"
  }
}
```
