"use client";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Avatar alt={name} src={url} sx={{ width: width, height: height }} />
      )}
    </>
  );
};

export default AvatarComponent;
