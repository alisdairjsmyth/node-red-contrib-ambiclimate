# node-red-contrib-ambiclimate
[![npm version](https://badge.fury.io/js/node-red-contrib-ambiclimate.svg)](https://badge.fury.io/js/node-red-contrib-ambiclimate)

A collection of [Node-RED](http://nodered.org/) nodes to control [Ambi Climate](https://www.ambiclimate.com/) devices.

## Installation
Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-ambiclimate

## OAuth Client

Register a OAuth Client in the <a href="https://api.ambiclimate.com/" target="_new">Ambi Dev Portal</a> by following the steps on the Quick Start page.  You require the Client Id and Client Secret of that client in order to use this wrapper.

## Usage
Separate nodes are provided for each of the capabilities of the LIFX HTTP Remote Control API.
Each node can be configured, or can receive settings in the triggering `msg`.

### Power Off
Power off your AC

Sample input `msg.payload`:

    {
        "room_name": "Bedroom",
        "location_name": "Home"
    }
