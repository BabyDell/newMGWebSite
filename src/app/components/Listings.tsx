'use client'

import { useEffect, useState } from "react"
import ListingCard from "./ListingCard"

export default function AgentListings() {
  const [listings, setListings] = useState([])
  const [agentName, setAgentName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/listings')
        if (!response.ok) {
          throw new Error('Failed to fetch listings')
        }
        const data = await response.json()
        setListings(data.listings || []) // Ensure listings is an array
        setAgentName(data.agentName || "")
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message)
          } else {
            setError('An unknown error occurred')
          }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Test demo api key given awaiting real key</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.length > 0 ? (
          listings.map((listing: any) => (
            <ListingCard key={listing.Id} listing={listing} />
          ))
        ) : (
          <div>No listings available</div>
        )}
      </div>
    </div>
  )
}