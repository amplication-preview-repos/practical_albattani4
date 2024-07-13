import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="followerUser" source="followerUser" />
        <TextInput label="followedUser" source="followedUser" />
      </SimpleForm>
    </Create>
  );
};
