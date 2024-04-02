"use client";

import { Avatar } from "@mui/material";
import React from "react";

const AvatarComponent = ({
  url,
  name,
  height,
  width,
}: {
  url: string;
  name: string;
  height: string;
  width: string;
}) => {
  console.log("cinsoe")
  return (
      <Avatar
        alt={name}
        src={url}
        sx={{ width: width, height: height }}
      />
  );
};

export default AvatarComponent;
