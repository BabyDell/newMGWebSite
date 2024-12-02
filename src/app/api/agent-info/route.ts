import { NextResponse } from "next/server"

export async function GET() {
  const apiUrl = 'https://sparkapi.com/v1/my/account'

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.SPARKAPI_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch agent information from Spark API')
    }

    const data = await response.json()
    console.log('Fetched data:', data.D.Results)
    // Assuming the API returns the agent's full name in a field called 'Name'
    const fullName = data.D.Results[0].Name
    const firstName = fullName.split(' ')[0]

    return NextResponse.json({ firstName })
  } catch (error) {
    console.error("Error fetching data from Spark API:", error)
    return NextResponse.json({ error: "Failed to fetch agent information" }, { status: 500 })
  }
}

