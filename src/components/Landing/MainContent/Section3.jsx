import H1 from "../../../ui/H1";
import CardList from "../MainContentP2Mobile/CardList";

function Section3() {
  return (
    <div className="mt-">
      <H1>جدیدترین مدل مدیریت سبد خریدها</H1>
      <p>
        بیش از صدها فروشگاه سبد خریدهای خود را در کارت ساز با امکانات متفاوت این
        سامانه مدیریت کنید .
      </p>
      <div className="mt-0 md:mt-[69px]">
        <CardList />
      </div>
    </div>
  );
}

export default Section3;
