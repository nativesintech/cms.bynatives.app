export function Card({ children }) {
  return (
    <div className="flex flex-col mb-6 overflow-hidden border border-gray-600 border-solid rounded shadow lg:flex-row">
      {children}
    </div>
  )
}
