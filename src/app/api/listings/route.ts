import { NextResponse } from "next/server"
import { URLSearchParams } from "url"

export async function GET() {
  const apiUrl = 'https://sparkapi.com/v1/listings'
  const queryParams = new URLSearchParams({
    // _filter: `ListAgentId Eq '${process.env.AGENT_ID}'`,
    // _limit: '10',
    // _expand: 'PrimaryPhoto'
  })

  try {
    const response = await fetch(`${apiUrl}?${queryParams}`, {
      headers: {
        'Authorization': `Bearer ${process.env.SPARKAPI_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch listings from Spark API')
    }

    const data = await response.json()

    return NextResponse.json({
      listings: data.D.Results
    })
  } catch (error) {
    console.error("Error fetching data from Spark API:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}

