// Arc Presets — The Product Primitive
// Each arc defines a different experience from the same track library.
// Arc = product. Energy bands = foundation. Different arcs = different experiences.
//
// Format: control points are { t: 0-1 (normalized time), e: 1-10 (energy) }
// The engine interpolates between points. Phases are semantic labels for UI/logging.

window.ARC_PRESETS = {

  peak_night: {
    name: 'Peak Night',
    description: 'Classic arc — build to a peak, ride it, bring it down. The night everyone remembers.',
    defaultDuration: 30,
    durationRange: [20, 120],
    phases: [
      { name: 'arrive',     start: 0,    end: 0.10, label: 'Meet the Room' },
      { name: 'settle',     start: 0.10, end: 0.25, label: 'Find Your Vibe' },
      { name: 'build',      start: 0.25, end: 0.50, label: 'First Nudge' },
      { name: 'peak',       start: 0.50, end: 0.70, label: 'The Moment' },
      { name: 'ride',       start: 0.70, end: 0.80, label: 'Riding It' },
      { name: 'descend',    start: 0.80, end: 0.92, label: 'Descent' },
      { name: 'resolve',    start: 0.92, end: 1.00, label: 'Resolution' }
    ],
    points: [
      { t: 0,    e: 3.5 },
      { t: 0.10, e: 3.5 },
      { t: 0.25, e: 4.0 },
      { t: 0.40, e: 5.5 },
      { t: 0.50, e: 7.0 },
      { t: 0.62, e: 8.5 },
      { t: 0.70, e: 8.0 },
      { t: 0.80, e: 6.0 },
      { t: 0.92, e: 3.5 },
      { t: 1.00, e: 2.0 }
    ]
  },

  journey: {
    name: 'Journey',
    description: 'Multiple peaks and valleys — exploratory, genre-crossing, never predictable.',
    defaultDuration: 45,
    durationRange: [30, 180],
    phases: [
      { name: 'departure',  start: 0,    end: 0.12, label: 'Departure' },
      { name: 'first_hill', start: 0.12, end: 0.30, label: 'First Horizon' },
      { name: 'valley',     start: 0.30, end: 0.40, label: 'The Valley' },
      { name: 'ascent',     start: 0.40, end: 0.60, label: 'The Climb' },
      { name: 'summit',     start: 0.60, end: 0.72, label: 'Summit' },
      { name: 'descent',    start: 0.72, end: 0.85, label: 'Coming Down' },
      { name: 'home',       start: 0.85, end: 1.00, label: 'Homecoming' }
    ],
    points: [
      { t: 0,    e: 3.0 },
      { t: 0.12, e: 4.0 },
      { t: 0.20, e: 6.5 },
      { t: 0.30, e: 5.0 },
      { t: 0.35, e: 3.5 },
      { t: 0.45, e: 5.5 },
      { t: 0.55, e: 7.5 },
      { t: 0.65, e: 9.0 },
      { t: 0.72, e: 7.0 },
      { t: 0.80, e: 5.0 },
      { t: 0.90, e: 3.0 },
      { t: 1.00, e: 2.0 }
    ]
  },

  wind_down: {
    name: 'Wind Down',
    description: 'Start warm, glide to stillness. After-party, late night, decompression.',
    defaultDuration: 30,
    durationRange: [15, 90],
    phases: [
      { name: 'warmth',     start: 0,    end: 0.20, label: 'Still Warm' },
      { name: 'ease',       start: 0.20, end: 0.45, label: 'Easing Off' },
      { name: 'drift',      start: 0.45, end: 0.75, label: 'Drifting' },
      { name: 'stillness',  start: 0.75, end: 1.00, label: 'Stillness' }
    ],
    points: [
      { t: 0,    e: 6.0 },
      { t: 0.10, e: 5.5 },
      { t: 0.25, e: 4.5 },
      { t: 0.45, e: 3.5 },
      { t: 0.65, e: 2.5 },
      { t: 0.80, e: 2.0 },
      { t: 0.90, e: 1.5 },
      { t: 1.00, e: 1.0 }
    ]
  },

  ritual: {
    name: 'Ritual',
    description: 'Repeating crescendos — hypnotic, trance-like, each wave builds higher.',
    defaultDuration: 40,
    durationRange: [25, 120],
    phases: [
      { name: 'invocation', start: 0,    end: 0.10, label: 'Invocation' },
      { name: 'wave_1',     start: 0.10, end: 0.35, label: 'First Wave' },
      { name: 'wave_2',     start: 0.35, end: 0.60, label: 'Second Wave' },
      { name: 'wave_3',     start: 0.60, end: 0.85, label: 'Third Wave' },
      { name: 'dissolution',start: 0.85, end: 1.00, label: 'Dissolution' }
    ],
    points: [
      { t: 0,    e: 2.5 },
      { t: 0.10, e: 3.0 },
      { t: 0.20, e: 6.0 },
      { t: 0.30, e: 3.5 },
      { t: 0.40, e: 4.0 },
      { t: 0.50, e: 7.5 },
      { t: 0.58, e: 4.0 },
      { t: 0.65, e: 5.0 },
      { t: 0.78, e: 9.0 },
      { t: 0.85, e: 5.0 },
      { t: 0.92, e: 3.0 },
      { t: 1.00, e: 1.5 }
    ]
  },

  festival: {
    name: 'Festival',
    description: 'Sustained high energy with breathing moments. Tomorrowland main stage energy.',
    defaultDuration: 60,
    durationRange: [30, 180],
    phases: [
      { name: 'gates_open', start: 0,    end: 0.08, label: 'Gates Open' },
      { name: 'ignition',   start: 0.08, end: 0.20, label: 'Ignition' },
      { name: 'main_stage', start: 0.20, end: 0.55, label: 'Main Stage' },
      { name: 'headline',   start: 0.55, end: 0.80, label: 'Headline Set' },
      { name: 'encore',     start: 0.80, end: 0.92, label: 'Encore' },
      { name: 'afterglow',  start: 0.92, end: 1.00, label: 'Afterglow' }
    ],
    points: [
      { t: 0,    e: 4.0 },
      { t: 0.08, e: 5.5 },
      { t: 0.15, e: 7.0 },
      { t: 0.25, e: 8.0 },
      { t: 0.35, e: 7.0 },
      { t: 0.40, e: 8.5 },
      { t: 0.50, e: 7.5 },
      { t: 0.60, e: 9.0 },
      { t: 0.70, e: 8.5 },
      { t: 0.80, e: 9.5 },
      { t: 0.88, e: 7.0 },
      { t: 0.95, e: 4.0 },
      { t: 1.00, e: 2.5 }
    ]
  },

  intimate: {
    name: 'Intimate',
    description: 'Low energy but emotionally intense. Small room, close friends, deep conversation.',
    defaultDuration: 30,
    durationRange: [20, 90],
    phases: [
      { name: 'gathering',  start: 0,    end: 0.15, label: 'Gathering' },
      { name: 'opening_up', start: 0.15, end: 0.40, label: 'Opening Up' },
      { name: 'depth',      start: 0.40, end: 0.70, label: 'Going Deep' },
      { name: 'surfacing',  start: 0.70, end: 0.88, label: 'Surfacing' },
      { name: 'parting',    start: 0.88, end: 1.00, label: 'The Parting' }
    ],
    points: [
      { t: 0,    e: 2.5 },
      { t: 0.15, e: 3.0 },
      { t: 0.30, e: 4.0 },
      { t: 0.45, e: 5.0 },
      { t: 0.55, e: 5.5 },
      { t: 0.70, e: 4.5 },
      { t: 0.80, e: 3.5 },
      { t: 0.90, e: 2.5 },
      { t: 1.00, e: 1.5 }
    ]
  },

  wake: {
    name: 'Wake',
    description: 'Morning energy builder. Gentle start, sustained climb, no crash.',
    defaultDuration: 25,
    durationRange: [15, 60],
    phases: [
      { name: 'stirring',   start: 0,    end: 0.15, label: 'Stirring' },
      { name: 'warming',    start: 0.15, end: 0.35, label: 'Warming Up' },
      { name: 'momentum',   start: 0.35, end: 0.65, label: 'Momentum' },
      { name: 'full_power', start: 0.65, end: 0.85, label: 'Full Power' },
      { name: 'sustain',    start: 0.85, end: 1.00, label: 'Sustain' }
    ],
    points: [
      { t: 0,    e: 1.5 },
      { t: 0.10, e: 2.0 },
      { t: 0.20, e: 3.0 },
      { t: 0.35, e: 4.5 },
      { t: 0.50, e: 5.5 },
      { t: 0.65, e: 7.0 },
      { t: 0.80, e: 7.5 },
      { t: 0.90, e: 7.5 },
      { t: 1.00, e: 7.0 }
    ]
  }
};
