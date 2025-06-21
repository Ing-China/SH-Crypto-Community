export interface CommunityStats {
  platform: string;
  members: number;
  icon: string;
  joinUrl: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  features: string[];
  icon: string;
  popular?: boolean;
}
