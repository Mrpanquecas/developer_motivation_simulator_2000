import React from "react";
import { Button, Toolbar, Window, WindowContent, WindowHeader } from "react95";

const CalculateMotivationWindow = () => {
  return (
    <>
      <div className="absolute z-10 h-full w-full backdrop-blur-sm" />
      <Window className="!absolute top-1/2 z-20 -translate-y-1/2 transform">
        <WindowHeader className="flex py-4">
          <div className="flex w-full items-center justify-between">X</div>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            File
          </Button>
        </Toolbar>
        <WindowContent></WindowContent>
      </Window>
    </>
  );
};

export default CalculateMotivationWindow;
