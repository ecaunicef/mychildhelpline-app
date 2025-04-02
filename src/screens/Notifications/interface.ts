export interface BroadcastData {
    area_level1: string // Comma-separated list of area codes
    created: string // ISO date string for when the data was created
    createdby: string // ID of the user who created the data
    deleted: string | null // Nullable, representing a deletion status or date
    id: number // Unique identifier for the broadcast
    is_scheduled: number // 0 or 1 indicating if it's scheduled
    message: string // The main message content
    message_category: string // Category identifier for the message
    scheduled: string // ISO date string for when the message is scheduled
    sent: string // ISO date string for when the message was sent
    subtitle: string | null // Nullable subtitle for the message
    title: string // Title of the broadcast
    updated: string // ISO date string for when the data was last updated
    viewblogcount: number // Count of views for the related blog
    sort: any
}
