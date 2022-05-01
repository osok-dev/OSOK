import { Button } from "@nextui-org/react";
import { TransactionStatus } from "@usedapp/core";
import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  state: TransactionStatus;
  handleSubmit: () => void;
  color?: string;
  onSuccess?: () => void;
}
export const TransactionButton: React.FC<Props> = ({
  text,
  loading,
  setLoading,
  state,
  handleSubmit,
  color,
  onSuccess,
}) => {
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const { status, errorMessage } = state;

  useEffect(() => {
    if (status === "Exception") {
      setLoading(false);
      alert(`There was an issue making this transaction. ${errorMessage}`);
    } else if (status === "PendingSignature") {
      setLoading(true);
      setLoadingMessage("Pending Signature...");
    } else if (status === "None") {
      setLoading(false);
    } else if (status === "Fail") {
      setLoading(false);
      alert(`There was an issue making this transaction. ${errorMessage}`);
    } else if (status === "Mining") {
      setLoadingMessage("Mining...");
    } else if (status === "Success") {
      setLoading(false);
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [status, errorMessage, setLoading, onSuccess]);

  return (
    <Button
      disabled={loading}
      onClick={handleSubmit}
      shadow
      color={color as any}
    >
      {loading ? loadingMessage : text}
    </Button>
  );
};
