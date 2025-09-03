import UserCard from './UserCard';

export default async function HarryPotterCard() {
  return (
    <UserCard
      name="Harry Potter"
      description="The Boy Who Lived! Harry Potter is a young wizard who discovered his magical heritage on his 11th birthday and went on to defeat the Dark Lord Voldemort."
      avatarUrl="/harry_potter.jpg"
      delay={3000} // 3 seconds delay
    />
  );
}
