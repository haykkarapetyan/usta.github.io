// ===== Location Data =====
const locations = {
  // Milan area
  malpensaAirport: {
    name: 'Milan Malpensa Airport',
    coords: [45.6301, 8.7231],
    type: 'transport',
    emoji: '✈️',
    desc: 'Terminal 2 — arrival & departure'
  },
  villaMalpensa: {
    name: 'Hotel Villa Malpensa',
    coords: [45.6195, 8.7110],
    type: 'hotel',
    emoji: '🏨',
    desc: 'Near Malpensa Airport — 1 night'
  },
  milanoCentrale: {
    name: 'Milano Centrale',
    coords: [45.4861, 9.2044],
    type: 'transport',
    emoji: '🚆',
    desc: 'Main train station — train to Torino'
  },
  duomoMilano: {
    name: 'Duomo di Milano',
    coords: [45.4641, 9.1919],
    type: 'activity',
    emoji: '⛪',
    desc: 'Milan\'s iconic cathedral — stunning Gothic architecture'
  },
  galleriaMilano: {
    name: 'Galleria Vittorio Emanuele II',
    coords: [45.4659, 9.1900],
    type: 'activity',
    emoji: '🏛️',
    desc: 'Historic shopping gallery next to Duomo'
  },

  // Turin
  hotelDock: {
    name: 'Best Quality Hotel Dock Milano',
    coords: [45.0710, 7.6725],
    type: 'hotel',
    emoji: '🏨',
    desc: 'Via Cernaia 46 — near Porta Susa'
  },
  piazzaStatuto: {
    name: 'Piazza Statuto',
    coords: [45.0725, 7.6710],
    type: 'activity',
    emoji: '🏛️',
    desc: 'Historic square in Turin'
  },
  viaGaribaldi: {
    name: 'Via Garibaldi',
    coords: [45.0735, 7.6790],
    type: 'activity',
    emoji: '🚶',
    desc: 'One of the longest pedestrian streets in Europe'
  },
  allianz: {
    name: 'Allianz Stadium',
    coords: [45.1096, 7.6412],
    type: 'activity',
    emoji: '⚽',
    desc: 'Home of Juventus FC'
  },
  mole: {
    name: 'Mole Antonelliana',
    coords: [45.0691, 7.6933],
    type: 'viewpoint',
    emoji: '🏛️',
    desc: 'Iconic Turin landmark & Cinema Museum'
  },
  monteCappuccini: {
    name: 'Monte dei Cappuccini',
    coords: [45.0612, 7.6945],
    type: 'viewpoint',
    emoji: '🌅',
    desc: 'Best sunset viewpoint in Turin'
  },
  piazzaSanCarlo: {
    name: 'Piazza San Carlo',
    coords: [45.0679, 7.6833],
    type: 'activity',
    emoji: '☕',
    desc: 'Turin\'s "living room" — elegant cafes and architecture'
  },
  palazzoReale: {
    name: 'Palazzo Reale',
    coords: [45.0730, 7.6865],
    type: 'activity',
    emoji: '👑',
    desc: 'Royal Palace of Turin — UNESCO World Heritage'
  },
  cityCenter: {
    name: 'Piazza Castello (City Center)',
    coords: [45.0710, 7.6862],
    type: 'food',
    emoji: '🍝',
    desc: 'Heart of Turin — dining & culture'
  },
  vittorioEmanuele: {
    name: 'Turin (Vittorio Emanuele)',
    coords: [45.0680, 7.6840],
    type: 'transport',
    emoji: '🚌',
    desc: 'FlixBus stop — departure to Malpensa'
  }
};

