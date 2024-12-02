// export default class SparkApi {
//     private accessToken: string
  
//     constructor(accessToken: string) {
//       this.accessToken = accessToken
//     }
  
//     private async fetch(endpoint: string) {
//       const response = await fetch(`https://sparkapi.com/v1${endpoint}`, {
//         headers: {
//           Authorization: `Bearer ${this.accessToken}`,
//           'Content-Type': 'application/json',
//         },
//       })
  
//       if (!response.ok) {
//         throw new Error(`API request failed: ${response.statusText}`)
//       }
  
//       return response.json()
//     }
  
//     async getAgentInfo(agentId: string) {
//       return this.fetch(`/agents/${agentId}`)
//     }
  
//     async getAgentListings(agentId: string) {
//       return this.fetch(`/listings?_filter=ListAgentId Eq '${agentId}'`)
//     }
//   }
  
  