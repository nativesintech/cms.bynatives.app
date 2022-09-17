export function Card({ children }) {
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row border border-solid border-gray-600 mb-6 shadow rounded">
      {children}
    </div>
  )
}