// ===== Timeline Data =====
const days = [
  {
    id: 'day0',
    panelId: 'day-0',
    items: [
      {
        time: '22:45',
        title: 'Մեկնում Երևանից',
        location: locations.malpensaAirport,
        desc: 'Գիշերային թիռիչ Զվարթնոցից դեպի Միլան Մալպենսա',
        type: 'transport'
      }
    ]
  },
  {
    id: 'day1',
    panelId: 'day-1',
    items: [
      {
        time: '01:30',
        title: 'Arrive Milan Malpensa',
        location: locations.malpensaAirport,
        desc: 'Land at Malpensa Terminal 2. Transfer to hotel nearby.',
        type: 'transport'
      },
      {
        time: '02:00',
        title: 'Check in — Villa Malpensa',
        location: locations.villaMalpensa,
        desc: 'Rest at Hotel Villa Malpensa near the airport. Short sleep before exploring Milan.',
        type: 'hotel'
      },
      {
        time: '08:00',
        title: 'Head to Milan City Center',
        location: locations.milanoCentrale,
        desc: 'Early start! Take the Malpensa Express or transfer to the city center.',
        type: 'transport'
      },
      {
        time: '09:30',
        title: 'Duomo di Milano',
        location: locations.duomoMilano,
        desc: 'Visit Milan\'s iconic cathedral. Walk around the piazza and admire the Gothic facade.',
        type: 'activity'
      },
      {
        time: '10:30',
        title: 'Galleria Vittorio Emanuele II',
        location: locations.galleriaMilano,
        desc: 'Stroll through Italy\'s oldest shopping gallery. Beautiful mosaics and luxury shops.',
        type: 'activity'
      },
      {
        time: '12:00',
        title: 'Lunch in Milan',
        location: locations.duomoMilano,
        desc: 'Grab lunch near Duomo. Try risotto alla milanese or cotoletta.',
        type: 'food'
      },
      {
        time: '~14:30',
        title: 'Head to Milano Centrale',
        location: locations.milanoCentrale,
        desc: 'Metro or walk to Milano Centrale station for the train to Torino.',
        type: 'transport'
      },
      {
        time: '16:00',
        title: 'Train to Torino',
        location: locations.milanoCentrale,
        desc: 'Depart Milano Centrale → Torino Porta Susa. ~1h journey through Piemonte.',
        type: 'transport'
      },
      {
        time: '~17:15',
        title: 'Check in — Hotel Dock Milano',
        location: locations.hotelDock,
        desc: 'Arrive at Best Quality Hotel Dock Milano, Via Cernaia 46. Drop luggage.',
        type: 'hotel'
      },
      {
        time: '17:45',
        title: 'Walk to Piazza Statuto',
        location: locations.piazzaStatuto,
        desc: 'Start your evening walk through the city center. Beautiful Baroque architecture.',
        type: 'activity'
      },
      {
        time: '18:15',
        title: 'Stroll Via Garibaldi',
        location: locations.viaGaribaldi,
        desc: 'Explore one of Europe\'s longest pedestrian streets. Great for aperitivo.',
        type: 'activity'
      },
      {
        time: '20:49',
        title: 'Juventus Match',
        location: locations.allianz,
        desc: 'Live football at Allianz Stadium! Fino alla fine. ⚫⚪',
        type: 'activity'
      }
    ]
  },
  {
    id: 'day2',
    panelId: 'day-2',
    items: [
      {
        time: '08:30',
        title: 'Breakfast & Piazza San Carlo',
        location: locations.piazzaSanCarlo,
        desc: 'Morning coffee at one of Turin\'s most elegant squares. Try a bicerin — Turin\'s signature drink.',
        type: 'food'
      },
      {
        time: '09:30',
        title: 'Piazza Castello & Palazzo Reale',
        location: locations.palazzoReale,
        desc: 'Walk through the heart of Turin. See the Royal Palace and the grand Piazza Castello.',
        type: 'activity'
      },
      {
        time: '10:30',
        title: 'Head to Allianz Stadium',
        location: locations.allianz,
        desc: 'Take the metro or bus to the stadium area. Arrive early to soak in the atmosphere.',
        type: 'transport'
      },
      {
        time: '11:45',
        title: 'Juventus Stadium Tour',
        location: locations.allianz,
        desc: 'Behind-the-scenes tour — locker rooms, pitch side, museum, and trophy room.',
        type: 'activity'
      },
      {
        time: '13:30',
        title: 'Lunch in City Center',
        location: locations.cityCenter,
        desc: 'Traditional Piemontese lunch. Try tajarin pasta, vitello tonnato, or bagna cauda.',
        type: 'food'
      },
      {
        time: '15:30',
        title: 'Mole Antonelliana',
        location: locations.mole,
        desc: 'Visit Turin\'s most iconic building. Take the panoramic lift to the top for 360° views.',
        type: 'viewpoint'
      },
      {
        time: '18:30',
        title: 'Sunset at Monte dei Cappuccini',
        location: locations.monteCappuccini,
        desc: 'Hike up for the best sunset view over Turin with the Alps as backdrop.',
        type: 'viewpoint'
      },
      {
        time: '20:30',
        title: 'Dinner',
        location: locations.cityCenter,
        desc: 'Enjoy a relaxed dinner in the city center. Perfect end to a full day.',
        type: 'food'
      }
    ]
  },
  {
    id: 'day3',
    panelId: 'day-3',
    items: [
      {
        time: '09:00',
        title: 'Morning Walk & Coffee',
        location: locations.cityCenter,
        desc: 'Last espresso and a short walk. Soak in the Piemontese atmosphere one more time.',
        type: 'food'
      },
      {
        time: '10:30',
        title: 'Head to FlixBus Stop',
        location: locations.vittorioEmanuele,
        desc: 'Pick up luggage from hotel, walk to Vittorio Emanuele FlixBus stop. Arman departs separately from Torino.',
        type: 'transport'
      },
      {
        time: '11:15',
        title: 'FlixBus to Malpensa',
        location: locations.vittorioEmanuele,
        desc: 'Bus 467: Turin → Malpensa T2. Arrive ~13:10. (Hayk, Hovhannes & Sergey)',
        type: 'transport'
      },
      {
        time: '13:10',
        title: 'Arrive Malpensa T2',
        location: locations.malpensaAirport,
        desc: 'Arrive at Malpensa Terminal 2. Check in for flight.',
        type: 'transport'
      },
      {
        time: '15:50',
        title: 'Flight to Yerevan',
        location: locations.malpensaAirport,
        desc: 'Arrivederci, Italia! ✈️ Homeward bound.',
        type: 'transport'
      }
    ]
  }
];

