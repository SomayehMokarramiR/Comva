import Card from "./Card";

const dataCard = [
  {
    icon: "/src/assets/image/bag-2.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی اول",
  },
  {
    icon: "/src/assets/image/profile-tick.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی دوم",
  },
  {
    icon: "/src/assets/image/timer.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی سوم",
  },
  {
    icon: "/src/assets/image/box.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    title: "من هستم تایتل تستی سوم",
  },
];
function CardList() {
  return (
    <div>
      {dataCard.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default CardList;
