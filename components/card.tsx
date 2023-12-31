"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function CardTwitter() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px] text-left border shadow-xl">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://pbs.twimg.com/profile_images/1687986093566943232/7WnE9xm0_400x400.jpg"
          />
          <div className="flex flex-col gap-1 items-start justify-center mr-2">
            <h4 className="text-small font-semibold leading-none text-default-600">
              erlangga
            </h4>
            <h5 className="text-small tracking-tight text-default-400 ">
              @erlang_stack
            </h5>
          </div>
        </div>
        <motion.nav whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200 "
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </motion.nav>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>Software Engineer / エルランガ</p>
        <span className="pt-2">
          <span className="py-2" aria-label="computer" role="img"></span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">381</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">12</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
