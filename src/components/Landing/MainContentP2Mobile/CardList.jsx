import Card from "./Card";

const dataCard = [
  {
    icon: "/src/assets/image/bag-2.png",
    description:
      "لورم ایپسوم ستفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی اول",
  },
  {
    icon: "/src/assets/image/profile-tick.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی دوم",
  },
  {
    icon: "/src/assets/image/timer.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحن و سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی سوم",
  },
  {
    icon: "/src/assets/image/box.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحانن که لازم است ",
    title: "من هستم تایتل تستی سوم",
  },
];
function CardList() {
  return (
    <div className="flex flex-col md:flex-row md:gap-8">
      {dataCard.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default CardList;
