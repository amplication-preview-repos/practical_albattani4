export type Follower = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  followerUser: string | null;
  followedUser: string | null;
};
