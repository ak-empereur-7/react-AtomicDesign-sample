import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organizms/user/UserCard";
import "./styles.css";

const user = {
  name: "Dan",
  image: "https://source.unsplash.com/yihlaRCCvd4",
  email: "aaaa@aaa.com",
  tel: "080-1234-5678",
  company: {
    name: "日本株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>ぼたん</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
