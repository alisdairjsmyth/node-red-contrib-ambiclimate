/**
 * Copyright 2017 Alisdair Smyth
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
module.exports = function(RED) {
  "use strict";
  var ac = require("node-ambiclimate");

  function ambiConfig(n) {
    RED.nodes.createNode(this, n);
    this.name = n.name;

    this.client = new ac(n.clientId, n.clientSecret, n.username, n.password);
  }
  RED.nodes.registerType("ambi-config", ambiConfig);

  function ambiPowerOff(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var settings = {
        room_name: room_name,
        location_name: location_name
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
      } else {
        node.log("Power Off: " + room_name + "@" + location_name);
        client.off(settings, function(err, data) {
          if (err) {
            node.error(err);
            return;
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-power-off", ambiPowerOff);

  function ambiComfort(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var settings = {
        room_name: room_name,
        location_name: location_name
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
      } else {
        node.log("Comfort Mode: " + room_name + "@" + location_name);
        client.comfort(settings, function(err, data) {
          if (err) {
            node.error(err);
            return;
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-comfort-mode", ambiComfort);

  function ambiAwayTempLower(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var value =
        typeof msg.payload.value != "undefined" ? msg.payload.value : n.value;
      var settings = {
        room_name: room_name,
        location_name: location_name,
        value: value
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
      } else {
        node.log(
          "Away Temperature Lower: " +
            room_name +
            "@" +
            location_name +
            " " +
            value +
            "C"
        );
        client.away_temperature_lower(settings, function(err, data) {
          if (err) {
            node.error(err);
            return;
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-away-temp-lower", ambiAwayTempLower);

  function ambiAwayTempUpper(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var value =
        typeof msg.payload.value != "undefined" ? msg.payload.value : n.value;
      var settings = {
        room_name: room_name,
        location_name: location_name,
        value: value
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
      } else {
        node.log(
          "Away Temperature Upper: " +
            room_name +
            "@" +
            location_name +
            " " +
            value +
            "C"
        );
        client.away_temperature_upper(settings, function(err, data) {
          if (err) {
            node.error(err);
            return;
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-away-temp-upper", ambiAwayTempUpper);

  function ambiAwayHumidityUpper(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var value =
        typeof msg.payload.value != "undefined" ? msg.payload.value : n.value;
      var settings = {
        room_name: room_name,
        location_name: location_name,
        value: value
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
      } else {
        node.log(
          "Away Humidity Upper: " +
            room_name +
            "@" +
            location_name +
            " " +
            value +
            "%"
        );
        client.away_humidity_upper(settings, function(err, data) {
          if (err) {
            node.error(err);
            return;
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-away-humidity-upper", ambiAwayHumidityUpper);

  function ambiTempMode(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var value =
        typeof msg.payload.value != "undefined" ? msg.payload.value : n.value;
      var settings = {
        room_name: room_name,
        location_name: location_name,
        value: value
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
      } else {
        node.log(
          "Temperature Mode: " +
            room_name +
            "@" +
            location_name +
            " " +
            value +
            "C"
        );
        client.temperature(settings, function(err, data) {
          if (err) {
            node.error(err);
            return;
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-temp-mode", ambiTempMode);

  function ambiCurrentTemp(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var settings = {
        room_name: room_name,
        location_name: location_name
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
        return;
      } else {
        node.log("Sensor Temperature: " + room_name + "@" + location_name);
        client.sensor_temperature(settings, function(err, data) {
          if (err) {
            node.error(err);
          } else {
            msg.payload = {
              room_name: room_name,
              location_name: location_name,
              created_on: data[0].created_on,
              value: data[0].value
            };
            node.send(msg);
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-sensor-temp", ambiCurrentTemp);

  function ambiCurrentHumidity(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var settings = {
        room_name: room_name,
        location_name: location_name
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
        return;
      } else {
        node.log("Sensor Humidity: " + room_name + "@" + location_name);
        client.sensor_humidity(settings, function(err, data) {
          if (err) {
            node.error(err);
          } else {
            msg.payload = {
              room_name: room_name,
              location_name: location_name,
              created_on: data[0].created_on,
              value: data[0].value
            };
            node.send(msg);
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-sensor-humidity", ambiCurrentHumidity);

  function ambiCurrentMode(n) {
    RED.nodes.createNode(this, n);

    // Retrieve the config node
    var oauthClient = RED.nodes.getNode(n.oauthClient);
    var client = oauthClient.client;
    var node = this;

    this.on("input", function(msg) {
      var room_name =
        typeof msg.payload.room_name != "undefined"
          ? msg.payload.room_name
          : n.room_name;
      var location_name =
        typeof msg.payload.location_name != "undefined"
          ? msg.payload.location_name
          : n.location_name;
      var settings = {
        room_name: room_name,
        location_name: location_name
      };

      if (!room_name || !location_name) {
        node.error(
          RED._("ambi.error.unspecified_device") +
            room_name +
            "@" +
            location_name
        );
        return;
      } else {
        node.log("Current Mode: " + room_name + "@" + location_name);
        client.mode(settings, function(err, data) {
          if (err) {
            node.error(err);
          } else {
            msg.payload = {
              room_name: room_name,
              location_name: location_name,
              mode: data.mode,
              value: data.value
            };
            node.send(msg);
          }
        });
      }
    });
  }
  RED.nodes.registerType("ambi-mode", ambiCurrentMode);
};
