export default function DynamicContent() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">
        ⚡ Dynamic Generation (Request Time)
      </h3>
      <div className="space-y-2 text-sm">
        <p className="text-blue-600">
          The content is generated fresh on each request. Refresh the page to
          see it change!
        </p>
        <div className="bg-blue-100 p-3 rounded mt-3">
          <p className="text-blue-800 font-medium">How it works:</p>
          <ul className="text-blue-700 text-xs mt-1 space-y-1">
            <li>• Server Component runs on each request</li>
            <li>• HTML generated "on-demand"</li>
            <li>• Different for each user/request</li>
            <li>• Requires a Node.js server</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
