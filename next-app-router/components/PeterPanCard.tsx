import UserCard from './UserCard';

export default async function PeterPanCard() {
  return (
    <UserCard
      name="Peter Pan"
      description="The boy who wouldn't grow up! Peter Pan lives in Neverland with his fairy companion Tinker Bell and leads the Lost Boys on countless magical adventures."
      avatarUrl="/perter_pan.jpeg"
      delay={1000} // 1 second delay
    />
  );
}
