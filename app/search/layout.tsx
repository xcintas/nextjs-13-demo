import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <h1>Search</h1>

      <div className="flex-1 pl-5">
        {/* @ts-ignore*/}
        <Search />

        <div>{children}</div>
      </div>
    </main>
  )
}
