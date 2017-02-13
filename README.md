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
