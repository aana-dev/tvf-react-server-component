import Image from 'next/image';

interface UserCardProps {
  name: string;
  description: string;
  avatarUrl: string;
  delay?: number;
}

// Server component that simulates API delay
export default async function UserCard({
  name,
  description,
  avatarUrl,
  delay = 0,
}: UserCardProps) {
  // Simulate API delay
  if (delay > 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm transform transition-transform duration-200 hover:scale-105">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src={avatarUrl}
            alt={`${name} avatar`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Action Button */}
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
        View Profile
      </button>
    </div>
  );
}
