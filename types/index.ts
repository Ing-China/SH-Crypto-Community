export interface CommunityStatsCardProps {
  item: {
    id: number;
    platform: string;
    members: number;
    icon: string;
    joinUrl: string;
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
    maxAttendees: number;
    status: string;
    price: string;
    organizer: string;
    featured?: boolean;
    image: string;
    category: string;
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
