import { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};


const SalesItem = () => {
    const [ selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Card max-w-full mx-auto>
        <Flex className="flex-col space-x-8 lg:flex-row">
            <Title>Overview</Title>
            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                <TabList variant="solid">
                    <Tab icon={ChartPieIcon}>Chart</Tab>
                    <Tab icon={ViewListIcon}>List</Tab>
                </TabList>
            </TabGroup>
        </Flex>
        <Text className="mt-8">Portfolio Value</Text>
        <Metric>$25,465</Metric>
        <Divider />
        <Text className="font-bold">Asset Allocation</Text>
        <Text>Nigeria's Data class - Tier 2 holdings</Text>
        {selectedIndex === 0 ? (<DonutChart data={stocks} valueFormatter={dataFormatter} showAnimation={false} category="value" index="name" className="mt-6" />) : (
            <>
                <Flex className="mt-8" justifyContent="between">
                    <Text className="truncate font-bold">Stocks</Text>
                    <Text>Recent transactions</Text>
                </Flex>
                <List className="mt-4">
                    {stocks.map((stock) => (
                        <ListItem key={stock.name}>
                            <Text>{stock.name}</Text>
                            <Flex className="space-x-3" justifyContent="end">
                                <Text>
                                    $ {Intl.NumberFormat("us").format(stock.value).toString()}
                                </Text>
                            </Flex>
                        </ListItem>
                    ))}
                </List>
            </>
        )}
        <Flex className="mt-6 pt-4 border-t">
            <Button size="xs" variant="light" icon={ArrowRightIcon} iconPosition="right">
                View more
            </Button>
        </Flex>
    </Card>
  )
}

export default SalesItem