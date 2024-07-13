import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  followerUser?: SortOrder;
  followedUser?: SortOrder;
};
