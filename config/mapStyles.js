const mapStyles = [
  {
    'featureType': 'all',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.text',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'saturation': 36
      },
      {
        'color': '#000000'
      },
      {
        'lightness': 40
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'color': '#000000'
      },
      {
        'lightness': 16
      }
    ]
  },
  {
    'featureType': 'all',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 20
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 17
      },
      {
        'weight': 1.2
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'administrative.country',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'saturation': '25'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 20
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'hue': '#ff0000'
      }
    ]
  },
  {
    'featureType': 'landscape.man_made',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'color': '#39434e'
      }
    ]
  },
  {
    'featureType': 'landscape.natural',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#363e48'
      }
    ]
  },
  {
    'featureType': 'landscape.natural.landcover',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#3a424b'
      }
    ]
  },
  {
    'featureType': 'landscape.natural.terrain',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#333c47'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 21
      }
    ]
  },
  {
    'featureType': 'poi.attraction',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.business',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.government',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#395248'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.school',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi.sports_complex',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'lightness': '-10'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#728597'
      },
      {
        'lightness': 17
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#141a1d'
      },
      {
        'lightness': 29
      },
      {
        'weight': '1.14'
      },
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 18
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#6e7a86'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 16
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#626d77'
      }
    ]
  },
  {
    'featureType': 'transit',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#000000'
      },
      {
        'lightness': 19
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#0f252e'
      },
      {
        'lightness': 17
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#487390'
      }
    ]
  }
];

export default mapStyles;