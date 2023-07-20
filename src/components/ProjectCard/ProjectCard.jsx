import { Card, CardFooter, CardHeader, Image, Button, Chip } from "@nextui-org/react";

export const ProjectCard = ({ title, chips, description, deploy, img, github }) => {
  const handleClickDeploy = () => {
    window.open(deploy, "_blank");
  };

  const handleClickRepo = () => {
    window.open(github, "_blank");
  };

  return (
    <Card isFooterBlurred className="md:w-[40%] h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex flex-wrap items-start gap-2">
        {chips.map((chip) => {
          return (
            <Chip key={chip} color="primary" variant="shadow">
              {chip}
            </Chip>
          );
        })}
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={img}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="md:text-lg kicaRegular text-white/80">{title}</p>
            <p className="text-tiny kicaLight text-white/80">{description}</p>
          </div>
        </div>
        <Button
          radius="full"
          size="sm"
          color="primary"
          onPress={handleClickDeploy}
          className="hover:scale-110 mx-2"
        >
          Deploy
        </Button>
        <Button
          radius="full"
          size="sm"
          color="secondary"
          onPress={handleClickRepo}
          className="hover:scale-110 mx-2"
        >
          GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};
