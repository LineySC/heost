import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { BiFullscreen } from "react-icons/bi";
import { BiExitFullscreen } from "react-icons/bi";

const ToggleFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const setToogleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <Button
      onClick={setToogleFullscreen}
      colorScheme={"blue"}
      variant={"ghost"}
    >
      {isFullscreen ? <BiExitFullscreen /> : <BiFullscreen />}
    </Button>
  );
};

export default ToggleFullscreen;
