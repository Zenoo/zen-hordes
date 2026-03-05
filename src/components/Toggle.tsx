import { FormControlLabel, Switch, Typography } from "@mui/material";
import React from "react";
import { Store } from "../contentScript/store";
import { setFeature } from "../utils/popup/setFeature";

export type ToggleProps = {
  data: Store;
  feature: keyof Store;
  getter?: (data: Store) => boolean;
  setter: React.Dispatch<React.SetStateAction<Store>>;
  setterFormatter?: (value: boolean) => unknown;
  label: string;
};

export const Toggle = ({
  data,
  feature,
  getter,
  setter,
  setterFormatter,
  label,
}: ToggleProps) => {
  const value = getter ? getter(data) : Boolean(data[feature]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setter((prev) => ({
      ...prev,
      [feature]: setterFormatter
        ? setterFormatter(event.target.checked)
        : event.target.checked,
    }));
    await setFeature(feature, event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={value} onChange={handleChange} size="small" />}
      label={
        <Typography variant="body2" sx={{ ml: 0.5 }}>
          {label}
        </Typography>
      }
      sx={{ mx: 1 }}
    />
  );
};
