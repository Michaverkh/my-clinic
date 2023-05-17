import { Button, Typography } from "@mui/material";
import useStore from "app/hooks/useStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";

export const MainPage: FC = observer(() => {
  const { posts, user } = useStore();

  const handleGetPosts = () => {
    posts.load();
  };
  const handleGetUser = () => {
    user.getUserData();
  };

  return (
    <>
      <Typography variant="h1" align="center">
        Hello react
      </Typography>
      <Button
        variant="dashed"
        color="secondary"
        sx={{ m: 1 }}
        onClick={handleGetPosts}
      >
        Get Posts
      </Button>
      <Button
        variant="dashed"
        color="secondary"
        sx={{ m: 1 }}
        onClick={handleGetUser}
      >
        Get User
      </Button>
      <Typography>{JSON.stringify(posts)}</Typography>
      <Typography>{JSON.stringify(user)}</Typography>
    </>
  );
});