// ===== Map Setup =====
const map = L.map('map', {
  zoomControl: false,
  attributionControl: true
}).setView([45.3, 8.2], 9);

L.control.zoom({ position: 'topright' }).addTo(map);

// Clean map tiles (CartoDB Positron)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ===== Create Markers =====
const markers = {};
const markerColors = {
  hotel: '#ff6b35',
  activity: '#0071e3',
  food: '#34c759',
  viewpoint: '#af52de',
  transport: '#ff9500'
};

function createIcon(type, emoji) {
  return L.divIcon({
    className: '',
    html: `<div class="custom-marker ${type}">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -22]
  });
}

// Haversine distance (km)
function getDistance(c1, c2) {
  const R = 6371;
  const dLat = (c2[0] - c1[0]) * Math.PI / 180;
  const dLon = (c2[1] - c1[1]) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(c1[0] * Math.PI / 180) * Math.cos(c2[0] * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(km) {
  return km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`;
}

// Add markers for each unique location
Object.entries(locations).forEach(([key, loc]) => {
  const marker = L.marker(loc.coords, {
    icon: createIcon(loc.type, loc.emoji)
  }).addTo(map);

  // Show distance from Turin hotel for Turin locations, from Villa Malpensa for Milan locations
  let distInfo = '';
  if (key !== 'hotelDock' && key !== 'villaMalpensa') {
    const isNearMilan = loc.coords[0] > 45.4; // rough lat check
    const refHotel = isNearMilan ? locations.villaMalpensa : locations.hotelDock;
    const refName = isNearMilan ? 'Villa Malpensa' : 'Hotel Dock';
    const dist = getDistance(refHotel.coords, loc.coords);
    distInfo = `<br><span style="color:#6e6e73;font-size:0.78rem">📍 ${formatDistance(dist)} from ${refName}</span>`;
  }

  marker.bindPopup(`<strong>${loc.emoji} ${loc.name}</strong><br>${loc.desc}${distInfo}`);
  markers[key] = marker;
});

// ===== Route Lines =====
const routeLines = {
  'day-0': L.polyline([
    // Just Yerevan departure — no visible route on Italy map
  ], { color: '#ff9500', weight: 0, opacity: 0 }),

  'day-1': L.polyline([
    locations.malpensaAirport.coords,
    locations.villaMalpensa.coords,
    locations.milanoCentrale.coords,
    locations.duomoMilano.coords,
    locations.galleriaMilano.coords,
    locations.milanoCentrale.coords,
    locations.hotelDock.coords,
    locations.piazzaStatuto.coords,
    locations.viaGaribaldi.coords,
    locations.allianz.coords
  ], { color: '#0071e3', weight: 2.5, opacity: 0.5, dashArray: '8,8' }),

  'day-2': L.polyline([
    locations.piazzaSanCarlo.coords,
    locations.palazzoReale.coords,
    locations.allianz.coords,
    locations.cityCenter.coords,
    locations.mole.coords,
    locations.monteCappuccini.coords,
    locations.cityCenter.coords
  ], { color: '#34c759', weight: 2.5, opacity: 0.5, dashArray: '8,8' }),

  'day-3': L.polyline([
    locations.cityCenter.coords,
    locations.hotelDock.coords,
    locations.vittorioEmanuele.coords,
    locations.malpensaAirport.coords
  ], { color: '#af52de', weight: 2.5, opacity: 0.5, dashArray: '8,8' })
};

// ===== Map zoom per day =====
const dayBounds = {
  'day-0': [locations.malpensaAirport.coords],
  'day-1': [
    locations.malpensaAirport.coords,
    locations.villaMalpensa.coords,
    locations.duomoMilano.coords,
    locations.milanoCentrale.coords,
    locations.hotelDock.coords,
    locations.allianz.coords
  ],
  'day-2': [
    locations.piazzaSanCarlo.coords,
    locations.palazzoReale.coords,
    locations.allianz.coords,
    locations.mole.coords,
    locations.monteCappuccini.coords
  ],
  'day-3': [
    locations.hotelDock.coords,
    locations.vittorioEmanuele.coords,
    locations.malpensaAirport.coords
  ]
};

// ===== Tabs & Timeline =====
const tabButtons = document.querySelectorAll('.tab');
const dayPanels = document.querySelectorAll('.day-panel');

function switchDay(dayId) {
  tabButtons.forEach(t => t.classList.toggle('active', t.dataset.day === dayId));
  dayPanels.forEach(p => p.classList.toggle('active', p.id === dayId));

  // Update route lines
  Object.values(routeLines).forEach(line => map.removeLayer(line));
  if (routeLines[dayId]) {
    routeLines[dayId].addTo(map);
  }

  // Fit map to day's locations
  if (dayBounds[dayId] && dayBounds[dayId].length > 1) {
    map.fitBounds(dayBounds[dayId], { padding: [50, 50], maxZoom: 14 });
  } else if (dayBounds[dayId] && dayBounds[dayId].length === 1) {
    map.setView(dayBounds[dayId][0], 13);
  }

  // Clear highlights
  document.querySelectorAll('.custom-marker').forEach(m => m.classList.remove('highlighted'));
  document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => switchDay(btn.dataset.day));
});

