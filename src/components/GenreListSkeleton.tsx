import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = Array.from({ length: 15 }, (_, index) => index + 1);
  return (
    <List>
      {skeletons.map((s) => (
        <ListItem key={s} paddingY={"5px"}>
          <HStack>
            <Skeleton width={"32px"} height={"32px"} borderRadius={"8px"} />
            <SkeletonText flex={1} noOfLines={1} />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
