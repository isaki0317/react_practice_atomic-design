import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "../src/styles.css";

const user = {
  name: "isaki",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  email: "example@example.com",
  phone: "000-0000-0000",
  company: {
    name: "オースタンス"
  },
  website: "https://github.com/isaki0317"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
