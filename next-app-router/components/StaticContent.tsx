export default function StaticContent() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-green-800 mb-3">
        📄 Static Generation (Build Time)
      </h3>
      <div className="space-y-2 text-sm">
        <p className="text-green-600">
          Build the app to out folder to see if the timestamp and ID are the
          same.
        </p>
        <div className="bg-green-100 p-3 rounded mt-3">
          <p className="text-green-800 font-medium">How it works:</p>
          <ul className="text-green-700 text-xs mt-1 space-y-1">
            <li>• Server Component runs during `next build`</li>
            <li>• HTML is pre-generated and cached</li>
            <li>• Same HTML served to all users</li>
            <li>• No server required for hosting!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
