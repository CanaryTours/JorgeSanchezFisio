var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-descanso",
      "name": "Sala de descanso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -2.4885371904103852,
          "pitch": 0.39414295043960834,
          "rotation": 12.566370614359176,
          "target": "1-zona-de-entrenamiento"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-zona-de-entrenamiento",
      "name": "Zona de entrenamiento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6278274593235231,
          "pitch": 0.34432033407745166,
          "rotation": 6.283185307179586,
          "target": "0-sala-de-descanso"
        },
        {
          "yaw": 2.366876837587749,
          "pitch": 0.3277711672862935,
          "rotation": 0.7853981633974483,
          "target": "2-zona-de-camilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zona-de-camilla",
      "name": "Zona de camilla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7227965464035151,
          "pitch": 0.6889024174256377,
          "rotation": 5.497787143782138,
          "target": "1-zona-de-entrenamiento"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Jorge Sánchez Fisioterapeuta",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
