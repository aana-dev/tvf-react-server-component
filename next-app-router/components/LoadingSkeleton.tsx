export default function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      {/* Avatar skeleton */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>

      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
      </div>

      {/* Button skeleton */}
      <div className="mt-4 h-10 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}