// ===== Build Timeline DOM =====
function getLocationKey(location) {
  return Object.keys(locations).find(k => locations[k] === location);
}

days.forEach(day => {
  const panel = document.getElementById(day.panelId);
  if (!panel) return;

  const timeline = panel.querySelector('.timeline');

  day.items.forEach(item => {
    const locKey = getLocationKey(item.location);

    // Distance badge from relevant hotel
    let distBadge = '';
    if (item.type !== 'hotel') {
      const isNearMilan = item.location.coords[0] > 45.4;
      const refHotel = isNearMilan ? locations.villaMalpensa : locations.hotelDock;
      const refName = isNearMilan ? 'Villa Malpensa' : 'Hotel Dock';
      const dist = getDistance(refHotel.coords, item.location.coords);
      distBadge = `<span class="distance">📍 ${formatDistance(dist)} from ${refName}</span>`;
    }

    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.dataset.type = item.type;
    el.dataset.locationKey = locKey;
    el.innerHTML = `
      <div class="timeline-card">
        <div class="time">${item.time}</div>
        <div class="title">${item.location.emoji} ${item.title}</div>
        <div class="location">📍 ${item.location.name}</div>
        <div class="desc">${item.desc}</div>
        ${distBadge}
      </div>
    `;

    el.addEventListener('click', () => {
      document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.custom-marker').forEach(m => m.classList.remove('highlighted'));

      el.classList.add('active');

      const marker = markers[locKey];
      if (marker) {
        map.flyTo(item.location.coords, 15, { duration: 0.6 });
        marker.openPopup();
        const markerEl = marker.getElement();
        if (markerEl) {
          markerEl.querySelector('.custom-marker').classList.add('highlighted');
        }
      }
    });

    timeline.appendChild(el);
  });
});

// ===== Hotel card click handlers =====
document.getElementById('hotel-milan-card').addEventListener('click', () => {
  const m = markers.villaMalpensa;
  map.flyTo(locations.villaMalpensa.coords, 15, { duration: 0.6 });
  m.openPopup();
});

document.getElementById('hotel-torino-card').addEventListener('click', () => {
  const m = markers.hotelDock;
  map.flyTo(locations.hotelDock.coords, 15, { duration: 0.6 });
  m.openPopup();
});

// ===== Initialize — show Day 1 =====
switchDay('day-1');
