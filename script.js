// ===== Location Data =====
const locations = {
  hotel: {
    name: 'Hotel (Via Cernaia 46)',
    coords: [45.0710, 7.6725],
    type: 'hotel',
    emoji: '🏨',
    desc: 'Near Porta Susa station'
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
  cityCenter: {
    name: 'Piazza Castello (City Center)',
    coords: [45.0710, 7.6862],
    type: 'food',
    emoji: '🍝',
    desc: 'Heart of Turin — dining & culture'
  }
};

// ===== Timeline Data =====
const days = [
  {
    id: 'day1',
    label: 'Day 1',
    date: 'April 19',
    subtitle: 'Arrival & Juventus Match',
    items: [
      {
        time: '~17:00',
        title: 'Arrive in Torino',
        location: locations.hotel,
        desc: 'Check in at the hotel near Porta Susa. Drop luggage and get ready to explore.',
        type: 'hotel'
      },
      {
        time: '17:30',
        title: 'Walk to Piazza Statuto',
        location: locations.piazzaStatuto,
        desc: 'Start your evening walk through the city center. Beautiful Baroque architecture.',
        type: 'activity'
      },
      {
        time: '18:00',
        title: 'Stroll Via Garibaldi',
        location: locations.viaGaribaldi,
        desc: 'Explore one of Europe\'s longest pedestrian streets. Great for window shopping and aperitivo.',
        type: 'activity'
      },
      {
        time: '20:49',
        title: 'Juventus Match',
        location: locations.allianz,
        desc: 'Live football at Allianz Stadium! Fino alla fine.',
        type: 'activity'
      }
    ]
  },
  {
    id: 'day2',
    label: 'Day 2',
    date: 'April 20',
    subtitle: 'Stadium Tour, Mole & Sunset',
    items: [
      {
        time: '11:45',
        title: 'Juventus Stadium Tour',
        location: locations.allianz,
        desc: 'Behind-the-scenes tour of Allianz Stadium — locker rooms, pitch side, and museum.',
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
    label: 'Day 3',
    date: 'April 21',
    subtitle: 'Morning Walk & Departure',
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
        title: 'Head Back to Hotel',
        location: locations.hotel,
        desc: 'Pick up luggage, check out.',
        type: 'hotel'
      },
      {
        time: '~11:15',
        title: 'Departure',
        location: locations.hotel,
        desc: 'Arrivederci, Torino! Until next time.',
        type: 'hotel'
      }
    ]
  }
];

// ===== Map Setup =====
const map = L.map('map', {
  zoomControl: false,
  attributionControl: true
}).setView([45.0735, 7.6850], 13);

// Zoom control on the right
L.control.zoom({ position: 'topright' }).addTo(map);

// Clean map tiles (CartoDB Positron — light, minimal style)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ===== Create Markers =====
const markers = {};

function createIcon(type, emoji) {
  return L.divIcon({
    className: '',
    html: `<div class="custom-marker ${type}">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -22]
  });
}

// Calculate distance between two coords (Haversine, returns km)
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

  const distFromHotel = key !== 'hotel'
    ? `<br><span style="color:#6e6e73;font-size:0.78rem">📍 ${formatDistance(getDistance(locations.hotel.coords, loc.coords))} from hotel</span>`
    : '';

  marker.bindPopup(`<strong>${loc.emoji} ${loc.name}</strong><br>${loc.desc}${distFromHotel}`);
  markers[key] = marker;
});

// ===== Route Lines =====
// Day 1 route
const day1Route = [
  locations.hotel.coords,
  locations.piazzaStatuto.coords,
  locations.viaGaribaldi.coords,
  locations.allianz.coords
];

// Day 2 route
const day2Route = [
  locations.allianz.coords,
  locations.cityCenter.coords,
  locations.mole.coords,
  locations.monteCappuccini.coords,
  locations.cityCenter.coords
];

// Day 3 route
const day3Route = [
  locations.cityCenter.coords,
  locations.hotel.coords
];

const routeLines = {
  day1: L.polyline(day1Route, { color: '#0071e3', weight: 2.5, opacity: 0.5, dashArray: '8,8' }),
  day2: L.polyline(day2Route, { color: '#34c759', weight: 2.5, opacity: 0.5, dashArray: '8,8' }),
  day3: L.polyline(day3Route, { color: '#af52de', weight: 2.5, opacity: 0.5, dashArray: '8,8' })
};

// ===== Tabs & Timeline =====
const tabButtons = document.querySelectorAll('.tab');
const dayPanels = document.querySelectorAll('.day-panel');
let activeRouteKey = 'day1';

function switchDay(dayId) {
  // Update tabs
  tabButtons.forEach(t => t.classList.toggle('active', t.dataset.day === dayId));
  dayPanels.forEach(p => p.classList.toggle('active', p.id === dayId));

  // Update route lines
  Object.values(routeLines).forEach(line => map.removeLayer(line));
  const routeKey = dayId.replace('-', '');
  if (routeLines[routeKey]) {
    routeLines[routeKey].addTo(map);
    activeRouteKey = routeKey;
  }

  // Clear highlighted markers
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
  const panel = document.getElementById(`day-${day.id.replace('day', '')}`);
  if (!panel) return;

  const timeline = panel.querySelector('.timeline');

  day.items.forEach((item, idx) => {
    const locKey = getLocationKey(item.location);
    const distFromHotel = locKey !== 'hotel'
      ? `<span class="distance">📍 ${formatDistance(getDistance(locations.hotel.coords, item.location.coords))} from hotel</span>`
      : '';

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
        ${distFromHotel}
      </div>
    `;

    // Click to highlight on map
    el.addEventListener('click', () => {
      // Deactivate all items
      document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.custom-marker').forEach(m => m.classList.remove('highlighted'));

      // Activate this item
      el.classList.add('active');

      // Highlight marker on map
      const marker = markers[locKey];
      if (marker) {
        map.flyTo(item.location.coords, 15, { duration: 0.6 });
        marker.openPopup();
        // Highlight the marker icon
        const markerEl = marker.getElement();
        if (markerEl) {
          markerEl.querySelector('.custom-marker').classList.add('highlighted');
        }
      }
    });

    timeline.appendChild(el);
  });
});

// ===== Initialize =====
// Show Day 1 route on load
switchDay('day-1');

// Fit map to all markers
const allCoords = Object.values(locations).map(l => l.coords);
map.fitBounds(allCoords, { padding: [40, 40] });
