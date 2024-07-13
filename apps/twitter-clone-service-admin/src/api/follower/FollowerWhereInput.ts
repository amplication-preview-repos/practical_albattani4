import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FollowerWhereInput = {
  id?: StringFilter;
  followerUser?: StringNullableFilter;
  followedUser?: StringNullableFilter;
};
