import {
  Button,
  Card,
  FormElement,
  Input,
  Loading,
  Spacer,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Text } from "@nextui-org/react";

export const CreateJob: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      alert("Please provide a contact address");
    } else {
      setLoading(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Card>
        <Spacer />
        <Text h3>Create Job</Text>
        <Spacer />
        <Input
          type="text"
          label="Contract address"
          value={value}
          onChange={handleChange}
          placeholder=""
          clearable={!loading}
          bordered
          disabled={loading}
          contentRight={loading && <Loading size="xs" />}
        />
        <Spacer />
        <Button disabled={loading} onClick={handleSubmit}>
          {loading ? "Awaiting signature..." : "Submit"}
        </Button>
        <Spacer />
      </Card>
    </>
  );
};
