import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Sales</Text>
        <BadgeDelta deltaType="moderateIncrease">15.3%</BadgeDelta>
      </Flex>
      <Metric>$ 34,743</Metric>
    </Card>
  );
};

export default CardItem;
