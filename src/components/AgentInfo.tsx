'use client'

import { useEffect, useState } from "react"

export default function AgentInfo() {
  const [agentFirstName, setAgentFirstName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/agent-info')
        if (!response.ok) {
          throw new Error('Failed to fetch agent information')
        }
        const data = await response.json()
        setAgentFirstName(data.firstName)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Agent First Name</h2>
      <p className="text-xl">{agentFirstName}</p>
    </div>
  )
}

