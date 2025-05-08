import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@heroui/react";

export const UserCard = (props) => {
  //   const [isFollowed, setIsFollowed] = React.useState(false);
  const { image } = props;

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            color="primary"
            radius="full"
            size="md"
            src={image}
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Firman Diaz Sukmawan
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              @firman670676
            </h5>
          </div>
        </div>
        {/* <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Whatsapp" : "Whatsapp "}
        </Button> */}
      </CardHeader>
      <CardBody className="px-3 py-0 flex">
        <p className="text-small pl-px text-default-500">
          Full-stack developer
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
      </CardBody>
      <CardFooter className="gap-2">
        <div>Contact me?</div>
        <div className="flex gap-1">
          <a
            href="https://wa.me/6288801862062"
            className="flex gap-1 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <p className=" text-default-500 text-small">Whatsapp:</p>
            <i className="bi bi-whatsapp font-bold text-default-600 text-small"></i>
          </a>
        </div>
        <div className="flex gap-1">
          <a
            href="mailto:firman670676@gmail.com"
            className="flex gap-1 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <p className="text-default-500 text-small">Email:</p>
            <i className="bi bi-envelope-at font-semibold text-default-600 text-small "></i>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};
