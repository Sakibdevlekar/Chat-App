import { AvatarGroup, Avatar, Box, Stack } from "@mui/material";
import { transformImage } from "../../lib/features";

// eslint-disable-next-line react/prop-types
const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max} 
      sx={{
        position:"relative"
      }}
      >
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((src, index) => {
            return (
              <Avatar
                key={index}
                src={transformImage(src)}
                alt={`Avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${0.8 + index}rem`,
                  },
                }}
              />
            );
          })}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
