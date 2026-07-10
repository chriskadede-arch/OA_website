// SDG (Sustainable Development Goals) Mapping for Oceans Alive Foundation

export interface SDGIcon {
  number: number;
  name: string;
  color: string;
  description: string;
}

export const SDGS: Record<number, SDGIcon> = {
  1: {
    number: 1,
    name: 'No Poverty',
    color: '#E5243B',
    description: 'End poverty in all its forms everywhere',
  },
  2: {
    number: 2,
    name: 'Zero Hunger',
    color: '#DDA63A',
    description: 'End hunger, achieve food security and improved nutrition',
  },
  3: {
    number: 3,
    name: 'Good Health and Well-being',
    color: '#4C9F38',
    description: 'Ensure healthy lives and promote well-being for all',
  },
  4: {
    number: 4,
    name: 'Quality Education',
    color: '#C5192D',
    description: 'Ensure inclusive and equitable quality education',
  },
  5: {
    number: 5,
    name: 'Gender Equality',
    color: '#FF3A21',
    description: 'Achieve gender equality and empower all women and girls',
  },
  8: {
    number: 8,
    name: 'Decent Work and Economic Growth',
    color: '#A21942',
    description: 'Promote sustained, inclusive and sustainable economic growth',
  },
  13: {
    number: 13,
    name: 'Climate Action',
    color: '#3F7E44',
    description: 'Take urgent action to combat climate change',
  },
  14: {
    number: 14,
    name: 'Life Below Water',
    color: '#0A97D9',
    description: 'Conserve and sustainably use the oceans, seas and marine resources',
  },
  15: {
    number: 15,
    name: 'Life on Land',
    color: '#56C02B',
    description: 'Protect, restore and promote sustainable use of terrestrial ecosystems',
  },
  17: {
    number: 17,
    name: 'Partnerships for the Goals',
    color: '#19486A',
    description: 'Strengthen the means of implementation and revitalize partnerships',
  },
};

// Map programmes to relevant SDGs
export const PROGRAMME_SDGS: Record<string, number[]> = {
  'coral-restoration': [14, 13, 17],
  'co-management': [14, 17, 8],
  'project-reel': [17, 4],
  'uk-biodiversity': [14, 13, 17],
  'ocean-education': [4, 14, 13],
  'bmu-network': [14, 8, 17],
  'trash4cash': [5, 8, 14, 13],
  'turtle-protection': [14, 13],
  'marine-governance': [17, 14],
  'lift-network': [5, 8, 1],
  'kitchen-gardens': [2, 13, 5],
  'capacity-building': [4, 17, 8],
  'community-health': [3, 5, 8],
  'research-monitoring': [14, 13, 17],
};

// Primary SDGs for Oceans Alive Foundation
export const PRIMARY_SDGS = [14, 5, 8, 4, 13, 17];

// Get SDG color
export function getSDGColor(sdgNumber: number): string {
  return SDGS[sdgNumber]?.color || '#000000';
}

// Get SDG name
export function getSDGName(sdgNumber: number): string {
  return SDGS[sdgNumber]?.name || `SDG ${sdgNumber}`;
}
