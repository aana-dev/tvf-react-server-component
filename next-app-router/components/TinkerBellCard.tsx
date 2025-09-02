import UserCard from './UserCard';

export default async function TinkerBellCard() {
  return (
    <UserCard
      name="Tinker Bell"
      description="A spirited and feisty fairy from Pixie Hollow! Tinker Bell is Peter Pan's loyal companion and one of Disney's most beloved characters, known for her magical pixie dust."
      avatarUrl="/tinker_bell.png"
      delay={2000} // 2 seconds delay
    />
  );
}
