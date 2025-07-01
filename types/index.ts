export interface CommunityStatsCardProps {
  item: {
    id: number;
    platform: string;
    members: number;
    icon: string;
    platformType: string;
    joinUrl: string;
    badge: string;
  };
}

export interface FeatureCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}

export interface FoundingCardProps {
  item: {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    telegram: string;
    facebook: string;
    twitter: string;
  };
}

export interface ModeratorCardProps {
  item: {
    id?: number;
    name: string;
    role: string;
    image: string;
    telegram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface EventCardProps {
  item: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    attendees: number;
    organizers: string[];
    image: string;
    category: string;
    sponsors?: string[];
  };
}

export interface EventCategoryProps {
  item: {
    id: number;
    label: string;
    count: number;
  };
  activeCategory?: number;
  onCategoryChange: (categoryId: number) => void;
}

export interface PartnerCardProps {
  item: {
    name: string;
    logo: string;
    tier: string;
    sponsorship_count: number;
    website: string;
    description: string;
  };
}

export interface PartnerCategoryProps {
  item: {
    id: number;
    label: string;
    count: number;
  };
  activeCategory?: number;
  onCategoryChange: (categoryId: number) => void;
}
