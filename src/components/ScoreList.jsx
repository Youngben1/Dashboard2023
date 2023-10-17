import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
    {
      city: "Abuja",
      rating: "2 open PR",
    },
    {
      city: "Jos",
      rating: "1 open PR",
    },
    {
      city: "Uyo",
      rating: "0 open PR",
    },
    {
      city: "Ilorin",
      rating: "1 open PR",
    },
    {
      city: "Ikeja",
      rating: "0 open PR",
    },
    {
      city: "Kano",
      rating: "0 open PR",
    },
  ];

const ScoreList = () => {
  return (
    <Card className="max-w-full mt-4">
    <Title>Nigerian Cities</Title>
    <List>
      {cities.map((item) => (
        <ListItem key={item.city}>
          <span>{item.city}</span>
          <span>{item.rating}</span>
        </ListItem>
      ))}
    </List>
  </Card>
  )
}

export default ScoreList