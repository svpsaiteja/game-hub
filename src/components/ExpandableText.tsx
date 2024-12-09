import { Button, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children: text }: Props) => {
  if (!text) return null;

  if (text.length < 300) return <Text>{text}</Text>;

  const [isExpanded, setIsExpanded] = useState(false);

  const summary = isExpanded ? text : `${text.slice(0, 300)}...`;

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        variant="solid"
        colorScheme="yellow"
        fontWeight="bold"
        size="xs"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
