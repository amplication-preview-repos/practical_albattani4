import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FollowerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="followerUser" source="followerUser" />
        <TextInput label="followedUser" source="followedUser" />
      </SimpleForm>
    </Edit>
  );
};
